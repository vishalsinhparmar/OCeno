import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

const base =
  "inline-flex size-[44px] shrink-0 items-center justify-center rounded-full border border-oceno-line bg-white transition-[border-color,background-color,transform] duration-200 ease-out hover:border-oceno-ink/30 hover:bg-slate-50 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oceno-blue";

type Common = { label: string; children: ReactNode; className?: string };

type IconButtonProps =
  | (Common & { href: string } & Omit<ComponentPropsWithoutRef<"a">, "children">)
  | (Common & { href?: undefined } & Omit<ComponentPropsWithoutRef<"button">, "children">);

/** 44px circular icon button (Core / Icon Button). */
export default function IconButton(props: IconButtonProps) {
  const { label, children, className } = props;
  if (props.href !== undefined) {
    const { label: _l, children: _c, className: _cl, ...rest } = props;
    return (
      <a aria-label={label} className={cn(base, className)} {...rest}>
        {children}
      </a>
    );
  }
  const { label: _l, children: _c, className: _cl, ...rest } = props;
  return (
    <button type="button" aria-label={label} className={cn(base, className)} {...rest}>
      {children}
    </button>
  );
}
