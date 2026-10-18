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
  featuredProduct: { name: "Marina Art Basin", detail: "Hand-glazed · Ocean Blue" },
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
