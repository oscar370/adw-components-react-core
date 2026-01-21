import clsx from "clsx";
import type { HTMLAttributes } from "react";

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "regular" | "flat" | "suggested" | "destructive" | "pill";
  accent?: string;
  disabled?: boolean;
  onClick?: () => void;
};

export function Button({
  children,
  variant = "regular",
  accent,
  disabled,
  onClick,
}: ButtonProps) {
  const containerClasses = clsx(
    "h-fit w-fit shrink-0 overflow-hidden rounded-[9px] shadow-sm",
    variant === "regular" && "bg-(--card-bg)",
    variant === "flat" && "bg-transparent shadow-none!",
    variant === "suggested" && "bg-(--accent) text-white",
    variant === "destructive" && "bg-(--destructive) text-white",
    variant === "pill" && "rounded-full bg-(--card-bg)",
    accent && accent,
  );

  const buttonClasses = clsx(
    "flex min-h-6 cursor-pointer items-center justify-center gap-1 px-4.25 py-1.25 transition-colors hover:bg-(--hover) disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-transparent",
  );

  return (
    <div className={containerClasses}>
      <button className={buttonClasses} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
