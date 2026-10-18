export const heroContent = {
  eyebrow: "Vitreous china · Made in Morbi",
  description:
    "Designer basins, pedestal sets and water closets in premium vitreous china — engineered in Morbi, Gujarat and shipped to homes, hotels and projects across 40+ countries.",
  primaryCta: { label: "Explore Collections", href: "/products" },
  secondaryCta: { label: "Download Catalogue", href: "/catalogue" },
  stats: [
    { value: "40+", label: "Export countries" },
    { value: "250+", label: "Designs in range" },
    { value: "ISO 9001", label: "Certified plant" },
  ],
  /**
   * Products rotated through the hero slider. `filter` tints the shared Marina render to preview
   * glaze variants; swap `image` for dedicated product renders as they become available.
   */
  slides: [
    {
      id: "marina-ocean",
      name: "Marina Art Basin",
      detail: "Hand-glazed · Ocean Blue",
      code: "OC-AB-214",
      image: "productMarina",
      filter: "none",
      swatch: "#3f86c8",
      glow: "rgba(11, 77, 245, 0.55)",
    },
    {
      id: "marina-onyx",
      name: "Onyx Vessel Basin",
      detail: "Matte glaze · Charcoal",
      code: "OC-AB-221",
      image: "productMarina",
      filter: "grayscale(1) brightness(0.62) contrast(1.25)",
      swatch: "#2b3036",
      glow: "rgba(148, 163, 184, 0.35)",
    },
    {
      id: "marina-ivory",
      name: "Ivory Bloom Basin",
      detail: "Gloss glaze · Pure Ivory",
      code: "OC-AB-232",
      image: "productMarina",
      filter: "grayscale(1) sepia(0.18) brightness(1.28) contrast(0.92)",
      swatch: "#f4f5f7",
      glow: "rgba(255, 244, 222, 0.32)",
    },
    {
      id: "marina-jade",
      name: "Jade Ripple Basin",
      detail: "Hand-glazed · Jade Green",
      code: "OC-AB-245",
      image: "productMarina",
      filter: "hue-rotate(-58deg) saturate(1.15)",
      swatch: "#2fa58a",
      glow: "rgba(16, 185, 129, 0.4)",
    },
  ],
  qcBadge: { title: "Export grade", detail: "14-point QC" },
} as const;

export const productSearch = {
  title: "Find the right product for your space",
  browseAll: { label: "Browse all 250+ designs", href: "/products" },
  placeholder: "Search basins, closets, collections or product codes…",
  action: "/products",
  popular: [
    { label: "Table-Top Basins", count: 48 },
    { label: "Designer Art Basins", count: 36 },
    { label: "Pedestal Sets", count: 22 },
    { label: "Water Closets", count: 18 },
    { label: "Squatting Pans", count: 12 },
  ],
} as const;
