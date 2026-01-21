import clsx from "clsx";
import type { HTMLAttributes } from "react";

type ButtonRowProps = HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "regular" | "suggested" | "destructive";
  accent?: string;
  disabled?: boolean;
  onClick?: () => void;
};

export function ButtonRow({
  children,
  variant = "regular",
  accent,
  disabled,
  onClick,
}: ButtonRowProps) {
  const containerClasses = clsx(
    variant === "regular" && "",
    variant === "suggested" && "bg-(--accent) text-white",
    variant === "destructive" && "bg-(--destructive) text-white",
    accent && accent,
  );

  const buttonClasses = clsx(
    "flex min-h-12 w-full cursor-pointer items-center justify-center gap-1 px-4.25 transition-colors hover:bg-(--hover) disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-transparent",
  );

  return (
    <li className={containerClasses}>
      <button className={buttonClasses} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    </li>
  );
}
