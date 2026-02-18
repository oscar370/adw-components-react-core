import { Search } from "lucide-react";
import type { InputHTMLAttributes } from "react";

type EntrySearchRowProps = InputHTMLAttributes<HTMLInputElement>;

export function EntrySearchRow({
  type = "search",
  ...props
}: EntrySearchRowProps) {
  return (
    <li>
      <label className="hover:bg-hover has-[input:focus-visible]:bg-hover flex min-h-13 flex-col justify-center px-4 transition-colors">
        <div className="flex items-center gap-2">
          <Search size={16} />

          <input
            className="placeholder:text-dim-foreground h-full w-full border-none outline-none placeholder:opacity-80 focus:opacity-100"
            type={type}
            {...props}
          />
        </div>
      </label>
    </li>
  );
}
