import HeroSection from "@/components/landing/hero";
import ShowcaseSection from "@/components/landing/showcase/showcase";
import { MadeWithSection } from "@/components/sections/made-with";

export default function Home() {
	return (
		<main className="bg-background">
			<HeroSection />
			<ShowcaseSection />
			<MadeWithSection />
		</main>
	);
}
