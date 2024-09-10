export interface VerifiedProject {
    title: string;
    slug: string;
    description: string;
    avatar_url: string;
    created_at: string;
}

export const getVerifiedProjects = async () => {
    const response = await fetch(`/api/projects/verified`);

    if (!response.ok) {
        console.error(response);
        return;
    };

    const { data } = await response.json();

    return data as VerifiedProject[];
};