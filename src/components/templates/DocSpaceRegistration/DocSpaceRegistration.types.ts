export interface IDocSpaceRegistrationTemplate {
  tenants: {
    data: {
      domain: string;
      path: string;
    }[];
  };
  queryParams: string;
  desktop?: boolean;
}
