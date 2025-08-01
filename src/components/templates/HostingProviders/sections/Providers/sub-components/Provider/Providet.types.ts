import { IIcons } from "../../data/icons";

export interface ProviderItemProps {
  name: string;
  logo: string;
  icons: { id: string; link: string }[];
  description: React.ReactNode;
  open: boolean;
  onToggle: () => void;
  providersIcons: IIcons[];
}
