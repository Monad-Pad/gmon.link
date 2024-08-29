import Image from "next/image";
import { Button, buttonVariants } from "../ui/button";
import { ButtonType } from "@/lib/types/sections";
import Link from "next/link";

interface HeroSectionProps {
	title: string;
	subtitle: string;
	avatarUrl: string;
	isVerified: boolean;
	primaryButton?: ButtonType;
	secondaryButton?: ButtonType;
}

export function HeroSection({ title, subtitle, avatarUrl, isVerified, primaryButton, secondaryButton }: HeroSectionProps) {
	const borderRadius = isVerified ? "rounded-2xl" : "rounded-full";

	return (
		<section className="mx-auto max-w-md w-full p-4">
			<div className="w-full flex flex-col items-center gap-4 px-6 py-8 border shadow rounded-xl bg-card">
				<Image
					src={avatarUrl}
					alt={title}
					width={200}
					height={200}
					className={`size-24 outline outline-2 outline-border border-2 border-card ${borderRadius}`}
				/>
				<div className="space-y-1 text-center">
					<h1 className="text-2xl font-bold text-foreground">{title}</h1>
					<p className="text-bases text-muted-foreground">{subtitle}</p>
				</div>

				{(primaryButton || secondaryButton) && (
					<div className="flex gap-2 mt-4">
						{primaryButton && (
							<Link className={buttonVariants({ variant: "default" })} href={primaryButton.url}>
								{primaryButton.label}
							</Link>
						)}
						{secondaryButton && (
							<Link className={buttonVariants({ variant: "outline" })} href={secondaryButton.url}>
								{secondaryButton.label}
							</Link>
						)}
					</div>
				)}
			</div>
		</section>
	);
}
