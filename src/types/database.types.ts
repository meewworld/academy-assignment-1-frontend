export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      permission: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id?: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
      }
      profile: {
        Row: {
          city: string
          first_name: string
          id: string
          last_name: string
          phone_number: string
        }
        Insert: {
          city: string
          first_name: string
          id?: string
          last_name: string
          phone_number: string
        }
        Update: {
          city?: string
          first_name?: string
          id?: string
          last_name?: string
          phone_number?: string
        }
      }
      profile_role_junction: {
        Row: {
          profile_fk: string
          role_fk: string
        }
        Insert: {
          profile_fk: string
          role_fk: string
        }
        Update: {
          profile_fk?: string
          role_fk?: string
        }
      }
      role: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id?: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
      }
      role_permission_junction: {
        Row: {
          permission_fk: string
          role_fk: string
        }
        Insert: {
          permission_fk: string
          role_fk: string
        }
        Update: {
          permission_fk?: string
          role_fk?: string
        }
      }
      todo: {
        Row: {
          done: boolean
          id: string
          profile_fk: string | null
          todo_name: string
        }
        Insert: {
          done: boolean
          id?: string
          profile_fk?: string | null
          todo_name: string
        }
        Update: {
          done?: boolean
          id?: string
          profile_fk?: string | null
          todo_name?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
