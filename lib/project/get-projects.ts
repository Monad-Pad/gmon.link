"use server";
import { supabase } from "../clients/supabase";
import { VerifiedProject } from "./get-verified-projects";

export async function getProjectsByQuery({
  query,
  limit = 1000,
  range,
}: {
  query?: string;
  limit?: number;
  range?: { from: number; to: number };
}) {
  if (range && range?.from >= range?.to) {
    throw new TypeError("Invalid range");
  }

  const { data, error, count } = await supabase
    .from("projects")
    .select("title, slug, description, avatar_url", { count: "exact" })
    .ilike("slug", !query ? "*" : `%${query.toLowerCase()}%`)
    .order("project_id", { ascending: true })
    .limit(limit)
    .range(range?.from ? range.from : 0, range?.to ? range.to : limit - 1);

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return { data: data as VerifiedProject[], count };
}
