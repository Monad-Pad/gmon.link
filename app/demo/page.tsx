import { HeroSection } from "@/components/sections/hero";
import { LinksSection } from "@/components/sections/links";
import { LinkType } from "@/lib/types/links";

const links: LinkType[] = [
	{
		link_id: 1,
		project_id: 1,
		url: "https://monadpad.com",
		title: "Brand & Media Kit",
		description: "Download our brand assets and media kit.",
		icon: {
            icon: "plus",
            featured: false,
        },
		created_at: "2022-01-01T00:00:00Z",
	},
    {
		link_id: 1,
		project_id: 1,
		url: "https://monadpad.com",
		title: "Purple Frens NFT",
		description: null,
		icon: {
            icon: "plus",
            featured: true,
        },
		created_at: "2022-01-01T00:00:00Z",
	},
];

export default function DemoPage() {
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
			<LinksSection links={links} />
		</main>
	);
}
