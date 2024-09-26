import { supabase, supabaseApiClient } from '../clients/supabase';
import { ProjectType } from '../types/projects';

export async function getProjectsByQuery(query: string) {
  const { data, error } = await supabase
    .from('projects')
    .select('title, slug, description, avatar_url')
    .eq('slug', 'jim17')
    .order('created_at', { ascending: false })
    .limit(9);

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data as ProjectType[];
}
