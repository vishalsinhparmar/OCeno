export type NavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

export const siteConfig = {
  name: "OCENO",
  tagline: "Manufacturer & exporter of premium sanitaryware",
  location: "Morbi, Gujarat, India",
  phone: { display: "+91 98250 00000", href: "tel:+919825000000" },
  email: { display: "export@oceno.in", href: "mailto:export@oceno.in" },
  whatsappHref: "https://wa.me/919825000000",
  language: "EN",
  quoteHref: "/contact",
} as const;

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products", hasDropdown: true },
  { label: "Projects", href: "/projects" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Catalogue", href: "/catalogue" },
  { label: "Contact", href: "/contact" },
];
