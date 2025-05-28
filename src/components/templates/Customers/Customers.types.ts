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
    }[];
  }
}

export type { ICustomers };