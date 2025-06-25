interface IFeaturesItem {
  title: string;
  text: string;
  link: {
    label: string;
    href: string;
  };
  image: string;
}

interface IAbout {
  id: number;
  date: string;
  description: string;
}

interface IAbouts {
  abouts: {
    data: IAbout[]
  }
}

export type { IFeaturesItem, IAbouts, IAbout };