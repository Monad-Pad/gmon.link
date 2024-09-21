"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";

export interface Contributor {
	avatar_url: string;
	login: string;
	html_url: string;
	contributions: number;
}

export default function ContributorCycle({ contributors, size, showCount = 1 }: { contributors: Contributor[], size: number, showCount?: number }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % contributors.length);
		}, 5000);

		return () => clearInterval(interval);
	}, [contributors.length]);

	const visibleContributors = Array.from({ length: showCount }, (_, i) => 
		contributors[(currentIndex + i) % contributors.length]
	);

	return (
		<div className="flex space-x-2">
			{visibleContributors.map((contributor, index) => (
				<TooltipProvider key={contributor.login}>
					<Tooltip>
						<TooltipTrigger asChild>
							<Link href={contributor.html_url}>
								<Image
									className="rounded-full border"
									src={contributor.avatar_url}
									alt={contributor.login}
									width={size}
									height={size}
								/>
							</Link>
						</TooltipTrigger>
						<TooltipContent>
							<p className="font-medium">
								☕️ {" "}
								<Link href={contributor.html_url} target="_blank" className="font-medium underline">
									<b>{contributor.login}</b>
								</Link> has contributed <b>{contributor.contributions}</b> times to gmon.link 💜
							</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			))}
		</div>
	);
}
