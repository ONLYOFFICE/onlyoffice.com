export interface ICounterSelectorWrapper {
  heading: string;
  subHeading?: string;
  tooltip?: {
    id: string;
    content: string;
  };
  children?: React.ReactNode;
}
