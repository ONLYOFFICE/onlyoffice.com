import { IIconTooltip } from "@src/components/widgets/IconTooltip";
import { IDownloadCard } from "@src/components/widgets/download/DownloadCard";
import { IInfoCard } from "@src/components/widgets/download/InfoCard";
import { docspaceEnterprise, amiDocspace } from "@src/config/constans/download";

const iconsSprite = "/images/templates/download/hero/features.svg";
const productsSprite = "/images/templates/download/hero/products.svg";
const infoProductsSprite = "/images/templates/download/hero/icons.svg";

export const docspaceIcons: IIconTooltip[] = [
  {
    id: "docspace-collaboration-rooms",
    tooltipLabel: "CollaborationRooms",
    href: "/collaboration-rooms",
    icon: {
      url: iconsSprite,
    },
  },
  {
    id: "docspace-custom-rooms",
    tooltipLabel: "CustomRooms",
    href: "/custom-rooms",
    icon: {
      url: iconsSprite,
      positionX: "-72px",
    },
  },
  {
    id: "docspace-form-filling-rooms",
    tooltipLabel: "FormFillingRooms",
    href: "/form-filling-rooms",
    icon: {
      url: iconsSprite,
      positionX: "-144px",
    },
  },
  {
    id: "docspace-meeting-rooms",
    tooltipLabel: "MeetingRooms",
    href: "/office-for-zoom",
    icon: {
      url: iconsSprite,
      positionX: "-216px",
    },
  },
  {
    id: "docspace-public-rooms",
    tooltipLabel: "PublicRooms",
    href: "/public-rooms",
    icon: {
      url: iconsSprite,
      positionX: "-288px",
    },
  },
  {
    id: "docspace-document-editor",
    tooltipLabel: "DocumentEditor",
    href: "/document-editor",
    icon: {
      url: iconsSprite,
      positionX: "-360px",
    },
  },
  {
    id: "docspace-spreadsheet-editor",
    tooltipLabel: "SpreadsheetEditor",
    href: "/spreadsheet-editor",
    icon: {
      url: iconsSprite,
      positionX: "-432px",
    },
  },
  {
    id: "docspace-presentation-editor",
    tooltipLabel: "PresentationEditor",
    href: "/presentation-editor",
    icon: {
      url: iconsSprite,
      positionX: "-504px",
    },
  },
  {
    id: "docspace-pdf-editor",
    tooltipLabel: "PdfEditor",
    href: "/pdf-editor",
    icon: {
      url: iconsSprite,
      positionX: "-576px",
    },
  },
  {
    id: "docspace-form-creator",
    tooltipLabel: "FormCreator",
    href: "/form-creator",
    icon: {
      url: iconsSprite,
      positionX: "-648px",
    },
  },
];

export const docspaceProducts: IDownloadCard[] = [
  {
    nameKey: "DocSpace",
    image: {
      url: productsSprite,
      positionY: "-480px",
    },
    heading: "DockerImage",
    version: docspaceEnterprise.version,
    releaseDate: docspaceEnterprise.date,
    readInstructionLink:
      "https://helpcenter.onlyoffice.com/installation/docspace-enterprise-install-script.aspx",
    buttons: [
      {
        id: "onlyoffice_docspace_enterprise_for_docker_image",
        label: "InstallNow",
        withModal: {
          href: "https://download.onlyoffice.com/docspace/docspace-enterprise-install.sh",
          download: true,
        },
      },
    ],
    buyButton: {
      id: "onlyoffice_docspace_enterprise_for_docker_image_buy",
      href: "/docspace-prices",
    },
  },
  {
    nameKey: "DocSpace",
    image: {
      url: productsSprite,
      positionY: "-576px",
    },
    heading: "ForDebianUbuntu",
    version: docspaceEnterprise.version,
    releaseDate: docspaceEnterprise.date,
    readInstructionLink:
      "https://helpcenter.onlyoffice.com/installation/docspace-enterprise-install-script.aspx",
    buttons: [
      {
        id: "onlyoffice_docspace_enterprise_for_debian_ubuntu_and_derivatives",
        label: "InstallNow",
        withModal: {
          href: "https://download.onlyoffice.com/docspace/docspace-enterprise-install.sh",
          download: true,
        },
      },
    ],
    buyButton: {
      id: "onlyoffice_docspace_enterprise_for_debian_ubuntu_and_derivatives_buy",
      href: "/docspace-prices",
    },
  },
  {
    nameKey: "DocSpace",
    image: {
      url: productsSprite,
      positionY: "-192px",
    },
    heading: "ForCentOS",
    version: docspaceEnterprise.version,
    releaseDate: docspaceEnterprise.date,
    readInstructionLink:
      "https://helpcenter.onlyoffice.com/installation/docspace-enterprise-install-script.aspx",
    buttons: [
      {
        id: "onlyoffice_docspace_enterprise_for_centos_rhel_and_derivatives",
        label: "InstallNow",
        withModal: {
          href: "https://download.onlyoffice.com/docspace/docspace-enterprise-install.sh",
          download: true,
        },
      },
    ],
    buyButton: {
      id: "onlyoffice_docspace_enterprise_for_centos_rhel_and_derivatives_buy",
      href: "/docspace-prices",
    },
  },
  {
    nameKey: "DocSpace",
    image: {
      url: productsSprite,
      positionY: "-96px",
    },
    heading: "ForWindowsServer",
    version: docspaceEnterprise.version,
    releaseDate: docspaceEnterprise.date,
    readInstructionLink:
      "https://helpcenter.onlyoffice.com/installation/docspace-enterprise-install-windows.aspx",
    buttons: [
      {
        id: "onlyoffice_docspace_enterprise_for_windows",
        label: "Download",
        withModal: {
          href: "https://download.onlyoffice.com/docspace/windows/ONLYOFFICE_DocSpace_Enterprise_Win-install.latest.exe",
          download: true,
        },
      },
    ],
    buyButton: {
      id: "onlyoffice_docspace_enterprise_for_windows_buy",
      href: "/docspace-prices",
    },
  },
  {
    image: {
      url: productsSprite,
      positionY: "-384px",
    },
    heading: "AmazonMachineImage",
    version: amiDocspace.version,
    whatsNewLink:
      "https://helpcenter.onlyoffice.com/installation/docspace-changelog.aspx",
    releaseDate: amiDocspace.date,
    buttons: [
      {
        id: "onlyoffice_docspace_enterprise_for_amazon_machine_image",
        label: "InstallOnAWSCloud",
        link: {
          href: "https://aws.amazon.com/marketplace/seller-profile?id=b2557f65-4b3a-4b0e-a96a-d9a9d3b45b60&ref=dtl_B07ZQHPPWN",
          isExternal: true,
        },
      },
    ],
  },
];

export const docspaceInfoProducts: IInfoCard[] = [
  {
    icon: {
      url: infoProductsSprite,
      positionY: "-140px",
    },
    link: {
      href: "/download-developer#docspace-developer",
    },
    text: "LookingForOODocSpaceForSalToCustomers",
  },
  {
    icon: {
      url: infoProductsSprite,
    },
    link: {
      href: "/download-community#docspace-community",
    },
    text: "CommunityVersionOfOODocSpace",
  },
];
