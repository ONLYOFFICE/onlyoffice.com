interface IPartner {
  id: number;
  name: string;
  country: string;
  description?: string;
  link?: string;
  level?: "Gold partner" | "Silver partner" | "Autorized";
  url_type?: "site" | "email";
}

interface IPartners {
  partners: {
    partners: {
      data: IPartner[];
    };
  }
}

export type { IPartners, IPartner };