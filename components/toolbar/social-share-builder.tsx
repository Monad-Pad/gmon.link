"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { GalleryThumbnails } from "lucide-react";
import { ProjectType } from "@/lib/types/projects";

export default function SocialShareBuilder({ project }: { project: ProjectType }) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline" size="icon">
					<GalleryThumbnails />
				</Button>
			</DialogTrigger>
		</Dialog>
	);
}
