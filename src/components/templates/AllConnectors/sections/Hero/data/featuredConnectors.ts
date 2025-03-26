import { IFeatureConnectorCard } from "../sub-components/FeatureConnectorCard";

export const featuredConnectors: IFeatureConnectorCard[] = [
  {
    url: "/office-for-trello",
    image: {
      url: "/images/templates/all-connectors/featured-connectors/trello.svg",
      bgColor: "#253858",
    },
    heading: "Trello",
    text: "FeatureConnectorTrelloText",
    isNew: true,
  },
  {
    url: "/office-for-odoo",
    image: {
      url: "/images/templates/all-connectors/featured-connectors/odoo.svg",
      bgColor: "#efefef",
    },
    heading: "Odoo",
    text: "FeatureConnectorOdooText",
  },
  {
    url: "/office-for-moodle",
    image: {
      url: "/images/templates/all-connectors/featured-connectors/moodle.svg",
      bgColor: "#f5f5f5",
    },
    heading: "Moodle",
    text: "FeatureConnectorMoodleText",
  },
  {
    url: "/office-for-owncloud",
    image: {
      url: "/images/templates/all-connectors/featured-connectors/owncloud.svg",
      bgColor: "#1d2d44",
    },
    heading: "ownCloud",
    text: "FeatureConnectorOwnCloudText",
  },
  {
    url: "/office-for-pipedrive",
    image: {
      url: "/images/templates/all-connectors/featured-connectors/pipedrive.svg",
      bgColor: "#017737",
    },
    heading: "Pipedrive",
    text: "FeatureConnectorPipedriveText",
    isNew: true,
  },
];
