interface IConnector {
  id: string;
  title: string;
  url: string;
}

export const connectors: IConnector[] = [
  {
    id: "box",
    title: "Box",
    url: "/office-for-box",
  },
  {
    id: "confluence",
    title: "Confluence",
    url: "/office-for-confluence",
  },
  {
    id: "dropbox",
    title: "Dropbox",
    url: "/office-for-dropbox",
  },
  {
    id: "moodle",
    title: "Moodle",
    url: "/office-for-moodle",
  },
  {
    id: "nextcloud",
    title: "Nextcloud",
    url: "/office-for-nextcloud",
  },
  {
    id: "odoo",
    title: "Odoo",
    url: "/office-for-odoo",
  },
  {
    id: "owncloud",
    title: "ownCloud",
    url: "/office-for-owncloud",
  },
];
