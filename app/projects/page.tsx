"use client";
import { useState } from "react";
import Results from "../../components/projects/results";
import { SearchBar } from "../../components/ui/search-bar";
import { searchTags } from "../../lib/project/search-tags";

export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [tags, setTags] = useState<string[]>();

  return (
    <main className="bg-background">
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="space-y-2 text-center mb-10">
            <h2 className="text-3xl font-bold mb-5">Projects</h2>
            <SearchBar
              onSubmit={({ value, tags }) => {
                setQuery(value);
                setTags(tags);
              }}
              tags={searchTags}
            />
          </div>
          <Results query={query} selectedTags={tags} />
        </div>
      </section>
    </main>
  );
}
