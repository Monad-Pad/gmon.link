import { supabase } from "../clients/supabase";
import { ProjectType } from "../types/projects";

export async function getProjectBySlug(slug: string) {
	const { data, error } = await supabase
		.from("projects")
		.select(`*, links(*)`)
		.eq("slug", slug)
		.maybeSingle();

	if (error) {
		console.error(error);
		throw new Error(error.message);
	}

	return data as ProjectType;
}
