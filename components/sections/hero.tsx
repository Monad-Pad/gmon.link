import Image from "next/image";
import { Button, buttonVariants } from "../ui/button";
import { ButtonType } from "@/lib/types/sections";
import Link from "next/link";
import { VerifiedBadge } from "../ui/verified-badge";
import ProfileImage from "../ui/profile-image";
import { IMAGE_BASE_URL } from "@/lib/utils";

interface HeroSectionProps {
	title: string;
	subtitle: string;
	avatarUrl: string;
	isVerified: boolean;
	buttons: ButtonType[] | null;
}

export function HeroSection({ title, subtitle, avatarUrl, isVerified, buttons }: HeroSectionProps) {
	const borderRadius = isVerified ? "rounded-2xl" : "rounded-full";

	return (
		<section className="mx-auto max-w-md w-full p-4">
			<div className="w-full flex flex-col items-center gap-4 px-6 py-8 border shadow rounded-xl bg-card">
				<ProfileImage title={title} avatarUrl={avatarUrl} size="md" borderRadius={borderRadius} />
				<div className="space-y-1 text-center">
					<div className="flex items-center justify-center gap-2">
						<h1 className="text-2xl font-bold text-foreground">{title}</h1>
						{isVerified && <VerifiedBadge />}
					</div>
					<p className="text-bases text-muted-foreground">{subtitle}</p>
				</div>
				{buttons && buttons.length > 0 && (
					<div className="flex gap-2 mt-4">
						{buttons[0] && (
							<Link className={buttonVariants({ variant: "default" })} href={buttons[0].url}>
								{buttons[0].label}
							</Link>
						)}
						{buttons[1] && (
							<Link className={buttonVariants({ variant: "outline" })} href={buttons[1].url}>
								{buttons[1].label}
							</Link>
						)}
					</div>
				)}
			</div>
		</section>
	);
}
