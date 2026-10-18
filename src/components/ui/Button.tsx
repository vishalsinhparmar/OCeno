import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "outline" | "outline-light" | "link";

const variants: Record<ButtonVariant, string> = {
  primary:
    "px-[26px] py-[14px] bg-oceno-blue text-white hover:bg-oceno-blue-hover hover:shadow-[0_8px_20px_-8px_rgba(11,77,245,0.6)]",
  outline:
    "px-[26px] py-[14px] border-[1.25px] border-oceno-muted text-oceno-deep hover:border-oceno-deep hover:bg-oceno-surface",
  "outline-light":
    "px-[26px] py-[14px] border-[1.25px] border-white/35 text-white hover:border-white/70 hover:bg-white/[0.06]",
  link: "py-[6px] text-oceno-blue hover:text-oceno-blue-hover",
};

type Common = {
  variant?: ButtonVariant;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
};

type ButtonProps =
  | (Common & { href: string } & Omit<ComponentPropsWithoutRef<"a">, "children">)
  | (Common & { href?: undefined } & Omit<ComponentPropsWithoutRef<"button">, "children">);

/**
 * Pill button (Core / Button). Primary = main CTA, Outline Light = secondary on navy,
 * Link = inline. Renders an anchor when `href` is set, otherwise a button.
 */
export default function Button(props: ButtonProps) {
  const { variant = "primary", icon, className, children } = props;
  const classes = cn(
    "group inline-flex shrink-0 items-center gap-[10px] rounded-full transition-[background-color,border-color,color,transform,box-shadow] duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oceno-blue active:scale-[0.98]",
    variants[variant],
    className,
  );
  const content = (
    <>
      <span className="font-manrope-semibold text-[15px] leading-[20px] font-semibold tracking-[0.03px] whitespace-nowrap">
        {children}
      </span>
      {icon && (
        <span className="relative block size-[18px] shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-[3px]">
          {icon}
        </span>
      )}
    </>
  );

  if (props.href !== undefined) {
    const { variant: _v, icon: _i, className: _c, children: _ch, ...rest } = props;
    return (
      <a className={classes} {...rest}>
        {content}
      </a>
    );
  }
  const { variant: _v, icon: _i, className: _c, children: _ch, type = "button", ...rest } = props;
  return (
    <button type={type} className={classes} {...rest}>
      {content}
    </button>
  );
}
