export type SectionType = {
    section_id: number;
    project_id: number;
    type: string;
    content: JSON;
    order: number;
    created_at: string;
}

export type ButtonType = {
    label: string;
    url: string;
}