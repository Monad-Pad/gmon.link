import { IconType } from "./icons";

export type LinkType = {
    link_id: number;
    project_id: number;
    url: string;
    title: string;
    description: string | null;
    icon: IconType | null;
    created_at: string;
}