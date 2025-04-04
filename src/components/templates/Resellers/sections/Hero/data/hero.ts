interface IHero {
  /** The hero title */
  title: React.ReactNode;
  /** The hero text */
  text: string;
  /** The hero button */
  button: { id: string; label: string; href: string };
  /** The hero image */
  imgUrl: string;
  /** The hero image width */
  imgWidth: number;
  /** The hero image height */
  imgHeight: number;
}

export const hero: IHero = {
  title: "HeroTitle",
  text: "HeroText",
  button: {
    id: "hero-become-partner",
    label: "BecomePartner",
    href: "partnership-request?requestType=0&from=resellers",
  },
  imgUrl: "/images/templates/resellers/hero/hero-image.svg",
  imgWidth: 672,
  imgHeight: 487,
};
