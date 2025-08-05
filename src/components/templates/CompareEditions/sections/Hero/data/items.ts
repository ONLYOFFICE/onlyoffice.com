export interface IEditions {
  title: string;
  description: string;
  link: string;
  positionX: string;
  isExternal?: boolean;
}

export const items: IEditions[] = [
  {
    title: "Community",
    description: "CommunityDescription",
    link: "https://github.com/ONLYOFFICE/DocumentServer",
    isExternal: true,
    positionX: "0px"
  },
  {
    title: "Enterprise",
    description: "EnterpriseDescription",
    link: "/docs-enterprise?from=compare-editions",
    positionX: "-104px"
  },
  {
    title: "Developer",
    description: "DeveloperDescription",
    link: "/developer-edition?from=compare-editions",
    positionX: "-208px"
  }
];