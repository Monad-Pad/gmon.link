import { UserType } from "./user";

export type ProjectType = {
    project_id: number;
    user_id: UserType;
    title: string;
    slug: string;
    theme: string;
    avatar_url: string;
    is_verified: boolean;
    created_at: string;
}