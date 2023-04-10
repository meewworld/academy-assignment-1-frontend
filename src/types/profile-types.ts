import { Database } from './database.types'; 

export type Profile = Database['public']['Tables']['profile']['Row']; 
export type UpdataProfile = Database['public']['Tables']['profile']['Insert']
