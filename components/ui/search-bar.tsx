"use client";
import React from "react";
import { Button } from "./button";
import { Checkbox } from "./checkbox";
import { Input } from "./input";

interface SearchBarProps {
  onSubmit: ({ value, tags }: { value: string; tags?: string[] }) => void;
  tags?: string[];
}

export const SearchBar = ({ onSubmit, tags }: SearchBarProps) => {
  if (tags?.length && new Set(tags).size !== tags.length) {
    throw new TypeError("Duplicate tags are not allowed");
  }

  const [value, setValue] = React.useState("");
  const [selectedTags, setSelectedTags] = React.useState<string[]>();

  const onSubmitSearchBar = () => {
    onSubmit({ value, ...(selectedTags?.length && { tags: selectedTags }) });
  };

  const createOnChangeCheckbox = (tag: string) => () => {
    if (selectedTags?.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...(selectedTags || []), tag]);
    }
  };

  return (
    <div className="flex flex-col align-center gap-3">
      <div className="flex justify-center gap-1">
        <Input
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSubmitSearchBar();
            }
          }}
          type="text"
          placeholder="Search gmon.link..."
          className="max-w-md"
        />
        <Button onClick={onSubmitSearchBar} variant="default" size="default">
          Search
        </Button>
      </div>
      {/* {tags?.length && (
        <div className="flex justify-center ">
          <div className="flex flex-wrap justify-center gap-4 max-w-80">
            {tags.map((tag) => (
              <Checkbox
                checked={selectedTags?.includes(tag)}
                key={`project-tag-${tag}`}
                label={tag}
                onCheckedChange={createOnChangeCheckbox(tag)}
              />
            ))}
          </div>
        </div>
      )} */}
    </div>
  );
};
