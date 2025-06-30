export interface IHeroTabsItem {
  button: {
    id: string;
    icon: {
      url: string;
      positionX?: string;
      positionY?: string;
      size?: string;
      width?: string;
      height?: string;
    };
    label: string;
  };
  children: React.ReactNode;
}

export interface IHeroTabs {
  heading: {
    text: React.ReactNode;
    maxWidth?: string;
  };
  items: IHeroTabsItem[];
}
