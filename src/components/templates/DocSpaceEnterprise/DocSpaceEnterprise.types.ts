interface ICostItems {
  text: string;
}

interface IEnvironmentItems {
  heading: string;
  text: string;
  image: {
    url: string;
  };
  links?: [
    {
      href: string;
      label: string;
    },
  ];
}

interface IFeaturesItems {
  icon: {
    url: string;
  };
  text: string;
}

interface IGettingItems {
  href: string;
  title: string;
  text: string;
  subtitle: string;
  bgUrl: string;
}

interface IScalable {
  label: string;
}

interface ISupportItems {
  heading: string;
  desc: string;
  btn: { text: string; href: string };
  imageUrl: string;
}

export type {
  ICostItems,
  IEnvironmentItems,
  IFeaturesItems,
  IGettingItems,
  IScalable,
  ISupportItems,
};
