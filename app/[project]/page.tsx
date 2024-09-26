import ActionBar from "@/components/sections/action-bar";
import { HeroSection } from "@/components/sections/hero";
import { LinksSection } from "@/components/sections/links";
import { MadeWithSection } from "@/components/sections/made-with";
import FallingImages from "@/components/ui/falling-images";
import { getProjectBySlug } from "@/lib/project/get-project";
import { ButtonType } from "@/lib/types/sections";
import { IMAGE_BASE_URL } from "@/lib/utils";
import getImageUrl from "@/lib/utils/images-matcher";
import { notFound } from "next/navigation";

export const revalidate = 0;
export const dynamic = "force-dynamic";

export const generateMetadata = async ({ params }: { params: { project: string } }) => {
	const project = await getProjectBySlug(params.project);

	if (!project) {
		return notFound();
	}

	return {
		title: `${project.title} Links - gmon.link`,
		description: project.description,
	};
};

export default async function ProjectPage({ params }: { params: { project: string } }) {
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
				avatarUrl={`${IMAGE_BASE_URL}${project.avatar_url}`}
				isVerified={project.is_verified}
				buttons={project.buttons}
			/>
			<LinksSection links={links} />
			{/* <MadeWithSection /> */}
			<ActionBar project={project} />
			{project.welcome_emoji && (
				<FallingImages
					imageSrc={getImageUrl(project.welcome_emoji)!}
					imageAlt="Falling image"
					imageWidth={50}
					imageHeight={50}
					count={10} // Number of falling images
				/>
			)}
		</main>
	);
}
