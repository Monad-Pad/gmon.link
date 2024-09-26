import { getVerifiedProjects, VerifiedProject } from '@/lib/project/get-verified-projects';
import { useEffect, useRef, useState } from 'react';
import { ProjectsGrid } from './projects-grid';
import { getProjectsByQuery } from '../../lib/project/get-projects';
import { ProjectType } from '../../lib/types/projects';

export default function Results({ query, tags }: { query: string; tags?: string[] }) {
  const [projects, setProjects] = useState<VerifiedProject[] | ProjectType[]>([]);
  const hasInited = useRef(false);

  useEffect(() => {
    async function fetchDefaultProjects() {
      const defaultProjects = await getVerifiedProjects();
      setProjects(defaultProjects || []);
      hasInited.current = true;
    }
    fetchDefaultProjects();
  }, []);

  useEffect(() => {
    async function fetchQueryResults() {
      const queryResults = await getProjectsByQuery(query);
      setProjects(queryResults || []);
    }
    if (hasInited) fetchQueryResults();
  }, [query, tags]);

  useEffect(() => {
    console.log('tags', tags);
    console.log('query', query);
  }, [query, tags]);

  return <ProjectsGrid projects={projects} />;
}
