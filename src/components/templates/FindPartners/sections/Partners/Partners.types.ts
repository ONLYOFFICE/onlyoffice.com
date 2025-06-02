interface IDataItems {
  id: number;
  name: string;
  country: string;
  sponsor?: "gold" | "silver" | "autorized";
  url: string;
  description?: string;
  img: {
    url: string;
  };
}

export type { IDataItems };