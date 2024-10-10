import { VerifiedProject } from "@/lib/project/get-verified-projects";
import { useEffect, useRef, useState } from "react";
import { getProjectsByQuery } from "../../lib/project/get-projects";
import { getPagination } from "../../lib/utils/get-pagination";
import { Button } from "../ui/button";
import { ProjectsGrid } from "./projects-grid";

const pageSize = 21;

export default function Results({ query, selectedTags }: { query: string; selectedTags?: string[] }) {
  const [projects, setProjects] = useState<VerifiedProject[]>([]);
  const hasInited = useRef(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const previousPageNumber = useRef(pageNumber);
  const [resultsTotal, setResultsTotal] = useState(0);
  const previousCombinedInputStr = useRef<string>();

  const combineInputsAsString = (query: string, tags: string[]) => query + (tags || []).join(",");

  // handle default data
  useEffect(() => {
    async function fetchDefaultProjects() {
      const { data: defaultProjects, count: initialCount } = await getProjectsByQuery({ limit: pageSize });
      if (!hasInited.current) setProjects(defaultProjects || []);

      hasInited.current = true;
      if (initialCount) {
        setResultsTotal(initialCount);
      }
      setIsLoading(false);
    }
    fetchDefaultProjects();
  }, []);

  // handle new data
  useEffect(() => {
    if (!hasInited.current) return;

    setIsLoading(true);
    let pageNum = pageNumber;

    // reset results and pageNumber when new query or tags are selected (isFresh)
    let isFresh = false;
    const combinedInputString = combineInputsAsString(query, selectedTags || []);
    const hasNewInput = combinedInputString && previousCombinedInputStr.current !== combinedInputString;
    const hasRemovedQuery = previousCombinedInputStr.current && !query;
    if (hasNewInput || hasRemovedQuery) {
      setPageNumber(0);
      previousPageNumber.current = 0;
      setProjects([]);
      isFresh = true;
    }

    if (isFresh) {
      pageNum = 0;
    }

    // get data based on query and pagination inputs
    async function fetchQueryResults() {
      const { from, to } = getPagination(pageNum, pageSize);
      const { data: queryResults, count: newCount } = await getProjectsByQuery({
        query,
        range: { from, to },
      });
      setProjects((prev) => [...(isFresh ? [] : prev), ...(queryResults || [])]);
      if (newCount) {
        setResultsTotal(newCount);
      }
      setIsLoading(false);
    }

    // ensure it does not fetch the same data more than once
    const hasSameInput =
      previousCombinedInputStr.current === combinedInputString && pageNum === previousPageNumber.current;
    if (!hasSameInput) {
      previousPageNumber.current = pageNum;
      previousCombinedInputStr.current = combinedInputString;
      fetchQueryResults();
    }

    // placeholder implementation for selectedTags
    if (selectedTags?.length) console.log("selectedTags", selectedTags);
  }, [query, selectedTags, pageNumber]);

  return (
    <div className="flex flex-col align-center">
      <ProjectsGrid projects={projects} isLoading={isLoading} />
      {!!(projects?.length && hasInited.current && resultsTotal > (pageNumber + 1) * pageSize) && (
        <div className="flex justify-center">
          <Button
            onClick={() => setPageNumber((prev) => prev + 1)}
            size="default"
            variant="default"
            className="mt-10"
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}
