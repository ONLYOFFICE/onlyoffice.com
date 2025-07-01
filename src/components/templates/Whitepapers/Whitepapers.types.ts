interface ICardWhitepapersItemsProps {
  head: string;
  title: string;
  date: string;
  description: string;
}

interface ICardWhitepapersItems extends ICardWhitepapersItemsProps {
  id: number;
}

export type {
  ICardWhitepapersItems,
  ICardWhitepapersItemsProps
};