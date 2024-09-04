import { PLATFORM_URL } from "../utils";

export interface VerifiedProject {
    title: string;
    slug: string;
    description: string;
    avatar_url: string;
    created_at: string;
}

export const getVerifiedProjects = async () => {
    const response = await fetch(`${PLATFORM_URL}/api/projects/verified`);
    const { data } = await response.json();

    if (!response.ok) return;

    return data as VerifiedProject[];

    // return data.map((project: VerifiedProject) => ({
    //     title: project.title,
    //     slug: project.slug,
    //     description: project.description,
    //     avatar_url: project.avatar_url,
    //     created_at: project.created_at,
    // }));
};