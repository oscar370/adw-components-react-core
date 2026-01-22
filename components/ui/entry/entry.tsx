import type { InputHTMLAttributes } from "react";

type EntryProps = InputHTMLAttributes<HTMLInputElement> & {
  title: string;
};

export function Entry({ title, ...props }: EntryProps) {
  return (
    <label className="flex w-full cursor-pointer flex-col gap-0.5 transition-colors">
      <span className="w-full">{title}</span>

      <div className="relative overflow-hidden rounded-md">
        <input
          className="h-full w-full border-none bg-(--card-bg) p-2 outline-none placeholder:text-(--dim-fg) placeholder:opacity-80 focus:opacity-100"
          {...props}
        />

        <div className="absolute inset-0 transition-colors hover:bg-(--hover)"></div>
      </div>
    </label>
  );
}
