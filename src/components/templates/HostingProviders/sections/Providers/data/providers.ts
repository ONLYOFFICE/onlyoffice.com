import { IIcons } from "./icons";

import { getAssetUrl } from "@utils/getAssetUrl";
interface IProvider {
  logo: string;
  name: string;
  description: {
    label: string;
    links?: { href: string; isExternal?: boolean }[];
  };
  icons: {
    id: IIcons["id"];
    link: string;
  }[];
}

export const providers: IProvider[] = [
  {
    logo: getAssetUrl("/images/templates/hosting-providers/providers/alibaba_cloud.svg"),
    name: "Alibaba Cloud",
    description: { label: "AlibabaDesc" },
    icons: [
      {
        id: "oo-docs-enterprise-edition",
        link: "https://marketplace.alibabacloud.com/store/3246121.html",
      },
      {
        id: "oo-docs-developer-edition",
        link: "https://marketplace.alibabacloud.com/store/3246121.html",
      },
      {
        id: "oo-workspace-enterprise",
        link: "https://marketplace.alibabacloud.com/store/3246121.html",
      },
    ],
  },
  {
    logo: getAssetUrl("/images/templates/hosting-providers/providers/aws.svg"),
    name: "Amazon Web Services",
    description: {
      label: "AwsDesc",
      links: [
        { href: "https://aws.amazon.com/marketplace/", isExternal: true },
      ],
    },
    icons: [
      {
        id: "oo-docs-enterprise-edition",
        link: "https://aws.amazon.com/marketplace/seller-profile?id=b2557f65-4b3a-4b0e-a96a-d9a9d3b45b60&ref=dtl_B07ZQHPPWN",
      },
      {
        id: "oo-docs-enterprise-edition-for-arm",
        link: "https://aws.amazon.com/marketplace/seller-profile?id=b2557f65-4b3a-4b0e-a96a-d9a9d3b45b60&ref=dtl_B07ZQHPPWN",
      },
      {
        id: "oo-docs-developer-edition",
        link: "https://aws.amazon.com/marketplace/seller-profile?id=b2557f65-4b3a-4b0e-a96a-d9a9d3b45b60&ref=dtl_B07ZQHPPWN",
      },
      {
        id: "oo-docs-developer-edition-for-arm",
        link: "https://aws.amazon.com/marketplace/seller-profile?id=b2557f65-4b3a-4b0e-a96a-d9a9d3b45b60&ref=dtl_B07ZQHPPWN",
      },
      {
        id: "oo-workspace-enterprise",
        link: "https://aws.amazon.com/marketplace/seller-profile?id=b2557f65-4b3a-4b0e-a96a-d9a9d3b45b60&ref=dtl_B07ZQHPPWN",
      },
    ],
  },
  {
    logo: getAssetUrl("/images/templates/hosting-providers/providers/artera.svg"),
    name: "Artera",
    description: { label: "ArteraDesc" },
    icons: [
      {
        id: "oo-docs-community-edition",
        link: "https://www.artera.net/en/",
      },
      {
        id: "oo-docs-enterprise-edition",
        link: "https://www.artera.net/en/",
      },
    ],
  },
  {
    logo: getAssetUrl("/images/templates/hosting-providers/providers/digital_ocean.svg"),
    name: "DigitalOcean",
    description: { label: "DigitalOceanDesc" },
    icons: [
      {
        id: "oo-docs-community-edition",
        link: "https://marketplace.digitalocean.com/apps/onlyoffice-docs",
      },
      {
        id: "oo-workspace-community-edition",
        link: "https://marketplace.digitalocean.com/apps/onlyoffice-workspace",
      },
    ],
  },
  {
    logo: getAssetUrl("/images/templates/hosting-providers/providers/hostingsolutions.png"),
    name: "Hosting Solutions®",
    description: { label: "HostingSolutionsDesc" },
    icons: [
      {
        id: "oo-docs-community-edition",
        link: "https://www.hostingsolutions.it/",
      },
      {
        id: "oo-docs-enterprise-edition",
        link: "https://www.hostingsolutions.it/",
      },
      {
        id: "oo-docs-developer-edition",
        link: "https://www.hostingsolutions.it/",
      },
      {
        id: "oo-docs-community-edition-for-arm",
        link: "https://www.hostingsolutions.it/",
      },
      {
        id: "oo-docs-enterprise-edition-for-arm",
        link: "https://www.hostingsolutions.it/",
      },
      {
        id: "oo-docs-developer-edition-for-arm",
        link: "https://www.hostingsolutions.it/",
      },
    ],
  },
  {
    logo: getAssetUrl("/images/templates/hosting-providers/providers/linode.svg"),
    name: "Linode",
    description: { label: "LinodeDesc" },
    icons: [
      {
        id: "oo-docs-community-edition",
        link: "https://www.linode.com/docs/marketplace-docs/guides/onlyoffice/",
      },
    ],
  },
  {
    logo: getAssetUrl("/images/templates/hosting-providers/providers/netexplorer.png"),
    name: "NetExplorer",
    description: { label: "NetExplorerDesc" },
    icons: [
      {
        id: "oo-docs-enterprise-edition",
        link: "https://www.netexplorer.fr/",
      },
      {
        id: "oo-docs-developer-edition",
        link: "https://www.netexplorer.fr/",
      },
    ],
  },
  {
    logo: getAssetUrl("/images/templates/hosting-providers/providers/ovh_cloud.svg"),
    name: "OVHCloud",
    description: { label: "OVHCloudDesc" },
    icons: [
      {
        id: "oo-workspace-enterprise",
        link: "https://marketplace.ovhcloud.com/p/onlyoffice-enterprise",
      },
    ],
  },
  {
    logo: getAssetUrl("/images/templates/hosting-providers/providers/vultr.svg"),
    name: "Vultr",
    description: { label: "VultrDesc" },
    icons: [
      {
        id: "oo-docs-community-edition",
        link: "https://www.vultr.com/marketplace/apps/onlyoffice-docs",
      },
      {
        id: "oo-workspace-community-edition",
        link: "https://www.vultr.com/marketplace/apps/onlyoffice-workspace",
      },
    ],
  },
  {
    logo: getAssetUrl("/images/templates/hosting-providers/providers/yourownnet.png"),
    name: "YourOwnNet",
    description: { label: "YourOwnNetDesc" },
    icons: [
      {
        id: "oo-docs-community-edition",
        link: "https://yourownnet.net/hebergement-onlyoffice-docs-entreprise/",
      },
      {
        id: "oo-docs-enterprise-edition",
        link: "https://yourownnet.net/hebergement-onlyoffice-docs-entreprise/",
      },
    ],
  },
  {
    logo: getAssetUrl("/images/templates/hosting-providers/providers/wolkli.svg"),
    name: "wölkli",
    description: { label: "WolkliDesc" },
    icons: [
      {
        id: "oo-docs-community-edition",
        link: "https://woelkli.com/en/onlyoffice",
      },
      {
        id: "oo-docs-enterprise-edition",
        link: "https://woelkli.com/en/onlyoffice",
      },
      {
        id: "oo-docs-developer-edition",
        link: "https://woelkli.com/en/onlyoffice",
      },
      {
        id: "oo-docs-community-edition-for-arm",
        link: "https://woelkli.com/en/onlyoffice",
      },
      {
        id: "oo-docs-enterprise-edition-for-arm",
        link: "https://woelkli.com/en/onlyoffice",
      },
      {
        id: "oo-docs-developer-edition-for-arm",
        link: "https://woelkli.com/en/onlyoffice",
      },
      {
        id: "oo-workspace-community-edition",
        link: "https://woelkli.com/en/onlyoffice",
      },
      {
        id: "oo-workspace-enterprise",
        link: "https://woelkli.com/en/onlyoffice",
      },
    ],
  },
  {
    logo: getAssetUrl("/images/templates/hosting-providers/providers/wp_provider.svg"),
    name: "WP Provider",
    description: { label: "WpProviderDesc" },
    icons: [
      {
        id: "oo-docs-enterprise-edition",
        link: "https://wpprovider.com/partner/onlyoffice/",
      },
      {
        id: "oo-docs-cloud",
        link: "https://wpprovider.com/partner/onlyoffice/",
      },
      {
        id: "oo-docspace-cloud",
        link: "https://wpprovider.com/partner/onlyoffice/",
      },
      {
        id: "oo-docspace-enterprise",
        link: "https://wpprovider.com/partner/onlyoffice/",
      },
    ],
  },
];
