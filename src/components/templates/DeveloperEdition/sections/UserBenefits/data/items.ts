interface IBenefits {
  title: string;
  icon: string;
  items: {
    icon: string;
    title: string;
    description: string;
    link?: {
      url: string;
      text: string;
      isExternal?: boolean;
    };
  }[];
  link?: {
    url: string;
    text: string;
  };
}
export const benefits: IBenefits[] = [
  {
    title: "BenefitsUsersTitle",
    icon: "/images/templates/developer-edition/why-oo/why-docs-users.svg",
    items: [
      {
        icon: "/images/templates/developer-edition/why-oo/familiar.svg",
        title: "BenefitUserTitle1",
        description: "BenefitUserDesc1",
      },
      {
        icon: "/images/templates/developer-edition/why-oo/unmatched.svg",
        title: "BenefitUserTitle2",
        description: "BenefitUserDesc2",
      },
      {
        icon: "/images/templates/developer-edition/why-oo/in-browser.svg",
        title: "BenefitUserTitle3",
        description: "BenefitUserDesc3",
      },
      {
        icon: "/images/templates/developer-edition/why-oo/deployment.svg",
        title: "BenefitUserTitle4",
        description: "BenefitUserDesc4",
      },
    ],
    link: {
      url: "/office-suite",
      text: "ReadMore",
    },
  },
  {
    title: "BenefitsDevelopersTitle",
    icon: "/images/templates/developer-edition/why-oo/why-docs-devs.svg",
    items: [
      {
        icon: "/images/templates/developer-edition/why-oo/cross-browser.svg",
        title: "BenefitDevTitle1",
        description: "BenefitDevDesc1",
      },
      {
        icon: "/images/templates/developer-edition/why-oo/label.svg",
        title: "BenefitDevTitle2",
        description: "BenefitDevDesc2",
      },
      {
        icon: "/images/templates/developer-edition/why-oo/external-access.svg",
        title: "BenefitDevTitle3",
        description: "BenefitDevDesc3",
        link: {
          text: "LearnMore",
          url: "/automation-api",
        },
      },
      {
        icon: "/images/templates/developer-edition/why-oo/plugins.svg",
        title: "BenefitDevTitle4",
        description: "BenefitDevDesc4",
        link: {
          text: "ReadDocumentation",
          url: "https://api.onlyoffice.com/docs/plugin-and-macros/get-started/overview/",
          isExternal: true,
        },
      },
      {
        icon: "/images/templates/developer-edition/why-oo/performance.svg",
        title: "BenefitDevTitle5",
        description: "BenefitDevDesc5",
      },
      {
        icon: "/images/templates/developer-edition/why-oo/api.svg",
        title: "BenefitDevTitle6",
        description: "BenefitDevDesc6",
        link: {
          text: "ReadDocumentation",
          url: "https://api.onlyoffice.com/docs/docs-api/using-wopi/overview/",
          isExternal: true,
        },
      },
      {
        icon: "/images/templates/developer-edition/why-oo/scalability.svg",
        title: "BenefitDevTitle7",
        description: "BenefitDevDesc7",
      },
      {
        icon: "/images/templates/developer-edition/why-oo/availability.svg",
        title: "BenefitDevTitle8",
        description: "BenefitDevDesc8",
        link: {
          text: "ContactUsForDetails",
          url: "mailto:sales@onlyoffice.com?subject=ONLYOFFICE%20Docs%20Developer%20request",
        },
      },
    ],
  },
];
