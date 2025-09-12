import { IFeatureConnectorCard } from "../sub-components/FeatureConnectorCard";

import { getAssetUrl } from "@utils/getAssetUrl";
export const featuredConnectors: IFeatureConnectorCard[] = [
  {
    url: "/office-for-trello",
    image: {
      url: getAssetUrl("/images/templates/all-connectors/featured-connectors/trello.svg"),
      bgColor: "#253858",
    },
    heading: "Trello",
    text: "FeatureConnectorTrelloText",
    isNew: true,
  },
  {
    url: "/office-for-odoo",
    image: {
      url: getAssetUrl("/images/templates/all-connectors/featured-connectors/odoo.svg"),
      bgColor: "#efefef",
    },
    heading: "Odoo",
    text: "FeatureConnectorOdooText",
  },
  {
    url: "/office-for-moodle",
    image: {
      url: getAssetUrl("/images/templates/all-connectors/featured-connectors/moodle.svg"),
      bgColor: "#f5f5f5",
    },
    heading: "Moodle",
    text: "FeatureConnectorMoodleText",
  },
  {
    url: "/office-for-monday",
    image: {
      url: getAssetUrl("/images/templates/all-connectors/featured-connectors/monday.svg"),
      bgColor: "#f9f9f9",
    },
    heading: "monday",
    text: "FeatureConnectorMondayText",
    isNew: true,
  },
  {
    url: "/office-for-pipedrive",
    image: {
      url: getAssetUrl("/images/templates/all-connectors/featured-connectors/pipedrive.svg"),
      bgColor: "#017737",
    },
    heading: "Pipedrive",
    text: "FeatureConnectorPipedriveText",
    isNew: true,
  },
];
