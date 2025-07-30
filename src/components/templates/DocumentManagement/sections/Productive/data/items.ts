interface IProductive {
  image: {
    positionX: string;
    mobilePositionX: string;
  };
  title: string;
  text: string;
  link?: string;
}

export const productiveItems: IProductive[] = [
  {
    image: {
      positionX: "0",
      mobilePositionX: "0",
    },
    title: "Integration",
    text: "IntegrationText",
    link: "/app-directory",
  },
  {
    image: {
      positionX: "-456px",
      mobilePositionX: "-326px",
    },
    title: "IntegrationWithModules",
    text: "IntegrationWithModulesText",
  },
];
