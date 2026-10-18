import { motion } from "motion/react";
import { heroContent } from "@/config/home";
import { assets } from "@/lib/assets";

const easeOut = [0.22, 1, 0.36, 1] as const;

/** Product stage: ring, orbit glow, floating basin and info cards (Hero Showcase). */
export default function HeroShowcase() {
  const { featuredProduct, qcBadge } = heroContent;

  return (
    // Children are positioned as percentages of the 560 × 600 Figma frame so the stage scales fluidly.
    <div className="relative mx-auto aspect-[560/600] w-full max-w-[560px] lg:mx-0 lg:w-[46%] lg:shrink-0">
      <img
        src={assets.heroRing}
        alt=""
        aria-hidden="true"
        width={520}
        height={520}
        className="absolute top-[5%] left-[3.571%] h-[86.667%] w-[92.857%] max-w-none"
      />
      <motion.img
        src={assets.heroOrbit}
        alt=""
        aria-hidden="true"
        width={540}
        height={540}
        className="absolute top-[3.333%] left-[1.786%] h-[90%] w-[96.429%] max-w-none"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: easeOut }}
      />
      <div aria-hidden="true" className="absolute top-[78.333%] left-[23.214%] h-[5.667%] w-[53.571%]">
        <img
          src={assets.heroFloorShadow}
          alt=""
          width={348}
          height={82}
          className="absolute inset-[-70.59%_-8%] block h-[241.18%] w-[116%] max-w-none"
        />
      </div>
      <motion.div
        className="absolute top-[6.667%] left-[8.036%] h-[78.333%] w-[83.929%]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: easeOut }}
      >
        <motion.img
          src={assets.productMarina}
          alt={`${featuredProduct.name} in ${featuredProduct.detail.split("·").pop()?.trim()}`}
          width={470}
          height={470}
          className="pointer-events-none size-full max-w-none object-contain"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        />
      </motion.div>

      {/* Float / Product */}
      <motion.div
        className="absolute bottom-0 left-0 flex items-center gap-[14px] overflow-clip rounded-[18px] border border-white/22 bg-white/10 py-[14px] pr-[20px] pl-[14px] backdrop-blur-[12px] sm:bottom-auto sm:top-[78.333%] sm:left-[-5.357%]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: easeOut }}
      >
        <div
          className="relative size-[56px] shrink-0 overflow-clip rounded-[12px]"
          style={{ background: "radial-gradient(circle 31.11px at 28px 24.89px, #fff 0%, #f2f5fa 60%, #e3e9f2 100%)" }}
        >
          <div aria-hidden="true" className="absolute top-[86%] right-1/4 bottom-[-0.29%] left-1/4">
            <img
              src={assets.thumbFloorShadow}
              alt=""
              width={44}
              height={24}
              className="absolute inset-[-100%_-28.57%] block h-[300%] w-[157.14%] max-w-none"
            />
          </div>
          <img
            src={assets.productMarina}
            alt=""
            width={50}
            height={50}
            className="pointer-events-none absolute top-[3%] left-[5%] h-[90%] w-[90%] max-w-none object-contain"
          />
        </div>
        <div className="flex flex-col gap-[2px] whitespace-nowrap">
          <p className="font-manrope-semibold text-[15px] leading-[20px] font-semibold tracking-[0.03px] text-white">
            {featuredProduct.name}
          </p>
          <p className="font-manrope-regular text-[14px] leading-[22px] font-normal text-oceno-muted">
            {featuredProduct.detail}
          </p>
        </div>
        <img
          src={assets.heroSwatches}
          alt="Available in 3 glazes"
          width={54}
          height={14}
          className="block h-[14px] w-[54px] shrink-0"
        />
      </motion.div>

      {/* Float / QC */}
      <motion.div
        className="absolute top-[11.667%] right-0 flex items-center gap-[10px] overflow-clip rounded-full bg-white py-[12px] pr-[18px] pl-[12px] shadow-oceno-float sm:right-auto sm:left-[67.857%]"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9, ease: easeOut }}
      >
        <div className="flex size-[36px] shrink-0 items-center justify-center rounded-full bg-oceno-red-soft">
          <img src={assets.iconShieldRed} alt="" width={18} height={18} className="block size-[18px]" />
        </div>
        <div className="flex flex-col whitespace-nowrap">
          <p className="font-manrope-semibold text-[13px] leading-[18px] font-semibold tracking-[0.026px] text-oceno-deep">
            {qcBadge.title}
          </p>
          <p className="font-manrope-regular text-[14px] leading-[22px] font-normal text-oceno-slate">{qcBadge.detail}</p>
        </div>
      </motion.div>
    </div>
  );
}
