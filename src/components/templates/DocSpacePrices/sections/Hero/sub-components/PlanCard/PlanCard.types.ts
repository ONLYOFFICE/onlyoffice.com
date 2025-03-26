export interface IPlanCard {
  heading: string;
  subHeading: string;
  headingLabel?: string;
  isActive?: boolean;
  price: {
    from?: boolean;
    free?: boolean;
    currency?: string;
    prev?: string;
    current?: string;
    label?: string;
  };
  btn: {
    label: string;
    url?: string;
    onClick?: () => void;
  };
  link?: {
    label: string;
    url: string;
  };
}
