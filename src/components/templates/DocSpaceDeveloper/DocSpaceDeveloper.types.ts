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

export type { ISwitcherItems, IHeadingItemOffsets };