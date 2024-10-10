"use client";
import { useState } from "react";
import Results from "../../components/projects/results";
import { SearchBar } from "../../components/ui/search-bar";
import { searchTags } from "../../lib/project/search-tags";
import Link from "next/link";

export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [tags, setTags] = useState<string[]>();

  return (
    <main className="bg-background min-h-screen">
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="space-y-8 text-center mb-10">
            <div className="flex flex-col gap-1 max-w-md mx-auto">
            <h2 className="text-3xl font-bold">☕️ Projects</h2>
            <p className="text-muted-foreground font-medium">
              Browse through the projects created by the gmon.link community. Only verified projects are shown.
            </p>
            <Link href="/" className="underline font-semibold mt-2 transition-all duration-150 ease-in-out hover:text-primary">Back to home</Link>
            </div>
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
