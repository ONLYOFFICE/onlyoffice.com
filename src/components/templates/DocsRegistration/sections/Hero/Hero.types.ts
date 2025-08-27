export interface IHero {
  tenants: {
    data: {
      domain: string;
      path: string;
    }[];
  };
  queryParams: string;
}

export type TStatus =
  | "login"
  | "signup"
  | "chooseEmail"
  | "restorePassword";
