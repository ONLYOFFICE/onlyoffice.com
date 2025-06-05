interface IPartner {
  id: number;
  name: string;
  country: string;
  description?: string;
  link?: string;
  level?: "Gold partner" | "Silver partner" | "Autorized" | "No level";
  url_type?: "site" | "email";
  logo: {
    url: string;
  }[]
}

interface IPartners {
  partners: {
    partners: {
      data: IPartner[];
    };
  }
}

interface IPartnerCardProps {
  item: IPartner;
  isItemOpen: boolean;
  onToggleCard: (id: number) => void;
  t: (key: string) => string;
}

interface IPartnersKeyItemProps {
  name: string;
  index: number;
  isActiveTab: boolean;
  onClick: (key: string, index: number) => void;
}

interface IPartnersCountryOption {
  country: string;
  isSelectCountry: boolean;
  onClick: (country: string) => void;
}

export type {
  IPartners,
  IPartner,
  IPartnerCardProps,
  IPartnersKeyItemProps,
  IPartnersCountryOption,
};