import { IIconTooltip } from "@src/components/widgets/IconTooltip";
import { IDownloadCard } from "@src/components/widgets/download/DownloadCard";
import {
  dockerDocument,
  documentServer,
  alibabaCloudImage,
} from "@src/config/constans/download";

const iconsSprite = "/images/templates/download-developer/hero/features.svg";
const productsSprite = "/images/templates/download-developer/hero/products.svg";

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
    id: "docs-presentation-editor",
    tooltipLabel: "PresentationEditor",
    href: "/presentation-editor",
    icon: {
      url: iconsSprite,
      positionX: "-432px",
    },
  },
  {
    id: "docs-spreadsheet-editor",
    tooltipLabel: "SpreadsheetEditor",
    href: "/spreadsheet-editor",
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
        id: "onlyoffice_docs_developer_for_docs_as_a_service",
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
    whatsNewLink:
      "https://helpcenter.onlyoffice.com/installation/docs-changelog.aspx",
    releaseDate: dockerDocument.date,
    readInstructionLink:
      "https://helpcenter.onlyoffice.com/installation/docs-developer-install-docker.aspx",
    buttons: [
      {
        id: "onlyoffice_docs_developer_for_docker_image_intel",
        label: "Intel",
        withModal: {
          href: "https://helpcenter.onlyoffice.com/installation/docs-developer-install-docker.aspx",
          isExternal: true,
        },
      },
      {
        id: "onlyoffice_docs_developer_for_docker_image_arm",
        label: "ARM",
        withModal: {
          href: "https://helpcenter.onlyoffice.com/installation/docs-developer-install-docker-arm64.aspx",
          isExternal: true,
        },
      },
    ],
    buyButton: {
      id: "onlyoffice_docs_developer_for_docker_image_buy",
      href: "/developer-edition-prices",
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
    whatsNewLink:
      "https://helpcenter.onlyoffice.com/installation/docs-changelog.aspx",
    releaseDate: documentServer.date,
    readInstructionLink:
      "https://helpcenter.onlyoffice.com/installation/docs-developer-install-ubuntu.aspx",
    buttons: [
      {
        id: "onlyoffice_docs_developer_for_debian_ubuntu_and_derivatives_intel",
        label: "Intel",
        withModal: {
          href: "https://helpcenter.onlyoffice.com/server/developer-edition/linux/linux-installation.aspx",
          isExternal: true,
        },
      },
      {
        id: "onlyoffice_docs_developer_for_debian_ubuntu_and_derivatives_arm",
        label: "ARM",
        withModal: {
          href: "https://helpcenter.onlyoffice.com/installation/docs-developer-install-ubuntu-arm64.aspx",
          isExternal: true,
        },
      },
    ],
    buyButton: {
      id: "onlyoffice_docs_developer_for_debian_ubuntu_and_derivatives_buy",
      href: "/developer-edition-prices",
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
    whatsNewLink:
      "https://helpcenter.onlyoffice.com/installation/docs-changelog.aspx",
    releaseDate: documentServer.date,
    readInstructionLink:
      "https://helpcenter.onlyoffice.com/installation/docs-developer-install-centos.aspx",
    buttons: [
      {
        id: "onlyoffice_docs_developer_for_centos_rhel_and_derivatives_intel",
        label: "Intel",
        withModal: {
          href: "https://helpcenter.onlyoffice.com/installation/docs-developer-install-centos.aspx",
          isExternal: true,
        },
      },
      {
        id: "onlyoffice_docs_developer_for_centos_rhel_and_derivatives_arm",
        label: "ARM",
        withModal: {
          href: "https://helpcenter.onlyoffice.com/installation/docs-developer-install-centos-arm64.aspx",
          isExternal: true,
        },
      },
    ],
    buyButton: {
      id: "onlyoffice_docs_developer_for_centos_rhel_and_derivatives_buy",
      href: "/developer-edition-prices",
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
    whatsNewLink:
      "https://helpcenter.onlyoffice.com/installation/docs-changelog.aspx",
    releaseDate: documentServer.date,
    readInstructionLink:
      "https://helpcenter.onlyoffice.com/installation/docs-developer-install-windows.aspx",
    buttons: [
      {
        id: "onlyoffice_docs_developer_for_windows",
        label: "Download",
        withModal: {
          href: "https://download.onlyoffice.com/install/documentserver/windows/onlyoffice-documentserver-de.exe",
          download: true,
        },
      },
    ],
    buyButton: {
      id: "onlyoffice_docs_developer_for_windows_buy",
      href: "/developer-edition-prices",
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
    releaseDate: documentServer.date,
    readInstructionLink:
      "https://helpcenter.onlyoffice.com/installation/docs-developer-install-ami.aspx",
    buttons: [
      {
        id: "onlyoffice_docs_developer_for_amazon_machine_image",
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
    whatsNewLink:
      "https://helpcenter.onlyoffice.com/installation/docs-changelog.aspx",
    releaseDate: alibabaCloudImage.date,
    readInstructionLink:
      "https://helpcenter.onlyoffice.com/installation/docs-developer-install-alibaba.aspx",
    buttons: [
      {
        id: "onlyoffice_docs_developer_for_alibaba_cloud_image",
        label: "InstallOnAlibabaCloud",
        link: {
          href: "https://marketplace.alibabacloud.com/store/3246121.html",
          isExternal: true,
        },
      },
    ],
  },
];
