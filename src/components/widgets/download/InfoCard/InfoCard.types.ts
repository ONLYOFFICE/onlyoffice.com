export interface IInfoCard {
  icon: {
    url: string;
    positionX?: string;
    positionY?: string;
  };
  link: {
    href: string;
    isExternal?: boolean;
  };
  text: React.ReactNode;
}
