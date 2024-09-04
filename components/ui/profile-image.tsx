import { cva } from "class-variance-authority";
import Image from "next/image";
import React from "react";

const profileImageVariants = cva("outline outline-border border border-card", {
	variants: {
		size: {
			sm: "size-16 outline-1",
			md: "size-20 outline-1",
			lg: "size-24 outline-2 border-2",
		},
	},
	defaultVariants: {
		size: "lg",
	},
});

interface ProfileImageProps {
	avatarUrl: string;
	title: string;
	size?: "sm" | "md" | "lg";
	borderRadius?: string;
}

export default function ProfileImage({ avatarUrl, title, size = "md", borderRadius = "rounded-full" }: ProfileImageProps) {
	const className = profileImageVariants({ size });
    const pxSize = 200;
	return (
		<Image
			unoptimized
			loading="eager"
			src={avatarUrl}
			alt={title}
			width={pxSize}
			height={pxSize}
			className={`${className} ${borderRadius}`}
		/>
	);
}