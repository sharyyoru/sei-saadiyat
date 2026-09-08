import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

function createSupabaseClient(): SupabaseClient | null {
  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }
  return createClient(supabaseUrl, supabaseAnonKey);
}

function createSupabaseAdmin(): SupabaseClient | null {
  if (!supabaseUrl) {
    return null;
  }
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || supabaseAnonKey;
  if (!serviceKey) {
    return null;
  }
  return createClient(supabaseUrl, serviceKey);
}

export const supabase = createSupabaseClient();
export const supabaseAdmin = createSupabaseAdmin();
