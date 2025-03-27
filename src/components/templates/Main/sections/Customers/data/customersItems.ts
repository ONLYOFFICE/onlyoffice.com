interface ICustomersItem {
  heading: string;
  image: {
    url: string;
    alt?: string;
    width: number;
    height: number;
  };
}

export const customersItems: ICustomersItem[] = [
  {
    heading: "Unesko",
    image: {
      url: "/images/templates/main/customers/logo/unesko.svg",
      width: 130,
      height: 51,
    },
  },
  {
    heading: "Fujitsu",
    image: {
      url: "/images/templates/main/customers/logo/fujitsu.svg",
      width: 92,
      height: 43,
    },
  },
  {
    heading: "Croix-Rouge",
    image: {
      url: "/images/templates/main/customers/logo/croix-rouge.svg",
      width: 149,
      height: 51,
    },
  },
  {
    heading: "Oracle",
    image: {
      url: "/images/templates/main/customers/logo/oracle.svg",
      width: 117,
      height: 15,
    },
  },
  {
    heading: "Suzuki",
    image: {
      url: "/images/templates/main/customers/logo/suzuki.svg",
      width: 70,
      height: 45,
    },
  },
  {
    heading: "egress",
    image: {
      url: "/images/templates/main/customers/logo/egress.svg",
      width: 108,
      height: 27,
    },
  },
  {
    heading: "Aarnet",
    image: {
      url: "/images/templates/main/customers/logo/aarnet.svg",
      width: 111,
      height: 38,
    },
  },
];
