import { LinkType } from "@/lib/types/links";
import { Label } from "../ui/label";
import Link from "next/link";
import { ArrowUpRight, Plus, Settings, User } from "lucide-react";
import { Icons } from "@/lib/types/icons";

interface LinksSectionProps {
	links: LinkType[] | [] | null;
}

export function LinksSection({ links }: LinksSectionProps) {
	if (!links) {
		return null;
	}

	return (
		<section className="mx-auto max-w-md w-full p-4">
			<p className="text-sm mb-2 font-semibold">Links</p>
			<div className="w-full flex flex-col gap-4">
				{links.map((link, idx) => {
					const IconComponent = link.icon ? Icons[link.icon.icon] : null;

					return (
						<Link
							key={idx}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							className={`relative px-6 py-4 shadow rounded-xl flex flex-row gap-4 border ${
								idx === 0 ? "bg-primary text-primary-foreground border-card outline outline-foreground/30 outline-1" : "bg-card"
							} ${link.description ? "" : "items-center"}`}
						>
							{IconComponent && (
								<div
									className={`size-10 flex items-center justify-center ${
										link.icon?.featured
											? "rounded-full shadow bg-primary text-primary-foreground"
											: idx === 0
											? "text-primary-foreground"
											: "text-primary"
									}`}
								>
									<IconComponent size={24} />
								</div>
							)}
							<div className="space-y-1 pr-6">
								<h3 className={`text-lg font-semibold ${idx === 0 ? "text-primary-foreground" : "text-foreground"}`}>{link.title}</h3>
								{link.description && (
									<p className={`text-sm ${idx === 0 ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{link.description}</p>
								)}
							</div>
							<ArrowUpRight
								className={`absolute top-4 right-4 ${idx === 0 ? "text-primary-foreground/70" : "text-muted-foreground"}`}
								size={24}
							/>
						</Link>
					);
				})}
			</div>
		</section>
	);
}
