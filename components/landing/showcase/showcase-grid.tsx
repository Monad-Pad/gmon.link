'use client';

import { getVerifiedProjects, VerifiedProject } from '@/lib/project/get-verified-projects';
import { useEffect, useState } from 'react';
import { ProjectsGrid } from '../../projects/projects-grid';

export default function ShowcaseGrid() {
  const [showcase, setShowcase] = useState<VerifiedProject[]>([]);

  useEffect(() => {
    async function fetchShowcase() {
      const showcase = await getVerifiedProjects();
      setShowcase(showcase || []);
    }
    fetchShowcase();
  }, []);

  return <ProjectsGrid projects={showcase} />;
}
