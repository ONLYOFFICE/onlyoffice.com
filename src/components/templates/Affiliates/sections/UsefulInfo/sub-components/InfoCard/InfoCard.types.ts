export interface IInfoCard {
  id: string;
  heading: string;
  text: {
    label: React.ReactNode;
    link?: string;
  };
  link?: {
    href: string;
    label: string;
    isExternal?: boolean;
    isDownload?: boolean;
  };
}
