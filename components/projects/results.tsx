'use client';

import { getVerifiedProjects, VerifiedProject } from '@/lib/project/get-verified-projects';
import { useEffect, useState } from 'react';
import { ProjectsGrid } from './projects-grid';

export default function Results({ value, tags }: { value: string; tags?: string[] }) {
  const [projects, setProjects] = useState<VerifiedProject[]>([]);

  useEffect(() => {
    async function fetchShowcase() {
      const defaultProjects = await getVerifiedProjects();
      setProjects(defaultProjects || []);
    }
    fetchShowcase();
  }, []);

  useEffect(() => {
    console.log('tags', tags);
    console.log('value', value);
  }, [value, tags]);

  return <ProjectsGrid projects={projects} />;
}
