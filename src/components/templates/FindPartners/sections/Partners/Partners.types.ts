interface IDataItems {
  id: number;
  name: string;
  country: string;
  sponsor?: "gold" | "silver" | "autorized";
  url: string;
  img: {
    url: string;
  };
}

export type { IDataItems };