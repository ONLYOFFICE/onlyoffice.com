export interface IImproveItem {
  icon: {
    url: string;
    positionX?: string;
    mobilePositionX?: string;
  };
  text: React.ReactNode;
  link: {
    label: string;
    href: string;
  };
}
