'use client';
import ShowcaseGrid from '../../components/landing/showcase/showcase-grid';
import { SearchBar } from '../../components/ui/search-bar';

export default function ProjectsPage() {
  return (
    <main className="bg-background">
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="space-y-2 text-center mb-10">
            <h2 className="text-3xl font-bold mb-5">Projects</h2>
            <SearchBar onSubmit={({ value }) => console.log(value)} />
          </div>
          <ShowcaseGrid />
        </div>
      </section>
    </main>
  );
}
