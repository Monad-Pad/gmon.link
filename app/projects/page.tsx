'use client';
import { useState } from 'react';
import Results from '../../components/projects/results';
import { SearchBar, SearchTag } from '../../components/ui/search-bar';

export default function ProjectsPage() {
  const [value, setValue] = useState('');
  const [tags, setTags] = useState<SearchTag[]>();

  return (
    <main className="bg-background">
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="space-y-2 text-center mb-10">
            <h2 className="text-3xl font-bold mb-5">Projects</h2>
            <SearchBar
              onSubmit={({ value, tags }) => {
                setValue(value);
                setTags(tags);
              }}
            />
          </div>
          <Results value={value} tags={tags} />
        </div>
      </section>
    </main>
  );
}
