interface IConnector {
  name: string;
  positionX: number;
  iconUrl?: string;
  url: string;
  width: number;
}

export const connectors: IConnector[] = [
    {
      name: "alfresco",
      positionX: -714,
      url: "https://helpcenter.onlyoffice.com/integration/alfresco.aspx",
      width: 120,
    },
    {
      name: "chamilo",
      positionX: 0,
      iconUrl: "/images/templates/installation-success-docs-cloud/connectors/chamilo.svg",
      url: "https://helpcenter.onlyoffice.com/integration/chamilo.aspx",
      width: 149,
    },
    {
      name: "confluence",
      positionX: -1187,
      url: "https://helpcenter.onlyoffice.com/integration/confluence.aspx",
      width: 146,
    },
    {
      name: "humhub",
      positionX: -122,
      url: "https://helpcenter.onlyoffice.com/integration/humhub.aspx",
      width: 117,
    },
    {
      name: "jira",
      positionX: 0,
      iconUrl: "/images/templates/installation-success-docs-cloud/connectors/jira.svg",
      url: "https://helpcenter.onlyoffice.com/integration/jira.aspx",
      width: 164,
    },
    {
      name: "liferay",
      positionX: -912,
      url: "https://helpcenter.onlyoffice.com/integration/liferay.aspx",
      width: 100,
    },
    {
      name: "moodle",
      positionX: 0,
      url: "https://helpcenter.onlyoffice.com/integration/moodle.aspx",
      width: 120,
    },
    {
      name: "nextcloud",
      positionX: -340,
      url: "https://helpcenter.onlyoffice.com/integration/nextcloud.aspx",
      width: 78,
    },
    {
      name: "owncloud",
      positionX: -243,
      url: "https://helpcenter.onlyoffice.com/integration/owncloud.aspx",
      width: 97,
    },
    {
      name: "plone",
      positionX: 0,
      iconUrl: "/images/templates/installation-success-docs-cloud/connectors/plone.svg",
      url: "https://helpcenter.onlyoffice.com/integration/plone.aspx",
      width: 107,
    },
    {
      name: "redmine",
      positionX: 0,
      iconUrl: "/images/templates/installation-success-docs-cloud/connectors/redmine.svg",
      url: "https://helpcenter.onlyoffice.com/integration/redmine.aspx",
      width: 162,
    },
    {
      name: "nuxeo",
      positionX: 0,
      iconUrl: "/images/templates/installation-success-docs-cloud/connectors/nuxeo.svg",
      url: "https://helpcenter.onlyoffice.com/integration/nuxeo.aspx",
      width: 120,
    },
    {
      name: "strapi",
      positionX: 0,
      iconUrl: "/images/templates/installation-success-docs-cloud/connectors/strapi.svg",
      url: "https://helpcenter.onlyoffice.com/integration/strapi.aspx",
      width: 129,
    },
    {
      name: "wordpress",
      positionX: 0,
      iconUrl: "/images/templates/installation-success-docs-cloud/connectors/wordpress.svg",
      url: "https://helpcenter.onlyoffice.com/integration/wordpress.aspx",
      width: 176,
    },
    {
      name: "sharepoint",
      positionX: -1471,
      url: "https://helpcenter.onlyoffice.com/integration/sharepoint.aspx",
      width: 132,
    },
  ];