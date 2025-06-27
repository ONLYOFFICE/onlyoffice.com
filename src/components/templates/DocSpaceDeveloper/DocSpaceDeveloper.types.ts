interface ISwitcherItems {
  title: string;
  text: string;
  link?: {
    label: string;
    href: string;
  }
  img: {
    url: string;
    url2x: string;
  }
}

interface IHeadingItemOffsets {
  offsetHeight: number;
  offsetTop: number;
}

interface ICardsItems {
  title: string;
  text: string;
  iconUrl: {
    default: string;
    active: string;
  }
}

interface IWorthCardsItems {
  title: string;
  list: string;
}

export type {
  ISwitcherItems,
  IHeadingItemOffsets,
  ICardsItems,
  IWorthCardsItems
};