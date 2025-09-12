import { getAssetUrl } from "@utils/getAssetUrl";
interface ILogos {
  title: string;
  logo: string;
  link: string;
  isLightLogo?: boolean;
}

export const logos: ILogos[] = [
  {
    title: "LogoDefault",
    logo: getAssetUrl("/images/templates/press-downloads/logo/logos/logo_color.svg"),
    link: "/images/templates/press-downloads/logo/files/logo_default.zip",
  },
  {
    title: "LogoCenter",
    logo: getAssetUrl("/images/templates/press-downloads/logo/logos/logo_center_color.svg"),
    link: "/images/templates/press-downloads/logo/files/logo_center.zip",
  },
  {
    title: "Symbol",
    logo: getAssetUrl("/images/templates/press-downloads/logo/logos/logo_symbol_color.svg"),
    link: "/images/templates/press-downloads/logo/files/logo_symbol.zip",
  },
  {
    title: "LogoDefaultDark",
    logo: getAssetUrl("/images/templates/press-downloads/logo/logos/logo_grey.svg"),
    link: "/images/templates/press-downloads/logo/files/logo_dark.zip",
  },
  {
    title: "LogoCenterDark",
    logo: getAssetUrl("/images/templates/press-downloads/logo/logos/logo_center_grey.svg"),
    link: "/images/templates/press-downloads/logo/files/logo_center_dark.zip",
  },
  {
    title: "SymbolDark",
    logo: getAssetUrl("/images/templates/press-downloads/logo/logos/logo_symbol_grey.svg"),
    link: "/images/templates/press-downloads/logo/files/logo_symbol_dark.zip",
  },
  {
    title: "LogoWhite",
    logo: getAssetUrl("/images/templates/press-downloads/logo/logos/logo_white.svg"),
    link: "/images/templates/press-downloads/logo/files/logo_white.zip",
    isLightLogo: true,
  },
  {
    title: "LogoCenterWhite",
    logo: getAssetUrl("/images/templates/press-downloads/logo/logos/logo_center_white.svg"),
    link: "/images/templates/press-downloads/logo/files/logo_center_white.zip",
    isLightLogo: true,
  },
  {
    title: "SymbolWhite",
    logo: getAssetUrl("/images/templates/press-downloads/logo/logos/logo_symbol_white.svg"),
    link: "/images/templates/press-downloads/logo/files/logo_symbol_white.zip",
    isLightLogo: true,
  },
];
