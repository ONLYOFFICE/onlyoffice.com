interface IResources {
  positionX: string;
  text: string;
  linkUrl: string[];
}

export const resources: IResources[] = [
  {
    positionX: "0px",
    text: "HelpfulResourcesText1",
    linkUrl: ["https://helpcenter.onlyoffice.com/docs/userguides"],
  },
  {
    positionX: "-54px",
    text: "HelpfulResourcesText2",
    linkUrl: ["https://helpcenter.onlyoffice.com/"],
  },
  {
    positionX: "-108px",
    text: "HelpfulResourcesText3",
    linkUrl: ["https://helpdesk.onlyoffice.com/"],
  },
  {
    positionX: "-162px",
    text: "HelpfulResourcesText4",
    linkUrl: ["https://community.onlyoffice.com/", "https://github.com/ONLYOFFICE"],
  },
];
