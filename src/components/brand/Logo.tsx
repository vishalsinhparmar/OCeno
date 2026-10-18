import { assets } from "@/lib/assets";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
};

/** OCENO wordmark (color tone, for light surfaces). */
export default function Logo({ className }: LogoProps) {
  return (
    <a href="/" aria-label="OCENO home" className={cn("relative block shrink-0", className)}>
      <img
        src={assets.logoColor}
        alt="Oceno – the european treasures"
        width={160}
        height={48}
        className="pointer-events-none size-full object-contain"
      />
    </a>
  );
}
