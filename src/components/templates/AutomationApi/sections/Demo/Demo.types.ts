import { IDemoContentProps } from "./sub-components/DemoContent/DemoContent.types";

interface IButtonInfo extends IDemoContentProps {
  id: number;
  text: string;
  iconPositionX: number;
  permissions?: {
    edit?: boolean;
    fillForms?: boolean;
    comment?: boolean;
    download?: boolean;
    print?: boolean;
    review?: boolean;
  };
}

export type { IButtonInfo };