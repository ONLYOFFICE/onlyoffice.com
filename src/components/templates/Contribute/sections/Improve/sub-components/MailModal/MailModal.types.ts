export interface IMailModal {
  isOpen: boolean;
  onClose: () => void;
}

export type Errors = {
  name: boolean;
  email: "empty" | "invalid" | "";
  [key: string]: boolean | string;
};
