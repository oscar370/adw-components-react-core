import { Search } from "lucide-react";
import type { InputHTMLAttributes } from "react";

type EntrySearchProps = InputHTMLAttributes<HTMLInputElement>;

export function EntrySearch({ ...props }: EntrySearchProps) {
  return (
    <div className="overflow-hidden rounded-md transition-colors hover:bg-(--hover)">
      <div className="flex h-full w-full items-center gap-2 bg-(--card-bg) p-2">
        <Search />

        <input
          className="h-full w-full border-none outline-none placeholder:text-(--dim-fg) placeholder:opacity-80 focus:opacity-100"
          {...props}
        />
      </div>
    </div>
  );
}
