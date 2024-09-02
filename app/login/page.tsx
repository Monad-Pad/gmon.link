/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { buttonVariants } from "@/components/ui/button";
import { ProjectType } from "@/lib/types/projects";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginPage() {
	const [isLoading, setIsLoading] = useState(true);
	const [isSuccess, setIsSuccess] = useState(false);
	const [isError, setIsError] = useState<string | null>(null);
	const [projects, setProjects] = useState<ProjectType[]>([]);

	const router = useRouter();
	const searchParams = useSearchParams();
	const accessToken = searchParams.get("access");

	useEffect(() => {
		async function fetchData() {
			if (accessToken && !isSuccess) {
				setIsLoading(true);
				const result = await fetch(`/api/auth?token=${accessToken}`);
				if (result.ok) {
					router.push("/login");
					setIsSuccess(true);
					return;
				} else {
					router.push("/login");
					setIsLoading(false);
					setIsSuccess(false);
					setIsError("Failed to authenticate, make sure you are logging in via Telegram");
					return;
				}
			} else {
				setIsLoading(false);
				setIsSuccess(false);
				setIsError("Failed to authenticate, make sure you are logging in via Telegram");
				return;
			}
		}
		fetchData();
	}, []);

	useEffect(() => {
		async function fetchData() {
			if (isSuccess) {
				const result = await fetch("/api/projects/user");
				if (result.ok) {
					const { data } = await result.json();
					setProjects(data);
				}
				setIsLoading(false);
			}
		}
		fetchData();
	}, [isSuccess]);

	return (
		<main>
			<section className="min-h-screen max-h-screen h-full w-full flex flex-row justify-center items-center px-6">
				<div className="min-h-[400px] max-w-lg w-full bg-card rounded-xl border shadow px-6 py-8 md:px-8 md:py-12 text-center flex flex-col gap-8 items-center justify-center">
					<Image src="/assets/gmon.png" alt="gmon.link" width={100} height={100} className="md:size-24 size-16" />
					<div className="flex flex-col gap-2">
						<h1 className="text-2xl font-bold">Login to gmon.link</h1>
						<p className={cn("text-base text-muted-foreground", isError && "text-red-500")}>
							{isLoading && "Waiting for authentication..."}
							{isSuccess && "You've been logged in successfully!"}
							{isError && isError}
						</p>
					</div>
					<div className="flex gap-2 flex-wrap items-center justify-center">
						{isError ? (
							<div className="flex flex-col gap-2">
								<Link href="https://t.me/gmonlinkbot" className={buttonVariants({ variant: "outline" })}>
									Log in with Telegram
								</Link>
							</div>
						) : isSuccess && projects ? (
							projects.map((project) => (
								<Link key={project.project_id} href={`/projects/${project.slug}`} className={buttonVariants({ variant: "outline" })}>
									Edit {project.title}
								</Link>
							))
						) : (
							<p className="text-muted-foreground">No projects found</p>
						)}
					</div>
				</div>
			</section>
		</main>
	);
}
