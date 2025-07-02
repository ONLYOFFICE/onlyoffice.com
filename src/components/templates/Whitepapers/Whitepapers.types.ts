interface ICardWhitepapersItemsProps {
  head: string;
  title: string;
  date: string;
  download_url: string,
  description: string;
}

interface ICardWhitepapersItems extends ICardWhitepapersItemsProps {
  id: number;
}

interface ICardDatasheetsItemsProps {
  title: string;
  date: string;
  product: string;
  image_url: string;
  download_url: string;
}

interface ICardDatasheetsItems extends ICardDatasheetsItemsProps {
  id: number;
}

interface ICardFormProp {
  download_url: string;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

export type {
  ICardWhitepapersItems,
  ICardWhitepapersItemsProps,
  ICardDatasheetsItems,
  ICardDatasheetsItemsProps,
  ICardFormProp
};