"use client";

import { showcaseProjects } from "@/lib/showcase/projects";
import Image from "next/image";
import { motion } from "framer-motion";

export function Showcase() {
	const projects = [
		...showcaseProjects,
		...showcaseProjects,
	].flat();

	return (
		<div className="absolute inset-0 w-full h-full flex flex-row gap-6 px-4 overflow-hidden">
			{[1, -1].map((direction, rowIndex) => (
				<motion.div
					key={rowIndex}
					className="flex flex-col gap-6" // Changed to flex-col for column format
					initial={{ y: direction * 100 }}
					animate={{ y: direction * -100 }}
					transition={{
						duration: 5, // Reduced duration for quicker animation
						repeat: Infinity,
						ease: "linear"
					}}
				>
					{projects.map((project, index) => (
						project ? (
							<Image
								src={project}
								alt="Project"
								width={200}
								height={200}
								key={index}
								className="size-24 outline outline-2 outline-border border-2 border-card rounded-2xl"
							/>
						) : (
							<div key={index} className="w-24 h-24"></div>
						)
					))}
				</motion.div>
			))}
		</div>
	);
}
