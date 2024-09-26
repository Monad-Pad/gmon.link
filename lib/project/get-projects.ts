import { supabase, supabaseApiClient } from "../clients/supabase";
import { ProjectType } from "../types/projects";

export async function getProjectsByQuery(query: string) {
  const { data, error } = await supabase
    .from("projects")
    .select("title, slug, description, avatar_url")
    .ilike("slug", !query ? "*" : `%${query.toLowerCase()}%`)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data as ProjectType[];
}
