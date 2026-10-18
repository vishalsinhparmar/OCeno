import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: string;
  tone?: "dark" | "light";
  className?: string;
};

/** Section kicker (Core / Eyebrow): red rule + tracked uppercase label. */
export default function Eyebrow({ children, tone = "dark", className }: EyebrowProps) {
  return (
    <div className={cn("flex items-center gap-[12px]", className)}>
      <span aria-hidden="true" className="h-[1.5px] w-[28px] shrink-0 bg-oceno-red" />
      <p
        className={cn(
          "font-manrope-bold text-[12px] leading-[16px] font-bold tracking-[1.92px] uppercase",
          tone === "dark" ? "text-white" : "text-oceno-blue",
        )}
      >
        {children}
      </p>
    </div>
  );
}
