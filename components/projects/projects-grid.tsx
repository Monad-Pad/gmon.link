import React, { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";
import { VerifiedProject } from "../../lib/project/get-verified-projects";
import Link from "next/link";
import ProfileImage from "../ui/profile-image";
import { IMAGE_BASE_URL } from "../../lib/utils";
import { CheckCircle } from "lucide-react";

interface ProjectsGridProps {
  projects: VerifiedProject[];
  hasInited: boolean;
}

export const ProjectsGrid = ({ projects, hasInited }: ProjectsGridProps) => {
  return (
    <Suspense fallback={<ProjectsSkeletonGrid />}>
      {projects?.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <Link
              key={idx}
              href={`/${project.slug}`}
              className="flex flex-col items-center gap-6 border px-4 py-8 rounded-xl bg-card shadow transition-colors hover:bg-muted hover:border-muted-foreground/20"
            >
              <ProfileImage
                title={project.title}
                avatarUrl={`${IMAGE_BASE_URL}${project.avatar_url}`}
                size="md"
                borderRadius="rounded-xl"
              />
              <div className="text-center space-y-1">
                <div className="flex gap-2 items-center justify-center">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <CheckCircle size={16} className="text-primary dark:text-foreground" />
                </div>
                <p className="text-base text-muted-foreground line-clamp-2">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-lg sm:text-xl text-muted-foreground text-center">
          {hasInited ? "No projects found..." : "Loading..."}
        </p>
      )}
    </Suspense>
  );
};

function ProjectsSkeletonItem() {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton className="w-full h-40 rounded-xl" />
      <Skeleton className="w-full h-4 rounded-full" />
    </div>
  );
}

function ProjectsSkeletonGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <ProjectsSkeletonItem />
      <ProjectsSkeletonItem />
      <ProjectsSkeletonItem />
      <ProjectsSkeletonItem />
      <ProjectsSkeletonItem />
    </div>
  );
}
