interface IConnector {
  id: string;
  name: string;
  url: string;
}

export const connectors: IConnector[] = [
  {
    id: "box",
    name: "Box",
    url: "/office-for-box",
  },
  {
    id: "confluence",
    name: "Confluence",
    url: "/office-for-confluence",
  },
  {
    id: "dropbox",
    name: "Dropbox",
    url: "/office-for-dropbox",
  },
  {
    id: "moodle",
    name: "Moodle",
    url: "/office-for-moodle",
  },
  {
    id: "nextcloud",
    name: "Nextcloud",
    url: "/office-for-nextcloud",
  },
  {
    id: "odoo",
    name: "Odoo",
    url: "/office-for-odoo",
  },
  {
    id: "owncloud",
    name: "ownCloud",
    url: "/office-for-owncloud",
  },
];
