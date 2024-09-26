'use client';
import React from 'react';
import { Button } from './button';

export type SearchTag = { displayName: string; value: string };

interface SearchBarProps {
  onSubmit: ({ value, tags }: { value: string; tags?: SearchTag[] }) => void;
  tags?: SearchTag[];
}

export const SearchBar = ({ onSubmit, tags }: SearchBarProps) => {
  const [value, setValue] = React.useState('');

  const onSubmitSearchBar = () => {
    if (value) onSubmit({ value, ...(tags && { tags }) });
  };

  return (
    <div className="flex justify-center gap-1">
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onSubmitSearchBar();
          }
        }}
        type="text"
        placeholder="Search for projects..."
        className="border shadow border-muted-foreground/30 px-2 py-1 rounded-md bg-card transition-colors hover:bg-muted hover:border-muted-foreground/90"
      />
      <Button onClick={onSubmitSearchBar} variant="default" size="default">
        Search
      </Button>
    </div>
  );
};
