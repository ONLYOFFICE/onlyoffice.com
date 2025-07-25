interface IPartners {
  name: string;
  positionX: { desktop: string; mobile: string };
  width: { desktop: string; mobile: string };
}

export const items: IPartners[] = [
  {
    name: "suzuki",
    positionX: {
      desktop: "20px",
      mobile: "2px",
    },
    width: {
      desktop: "130px",
      mobile: "51.7px",
    },
  },
  {
    name: "one_happy_family",
    positionX: {
      desktop: "-130px",
      mobile: "-81px",
    },
    width: {
      desktop: "150px",
      mobile: "71px",
    },
  },
  {
    name: "unesco",
    positionX: {
      desktop: "-310px",
      mobile: "-180px",
    },
    width: {
      desktop: "190px",
      mobile: "94px",
    },
  },
  {
    name: "aarrnet",
    positionX: {
      desktop: "-530px",
      mobile: "-296px",
    },
    width: {
      desktop: "150px",
      mobile: "87px",
    },
  },
  {
    name: "gwdg",
    positionX: {
      desktop: "-720px",
      mobile: "-404px",
    },
    width: {
      desktop: "150px",
      mobile: "65px",
    },
  },
  {
    name: "ministry",
    positionX: {
      desktop: "-900px",
      mobile: "-500px",
    },
    width: {
      desktop: "200px",
      mobile: "96px",
    },
  },
];
