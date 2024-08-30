import { HeroSection } from "@/components/sections/hero";
import { LinksSection } from "@/components/sections/links";
import { getProjectBySlug } from "@/lib/project/get-project";
import { ButtonType } from "@/lib/types/sections";
import { notFound } from "next/navigation";

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export const generateMetadata = async ({ params }: { params: { project: string } }) => {
	const project = await getProjectBySlug(params.project);
	console.log(project);

	if (!project) {
		return notFound();
	}

	return {
		title: `${project.title} Links - gmon.link`,
		description: project.description,
	};
};

export default async function ProjectPage( { params }: { params: { project: string } } ) {
	const project = await getProjectBySlug(params.project);

	if (!project) {
		return notFound();
	}

	const links = project.links;

	return (
		<main className="bg-background">
			<HeroSection
				title={project.title}
				subtitle={project.description}
				avatarUrl={`https://api.monadpad.com/storage/v1/object/public/${project.avatar_url}`}
				isVerified={project.is_verified}
				buttons={project.buttons}
			/>
			<LinksSection links={links} />
		</main>
	);
}