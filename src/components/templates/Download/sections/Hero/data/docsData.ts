import { IIconTooltip } from "@src/components/widgets/IconTooltip";
import { IDownloadCard } from "@src/components/widgets/download/DownloadCard";
import { IInfoCard } from "@src/components/widgets/download/InfoCard";
import { getAssetUrl } from "@utils/getAssetUrl";
import {
  dockerDocument,
  documentServer,
  alibabaCloudImage,
} from "@src/config/constans/download";

const iconsSprite = getAssetUrl("/images/templates/download/hero/features.svg");
const productsSprite = getAssetUrl("/images/templates/download/hero/products.svg");
const infoProductsSprite = getAssetUrl("/images/templates/download/hero/icons.svg");

export const docsIcons: IIconTooltip[] = [
  {
    id: "docs-document-editor",
    tooltipLabel: "DocumentEditor",
    href: "/document-editor",
    icon: {
      url: iconsSprite,
      positionX: "-360px",
    },
  },
  {
    id: "docs-spreadsheet-editor",
    tooltipLabel: "SpreadsheetEditor",
    href: "/spreadsheet-editor",
    icon: {
      url: iconsSprite,
      positionX: "-432px",
    },
  },
  {
    id: "docs-presentation-editor",
    tooltipLabel: "PresentationEditor",
    href: "/presentation-editor",
    icon: {
      url: iconsSprite,
      positionX: "-504px",
    },
  },
  {
    id: "docs-pdf-editor",
    tooltipLabel: "PdfEditor",
    href: "/pdf-editor",
    icon: {
      url: iconsSprite,
      positionX: "-576px",
    },
  },
  {
    id: "docs-form-creator",
    tooltipLabel: "FormCreator",
    href: "/form-creator",
    icon: {
      url: iconsSprite,
      positionX: "-648px",
    },
  },
];

export const docsProducts: IDownloadCard[] = [
  {
    nameKey: "onlyoffice4enterprise/documentserver-ee",
    image: {
      url: productsSprite,
    },
    heading: "DocsAsAService",
    version: dockerDocument.version,
    releaseDate: dockerDocument.date,
    buttons: [
      {
        id: "onlyoffice_docs_enterprise_for_docs_as_a_service",
        label: "SignUpNow",
        link: {
          href: "/docs-registration",
        },
      },
    ],
  },
  {
    nameKey: "onlyoffice4enterprise/documentserver-ee",
    image: {
      url: productsSprite,
      positionY: "-480px",
    },
    heading: "DockerImage",
    version: dockerDocument.version,
    whatsNewLink: "https://helpcenter.onlyoffice.com/docs/docs-changelog.aspx",
    releaseDate: dockerDocument.date,
    readInstructionLink: "DocsProductsDockerImageLink",
    buttons: [
      {
        id: "onlyoffice_docs_enterprise_for_docker_image_intel",
        label: "Intel",
        withModal: {
          href: "https://helpcenter.onlyoffice.com/server/integration-edition/docker/docker-installation.aspx?_ga=2.17097919.764533964.1595236576-1157782750.1587541027",
          isExternal: true,
        },
      },
      {
        id: "onlyoffice_docs_enterprise_for_docker_image_arm",
        label: "ARM",
        withModal: {
          href: "https://helpcenter.onlyoffice.com/installation/docs-enterprise-install-docker-arm64.aspx",
          isExternal: true,
        },
      },
    ],
    buyButton: {
      id: "onlyoffice_docs_enterprise_for_docker_image_buy",
      href: "/docs-enterprise-prices",
    },
  },
  {
    nameKey: "DocumentServer",
    image: {
      url: productsSprite,
      positionY: "-576px",
    },
    heading: "ForDebianUbuntu",
    version: documentServer.version,
    whatsNewLink: "https://helpcenter.onlyoffice.com/docs/docs-changelog.aspx",
    releaseDate: documentServer.date,
    readInstructionLink: "DocsProductsForDebianUbuntuLink",
    buttons: [
      {
        id: "onlyoffice_docs_enterprise_for_debian_ubuntu_and_derivatives_intel",
        label: "Intel",
        withModal: {
          href: "https://helpcenter.onlyoffice.com/server/integration-edition/linux/linux-installation.aspx?_ga=2.50454703.764533964.1595236576-1157782750.1587541027",
          isExternal: true,
        },
      },
      {
        id: "onlyoffice_docs_enterprise_for_debian_ubuntu_and_derivatives_arm",
        label: "ARM",
        withModal: {
          href: "https://helpcenter.onlyoffice.com/installation/docs-enterprise-install-ubuntu-arm64.aspx",
          isExternal: true,
        },
      },
    ],
    buyButton: {
      id: "onlyoffice_docs_enterprise_for_debian_ubuntu_and_derivatives_buy",
      href: "/docs-enterprise-prices",
    },
  },
  {
    nameKey: "DocumentServer",
    image: {
      url: productsSprite,
      positionY: "-192px",
    },
    heading: "ForCentOS",
    version: documentServer.version,
    whatsNewLink: "https://helpcenter.onlyoffice.com/docs/docs-changelog.aspx",
    releaseDate: documentServer.date,
    readInstructionLink: "DocsProductsForCentOSLink",
    buttons: [
      {
        id: "onlyoffice_docs_enterprise_for_centos_rhel_and_derivatives_intel",
        label: "Intel",
        withModal: {
          href: "https://helpcenter.onlyoffice.com/server/integration-edition/linux/linux-installation-centos.aspx?_ga=2.51626159.764533964.1595236576-1157782750.1587541027",
          isExternal: true,
        },
      },
      {
        id: "onlyoffice_docs_enterprise_for_centos_rhel_and_derivatives_arm",
        label: "ARM",
        withModal: {
          href: "https://helpcenter.onlyoffice.com/installation/docs-enterprise-install-centos-arm64.aspx",
          isExternal: true,
        },
      },
    ],
    buyButton: {
      id: "onlyoffice_docs_enterprise_for_centos_rhel_and_derivatives_buy",
      href: "/docs-enterprise-prices",
    },
  },
  {
    nameKey: "DocumentServer",
    image: {
      url: productsSprite,
      positionY: "-96px",
    },
    heading: "ForWindowsServer",
    version: documentServer.version,
    whatsNewLink: "https://helpcenter.onlyoffice.com/docs/docs-changelog.aspx",
    releaseDate: documentServer.date,
    readInstructionLink: "DocsProductsForWindowsServerLink",
    buttons: [
      {
        id: "onlyoffice_docs_enterprise_for_windows",
        label: "Download",
        withModal: {
          href: "https://download.onlyoffice.com/install/documentserver/windows/onlyoffice-documentserver-ee.exe",
          download: true,
        },
      },
    ],
    buyButton: {
      id: "onlyoffice_docs_enterprise_for_windows_buy",
      href: "/docs-enterprise-prices",
    },
  },
  {
    nameKey: "DocumentServer",
    image: {
      url: productsSprite,
      positionY: "-384px",
    },
    heading: "AmazonMachineImage",
    version: documentServer.version,
    whatsNewLink: "https://helpcenter.onlyoffice.com/docs/docs-changelog.aspx",
    releaseDate: documentServer.date,
    readInstructionLink: "DocsProductsAmazonMachineImageLink",
    buttons: [
      {
        id: "onlyoffice_docs_enterprise_for_amazon_machine_image",
        label: "InstallOnAWSCloud",
        link: {
          href: "https://aws.amazon.com/marketplace/seller-profile?id=b2557f65-4b3a-4b0e-a96a-d9a9d3b45b60&ref=dtl_B07ZQHPPWN",
          isExternal: true,
        },
      },
    ],
  },
  {
    image: {
      url: productsSprite,
      positionY: "-288px",
    },
    heading: "AlibabaCloudImage",
    version: alibabaCloudImage.version,
    whatsNewLink: "https://helpcenter.onlyoffice.com/docs/docs-changelog.aspx",
    releaseDate: alibabaCloudImage.date,
    readInstructionLink: "DocsProductsAlibabaCloudImageLink",
    buttons: [
      {
        id: "onlyoffice_docs_enterprise_for_alibaba_cloud_image",
        label: "InstallOnAlibabaCloud",
        link: {
          href: "https://marketplace.alibabacloud.com/store/3246121.html",
          isExternal: true,
        },
      },
    ],
  },
];

export const docsInfoProducts: IInfoCard[] = [
  {
    icon: {
      url: infoProductsSprite,
      positionY: "-140px",
    },
    link: {
      href: "/download-developer#docspace-developer",
    },
    text: "LookingForOODocsForSalToCustomers",
  },
  {
    icon: {
      url: infoProductsSprite,
    },
    link: {
      href: "/download-community#docspace-community",
    },
    text: "CommunityVersionOfOODocs",
  },
];
