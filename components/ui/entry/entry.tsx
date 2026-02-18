import type { InputHTMLAttributes } from "react";

type EntryProps = InputHTMLAttributes<HTMLInputElement> & {
  title?: string;
};

export function Entry({ title, ...props }: EntryProps) {
  return (
    <label className="flex w-full cursor-pointer flex-col gap-0.5">
      {title && <span className="w-full">{title}</span>}

      <div className="hover:bg-hover overflow-hidden rounded-md shadow-sm transition-colors has-[input:focus]:hover:bg-transparent">
        <input
          className="bg-card-background placeholder:text-dim-foreground focus:bg-hover h-full w-full border-none p-2 outline-none placeholder:opacity-80 focus:opacity-100"
          {...props}
        />
      </div>
    </label>
  );
}
