import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?:
    | "regular"
    | "flat"
    | "suggested"
    | "destructive"
    | "pill"
    | "pillSuggested";
};

export function Button({
  children,
  variant = "regular",
  className,
  disabled,
  ...props
}: ButtonProps) {
  const buttonClasses = twMerge(
    clsx(
      "relative flex min-h-8 cursor-pointer items-center justify-center gap-1 overflow-hidden rounded-lg px-4.25 py-1.25 disabled:cursor-not-allowed disabled:opacity-60",
      variant === "regular" && "bg-(--card-bg)",
      variant === "flat" && "bg-transparent shadow-none",
      variant === "suggested" && "bg-(--accent) text-white",
      variant === "destructive" && "bg-(--destructive) text-white",
      variant === "pill" && "rounded-full bg-(--card-bg)",
      variant === "pillSuggested" && "rounded-full bg-(--accent) text-white",
      className,
    ),
  );

  const overlayClasses = twMerge(
    clsx(
      "absolute inset-0 transition-colors hover:bg-(--hover)",
      disabled && "hover:bg-transparent",
    ),
  );

  return (
    <button className={buttonClasses} disabled={disabled} {...props}>
      <div aria-hidden className={overlayClasses}></div>
      {children}
    </button>
  );
}
