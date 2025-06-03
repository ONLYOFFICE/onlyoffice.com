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

export type { IPartners, IPartner };