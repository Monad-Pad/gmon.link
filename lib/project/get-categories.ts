import { LinkType } from "../types/links";

export function getCategories(links: LinkType[] | null | undefined): string[] {
	if (!links) return [];

	const categories = links.map((link) => link.category).flat();
	const uniqueCategories = Array.from(new Set(categories));

	return uniqueCategories;
}
