import HeroSection from "@/components/landing/hero";
import ShowcaseSection from "@/components/landing/showcase/showcase";
import Footer from "@/components/sections/footer";
import { MadeWithSection } from "@/components/sections/made-with";
import { getGithubContributors } from "@/lib/utils/github-contributors";

export const revalidate = 60 * 60; // 1 hour

export default async function Home() {
	const contributors = await getGithubContributors();

	return (
		<main className="bg-background">
			<HeroSection contributors={contributors} />
			<ShowcaseSection />
			<MadeWithSection />
			<Footer contributors={contributors} />
		</main>
	);
}
