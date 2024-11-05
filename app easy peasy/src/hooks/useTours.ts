import { useEffect, useState, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { Tour } from '../types';
import toast from 'react-hot-toast';

export function useTours() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTours = useCallback(async () => {
    try {
      setError(null);
      
      const tourPromise = supabase
        .from('tours')
        .select(`
          id,
          tour_name,
          tour_date,
          bus_name,
          start_time,
          guide_id,
          created_at
        `)
        .order('tour_date', { ascending: true });

      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Request timeout')), 10000)
      );

      const { data: toursData, error: toursError } = await Promise.race([
        tourPromise,
        timeoutPromise
      ]) as any;

      if (toursError) throw toursError;

      const [clientsResponse, guidesResponse] = await Promise.all([
        supabase
          .from('tour_clients')
          .select('*')
          .in('tour_id', toursData.map((tour: any) => tour.id)),
        supabase
          .from('tour_guides')
          .select('*')
          .in('id', toursData.filter((tour: any) => tour.guide_id).map((tour: any) => tour.guide_id))
      ]);

      if (clientsResponse.error) throw clientsResponse.error;
      if (guidesResponse.error) throw guidesResponse.error;

      const toursWithData = toursData.map((tour: any) => ({
        id: tour.id,
        name: tour.tour_name,
        date: tour.tour_date,
        busNumber: tour.bus_number,
        startTime: tour.start_time,
        endTime: tour.end_time,
        meetingPoint: tour.meeting_point,
        clients: clientsResponse.data
          ?.filter(client => client.tour_id === tour.id)
          .map(client => ({
            id: client.id,
            name: client.client_name,
            phone: client.phone,
            checkInStatus: client.check_in_status
          })) || [],
        guide: guidesResponse.data
          ?.find(guide => guide.id === tour.guide_id)
          ? {
              id: guidesResponse.data.find(guide => guide.id === tour.guide_id).id,
              name: guidesResponse.data.find(guide => guide.id === tour.guide_id).guide_name,
              email: guidesResponse.data.find(guide => guide.id === tour.guide_id).email,
              phone: guidesResponse.data.find(guide => guide.id === tour.guide_id).phone,
              availability: guidesResponse.data.find(guide => guide.id === tour.guide_id).availability
            }
          : undefined
      }));

      setTours(toursWithData);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load tours';
      setError(errorMessage);
      toast.error(errorMessage);
      console.error('Error fetching tours:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTours();
    
    const channel = supabase
      .channel('tours')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'tours' },
        () => {
          fetchTours();
        }
      )
      .subscribe((status) => {
        if (status === 'SUBSCRIBED') {
          console.log('Successfully subscribed to tours changes');
        }
        if (status === 'CLOSED') {
          console.log('Subscription to tours changes closed');
        }
        if (status === 'CHANNEL_ERROR') {
          console.error('Error in tours subscription channel');
          toast.error('Real-time updates disconnected');
        }
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }, [fetchTours]);

  const updateClientStatus = async (clientId: string, status: 'checked-in' | 'no-show') => {
    try {
      const { error } = await supabase
        .from('tour_clients')
        .update({ check_in_status: status })
        .eq('id', clientId);

      if (error) throw error;
      
      toast.success('Status updated successfully');
      await fetchTours();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error updating status';
      toast.error(errorMessage);
      console.error('Error updating client status:', error);
    }
  };

  const assignGuide = async (tourId: string, guideId: string) => {
    try {
      const { error } = await supabase
        .from('tours')
        .update({ guide_id: guideId })
        .eq('id', tourId);

      if (error) throw error;
      
      toast.success('Guide assigned successfully');
      await fetchTours();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error assigning guide';
      toast.error(errorMessage);
      console.error('Error assigning guide:', error);
    }
  };

  return {
    tours,
    loading,
    error,
    updateClientStatus,
    assignGuide,
    refetch: fetchTours
  };
}