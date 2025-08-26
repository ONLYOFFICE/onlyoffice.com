export interface IDocsRegistrationTemplate {
  tenants: {
    data: {
      domain: string;
      path: string;
    }[];
  };
  queryParams: string;
  desktop?: boolean;
}
