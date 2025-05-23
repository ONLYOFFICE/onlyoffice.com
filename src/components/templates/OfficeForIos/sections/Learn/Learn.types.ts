interface ILearnItem {
  image: string;
  title: string;
  text: string;
  links?: { href: string; label: string; isExternal?: boolean }[];
}

export type { ILearnItem };
