export interface IBestAlternativePresentation {
  heading: React.ReactNode;
  link: {
    href: string;
    ariaLabel: string;
  };
  image: {
    src: string;
    alt: string;
  };
}
