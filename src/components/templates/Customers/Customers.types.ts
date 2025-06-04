interface ICustomers {
  customers: {
    data: {
      id: number;
      title: string;
      url: string;
      img: {
        id: number;
        url: string;
      }[];
      url_pdf?: {
        id: number;
        url: string;
      }[];
    }[];
  }
}

export type { ICustomers };