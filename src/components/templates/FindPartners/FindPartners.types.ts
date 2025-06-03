interface IPartners {
  id: number;
  name: string;
  country: string;
  description?: string;
  link?: string;
  level?: "Gold partner" | "Silver partner" | "Autorized";
  url_type?: "site" | "email";
}

export type { IPartners };