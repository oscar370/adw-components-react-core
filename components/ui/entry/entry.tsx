import type { InputHTMLAttributes } from "react";

type EntryProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Entry({ label, ...props }: EntryProps) {
  return (
    <label className="flex w-full cursor-pointer grid-cols-3 flex-col gap-0.5 rounded-xl px-4 py-2 transition-colors focus-within:bg-(--hover) hover:bg-(--hover)">
      <span className="w-full">{label}</span>

      <input
        className="h-full w-full rounded-md border-none bg-(--card-bg) p-2 outline-none placeholder:text-(--dim-fg) placeholder:opacity-80 focus:opacity-100"
        {...props}
      />
    </label>
  );
}
