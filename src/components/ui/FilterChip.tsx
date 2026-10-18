import { cn } from "@/lib/cn";

type FilterChipProps = {
  label: string;
  count?: string | number;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
};

/** Filter / category chip (Core / Filter Chip). Click toggles the selected state. */
export default function FilterChip({ label, count, selected = false, onClick, className }: FilterChipProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={cn(
        "inline-flex shrink-0 items-center gap-[8px] rounded-full border px-[18px] py-[10px] whitespace-nowrap transition-colors duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oceno-blue",
        selected
          ? "border-oceno-blue bg-oceno-blue/[0.06]"
          : "border-oceno-line bg-white hover:border-oceno-ink/30 hover:bg-oceno-surface",
        className,
      )}
    >
      <span
        className={cn(
          "font-manrope-semibold text-[13px] leading-[18px] font-semibold tracking-[0.026px]",
          selected ? "text-oceno-blue" : "text-oceno-ink",
        )}
      >
        {label}
      </span>
      {count !== undefined && (
        <span
          className={cn(
            "font-manrope-medium text-[12px] leading-[16px] font-medium tracking-[0.36px]",
            selected ? "text-oceno-blue/70" : "text-oceno-subtle",
          )}
        >
          {count}
        </span>
      )}
    </button>
  );
}
