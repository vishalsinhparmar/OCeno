const assetPathPrefix = "/assets";

/** Static assets exported from the OCENO Figma file. */
export const assets = {
  logoColor: `${assetPathPrefix}/6e779.png`,
  iconFactory: `${assetPathPrefix}/aa5b0.svg`,
  iconPhone: `${assetPathPrefix}/c3b7b.svg`,
  iconMail: `${assetPathPrefix}/b25e5.svg`,
  iconGlobe: `${assetPathPrefix}/33f48.svg`,
  chevronDefault: `${assetPathPrefix}/f043b.svg`,
  chevronActive: `${assetPathPrefix}/ebe96.svg`,
  iconSearch: `${assetPathPrefix}/37da7.svg`,
  iconWhatsapp: `${assetPathPrefix}/bc99b.svg`,
  iconArrowRight: `${assetPathPrefix}/21ecf.svg`,
  iconArrowRightBlue: `${assetPathPrefix}/58967.svg`,
  iconDownloadWhite: `${assetPathPrefix}/663f2.svg`,
  iconShieldRed: `${assetPathPrefix}/033b6.svg`,
  iconSearchLarge: `${assetPathPrefix}/ca197.svg`,
  brandWave: `${assetPathPrefix}/e3da0.svg`,
  heroGlowLeft: `${assetPathPrefix}/4a308.svg`,
  heroGlowRight: `${assetPathPrefix}/b22f1.svg`,
  heroRing: `${assetPathPrefix}/2ea56.svg`,
  heroOrbit: `${assetPathPrefix}/7689e.png`,
  heroFloorShadow: `${assetPathPrefix}/4bdb3.svg`,
  thumbFloorShadow: `${assetPathPrefix}/e095e.svg`,
  heroSwatches: `${assetPathPrefix}/5988f.svg`,
  productMarina: `${assetPathPrefix}/05e95.png`,
  iconArrowRightDark: `${assetPathPrefix}/9638f.svg`,
  iconArrowUpRight: `${assetPathPrefix}/a849a.svg`,
  categoryFloorShadow: `${assetPathPrefix}/aa8f3.svg`,
  categoryFloorShadowAlt: `${assetPathPrefix}/4442f.svg`,
  categoryTableTop: `${assetPathPrefix}/1399a.png`,
  categoryDesignerArt: `${assetPathPrefix}/545e6.png`,
  categoryPedestal: `${assetPathPrefix}/dd897.png`,
  categoryWaterClosets: `${assetPathPrefix}/16578.png`,
  categorySquatting: `${assetPathPrefix}/be45c.png`,
} as const;

export type AssetKey = keyof typeof assets;
