interface ICustomersItem {
  heading: string;
  image: {
    url: string;
    alt?: string;
    width: number;
    height: number;
  };
}

interface ICustomersLang {
  en: ICustomersItem[];
  fr: ICustomersItem[];
}

export const customersItems: ICustomersLang = {
  en: [
    { heading: "Unesko", image: { url: "/images/templates/main/customers/logo/unesko.svg", width: 130, height: 51 } },
    { heading: "Fujitsu", image: { url: "/images/templates/main/customers/logo/fujitsu.svg", width: 92, height: 43 } },
    { heading: "Croix-Rouge", image: { url: "/images/templates/main/customers/logo/croix-rouge.svg", width: 149, height: 51 } },
    { heading: "Oracle", image: { url: "/images/templates/main/customers/logo/oracle.svg", width: 117, height: 15 } },
    { heading: "Suzuki", image: { url: "/images/templates/main/customers/logo/suzuki.svg", width: 70, height: 45 } },
    { heading: "egress", image: { url: "/images/templates/main/customers/logo/egress.svg", width: 108, height: 27 } },
    { heading: "Aarnet", image: { url: "/images/templates/main/customers/logo/aarnet.svg", width: 111, height: 38 } },
  ],
  fr: [
    { heading: "Unesko", image: { url: "/images/templates/main/customers/logo/unesko.svg", width: 129, height: 56 } },
    { heading: "Croix-Rouge", image: { url: "/images/templates/main/customers/logo/croix-rouge.svg", width: 149, height: 56 } },
    { heading: "Infomaniak", image: { url: "/images/templates/main/customers/logo/fr/infomaniak.svg", width: 106, height: 56 } },
    { heading: "Universite-Paris-Sud", image: { url: "/images/templates/main/customers/logo/fr/universite-paris-sud.svg", width: 102, height: 56 } },
    { heading: "Ministere-De-I-Interieur", image: { url: "/images/templates/main/customers/logo/fr/ministere-de-i-interieur.svg", width: 107, height: 90 } },
    { heading: "Suzuki", image: { url: "/images/templates/main/customers/logo/suzuki.svg", width: 69, height: 56 } },
    { heading: "Oracle", image: { url: "/images/templates/main/customers/logo/oracle.svg", width: 116, height: 56 } },
  ],
};

export type TCustomersLocale = keyof typeof customersItems;
