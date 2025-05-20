interface IFeaturesItem {
  image: {
    tablet: {
      url: string;
      url2x: string;
    };
    mobile: {
      url: string;
      url2x: string;
    };
  }
  iconUrl: string;
  heading: string;
  text: string;
  zIndex?: string;
}

export type { IFeaturesItem };
