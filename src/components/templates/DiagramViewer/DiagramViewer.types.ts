interface IFeaturesItems {
  id: number;
  title: string;
  description: string;
  image: {
    url: string;
    url2x: string;
  };
};

interface IFaqItems {
  id: number;
  title: string;
  description: string;
  link?: string;
}

export type { IFeaturesItems, IFaqItems };