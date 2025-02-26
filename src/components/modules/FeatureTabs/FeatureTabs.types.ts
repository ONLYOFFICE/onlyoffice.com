import { ISection } from "@src/components/ui/Section";

export interface IFeatureTabs {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The heading of the image tabs. */
  heading?: React.ReactNode;
  /** The font size level, ranging from 1 to 7. Default: 2. */
  headingSize?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  /** The unique identifier of the bottom link. */
  linkId?: string;
  /** The name of the bottom link. */
  linkName?: string;
  /** The href of the bottom link. */
  linkUrl?: string;
  /** An array of image tabs. Each tab can have images for multiple languages. Additional languages can be added with their respective locale keys (e.g., "fr", "de"). */
  items: {
    label: React.ReactNode;
    images: { url: string; url2x?: string };
  }[];
  /** The position of the tabs. Default: "left". */
  position?: "left" | "right";
  /** Section background color. */
  bgColor?: ISection["bgColor"];
  /** Top and bottom spacing value for desktop screens. Default: ["112px", "112px"]. */
  desktopSpacing?: ISection["desktopSpacing"];
  /** Top and bottom spacing value for tablet screens. Default: ["88px", "88px"]. */
  tabletSpacing?: ISection["tabletSpacing"];
  /** Top and bottom spacing value for tablet small screens. */
  tabletSmallSpacing?: ISection["tabletSmallSpacing"];
  /** Top and bottom spacing value for mobile screens. Default: ["48px", "48px"]. */
  mobileSpacing?: ISection["mobileSpacing"];
}
