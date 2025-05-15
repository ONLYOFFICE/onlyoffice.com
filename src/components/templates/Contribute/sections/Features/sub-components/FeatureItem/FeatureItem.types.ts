export interface IFeatureItem {
  icon: {
    url: string;
    positionX?: string;
    mobilePositionX?: string;
  };
  heading: React.ReactNode;
  text: React.ReactNode;
  link: {
    label: string;
    href: string;
  };
}
