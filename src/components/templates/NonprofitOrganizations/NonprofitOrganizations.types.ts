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

export type {
  ILogosBlockItems,
  IFeaturesItems,
  TAlreadyItems
}