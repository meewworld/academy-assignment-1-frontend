import { supabase } from './supabaseClient';
import { Profile } from 'types/profile-types'; 


export const getProfileById = async (id: string) => {
    const { data, error } = await supabase
      .from('profile')
      .select('*')
      .eq('id', id)
      .limit(1)
      .single();
      if(error) throw error; 
      return data as Profile; 
};

export const profileData = async ( profile:Profile )=> { 
     await supabase 
    .from('profile')
    .update({
        first_name: profile.first_name,
        last_name: profile.last_name,
        city: profile.city,
        phone_number: profile.phone_number, 
      })
      .eq('id',profile.id); 
}; 




