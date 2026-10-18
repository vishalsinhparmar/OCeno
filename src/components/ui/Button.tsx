import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary";
  icon?: ReactNode;
};

/** Pill button (Core / Button). Primary = main CTA such as Get a Quote. */
export default function Button({ variant = "primary", icon, className, children, ...rest }: ButtonProps) {
  return (
    <a
      className={cn(
        "group inline-flex shrink-0 items-center gap-[10px] rounded-full px-[26px] py-[14px] transition-[background-color,transform,box-shadow] duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oceno-blue active:scale-[0.98]",
        variant === "primary" &&
          "bg-oceno-blue text-white hover:bg-oceno-blue-hover hover:shadow-[0_8px_20px_-8px_rgba(11,77,245,0.6)]",
        className,
      )}
      {...rest}
    >
      <span className="font-manrope-semibold text-[15px] leading-[20px] font-semibold tracking-[0.03px] whitespace-nowrap">
        {children}
      </span>
      {icon && (
        <span className="relative block size-[18px] shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-[3px]">
          {icon}
        </span>
      )}
    </a>
  );
}
