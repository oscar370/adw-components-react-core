import { Search } from "lucide-react";
import type { InputHTMLAttributes } from "react";

type EntrySearchProps = InputHTMLAttributes<HTMLInputElement>;

export function EntrySearch({ type = "search", ...props }: EntrySearchProps) {
  return (
    <div className="hover:bg-hover has-[input:focus-visible]:bg-hover w-full overflow-hidden rounded-md shadow-sm transition-colors">
      <div className="bg-card-background flex h-full w-full items-center gap-2 p-2">
        <Search size={16} />

        <input
          className="placeholder:text-dim-foreground h-full w-full border-none outline-none placeholder:opacity-80 focus:opacity-100"
          type={type}
          {...props}
        />
      </div>
    </div>
  );
}
