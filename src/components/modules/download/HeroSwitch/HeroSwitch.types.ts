export interface IHeroSwitchItem {
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
    text: string;
  };
  children: React.ReactNode;
}

export interface IHeroSwitch {
  heading: {
    text: React.ReactNode;
    maxWidth?: string;
  };
  items: [IHeroSwitchItem, IHeroSwitchItem];
}
