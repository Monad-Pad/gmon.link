import { LinkType } from "@/lib/types/links";
import { Label } from "../ui/label";
import Link from "next/link";
import { ArrowUpRight, Plus, Settings, User } from "lucide-react";
import { Icons } from "@/lib/types/icons";
import { getCategories } from "@/lib/project/get-categories";

interface LinksSectionProps {
	links: LinkType[] | [] | null;
}

export function LinksSection({ links }: LinksSectionProps) {
	const categories = getCategories(links);

	return (
		<section className="mx-auto max-w-md w-full p-4 md:pb-4 pb-20">
			<div className="w-full flex flex-col gap-8">
				{!links || links?.length === 0 ? (
					<div className="w-full px-6 py-4 shadow rounded-xl border">
						<h3 className="text-lg font-semibold">No links found</h3>
						<p className="text-sm text-muted-foreground">
							You can add links by clicking the <span className="font-semibold">Add Link</span> button in Telegram.
						</p>
					</div>
				) : (
					categories.map((category) => {
						const categoryLinks = links.filter((link) => link.category === category);

						return (
							<div key={category}>
								<h2 className="text-sm mb-2 font-semibold">
									{category === "none" ? "Links" : category.charAt(0).toUpperCase() + category.slice(1)}
								</h2>
								<div className="flex flex-col gap-2">
									{categoryLinks.map((link, idx) => {
										const IconComponent = link.icon ? Icons[link.icon.icon] : null;

										return (
											<Link
												key={idx}
												href={link.url}
												target="_blank"
												rel="noopener noreferrer"
												className={`relative px-6 py-4 shadow rounded-xl flex flex-row gap-4 border transition-all duration-150 ease-in-out ${
													idx === 0
														? "bg-primary text-primary-foreground border-card outline outline-foreground/30 outline-1 hover:bg-primary/90"
														: "bg-card hover:bg-muted"
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
													<h3 className={`text-lg font-semibold ${idx === 0 ? "text-primary-foreground" : "text-foreground"}`}>
														{link.title}
													</h3>
													{link.description && (
														<p className={`text-sm ${idx === 0 ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
															{link.description}
														</p>
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
							</div>
						);
					})
				)}
			</div>
		</section>
	);
}
