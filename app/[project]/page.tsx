import { HeroSection } from "@/components/sections/hero";
import { LinksSection } from "@/components/sections/links";

export default function ProjectPage() {


	return (
		<main className="bg-background">
			<HeroSection
				title="Monad Pad"
				subtitle="Leading the way as the first launchpad on Monad."
				avatarUrl="https://api.monadpad.com/storage/v1/object/public/gmon.link/monadpad.png"
				isVerified={false}
				primaryButton={{ label: "Website", url: "#" }}
				secondaryButton={{ label: "Whitepaper", url: "#" }}
			/>
			<LinksSection links={} />
		</main>
	);
}
