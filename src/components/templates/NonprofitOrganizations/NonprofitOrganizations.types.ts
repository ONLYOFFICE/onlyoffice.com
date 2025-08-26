interface ILogosBlockItems {
  id: number;
  width: string;
  bgPositionX: string;
}

interface IFeaturesItems {
  id: number;
  heading: string;
  description: string;
}

type TAlreadyItems =
  "Nextcloud" |
  "ownCloud" |
  "Alfresco" |
  "Confluence" |
  "SharePoint" |
  "Liferay" |
  "HumHub" |
  "Plone" |
  "SyncAndShareSolution";

interface IGetAccessItems {
  id: number;
  href: string;
  label: string;
  iconUrl: string;
}

interface IStoryItems {
  id: string;
  heading: string;
  links: {
    href: string;
    label: string;
  };
  imgUrl: string;
}

export type {
  ILogosBlockItems,
  IFeaturesItems,
  TAlreadyItems,
  IGetAccessItems,
  IStoryItems
}