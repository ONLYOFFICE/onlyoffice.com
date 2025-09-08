import { IDownloadBlock } from "@src/components/widgets/download/DownloadBlock";
import {
  dockerDocument,
  documentServer,
  alibabaCloudImage,
} from "@src/config/constans/download";

export const docsEnterpriseProducts: IDownloadBlock[] = [
  {
    nameKey: "onlyoffice4enterprise/documentserver-ee",
    image: {
      url: "/images/templates/download-commercial-new/hero/docker.svg",
      positionX: "center",
      positionY: "center",
      background: "#099cec",
      size: "contain",
      width: "100px",
      mobileWidth: "78px",
    },
    heading: "DockerImage",
    version: dockerDocument.version,
    whatsNewLink: "https://helpcenter.onlyoffice.com/docs/docs-changelog.aspx",
    releaseDate: dockerDocument.date,
    readInstructionLink:
      "DockerDocsEnterpriseInstructionLink",
    buttons: [
      {
        id: "onlyoffice_docs_enterprise_for_docker_image_intel",
        label: "Intel",
        link: {
          href: "https://helpcenter.onlyoffice.com/docs/installation/docs-enterprise-install-docker.aspx?_ga=2.17097919.764533964.1595236576-1157782750.1587541027",
          isExternal: true,
        },
      },
      {
        id: "onlyoffice_docs_enterprise_for_docker_image_arm",
        label: "ARM",
        link: {
          href: "https://helpcenter.onlyoffice.com/docs/installation/docs-enterprise-install-docker-arm64.aspx",
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
      url: "/images/templates/download-commercial-new/hero/derbian-ubuntu.svg",
      positionX: "center",
      positionY: "center",
      background: "#f5f5f5",
      size: "contain",
      width: "232px",
      mobileWidth: "141px",
    },
    heading: "ForDebianUbuntu",
    version: documentServer.version,
    whatsNewLink: "https://helpcenter.onlyoffice.com/docs/docs-changelog.aspx",
    releaseDate: documentServer.date,
    readInstructionLink:
      "ForDebianUbuntuDocsEnterpriseInstructionLink",
    buttons: [
      {
        id: "onlyoffice_docs_enterprise_for_debian_ubuntu_and_derivatives_intel",
        label: "Intel",
        link: {
          href: "https://helpcenter.onlyoffice.com/docs/installation/docs-enterprise-install-ubuntu.aspx?_ga=2.50454703.764533964.1595236576-1157782750.1587541027",
          isExternal: true,
        },
      },
      {
        id: "onlyoffice_docs_enterprise_for_debian_ubuntu_and_derivatives_arm",
        label: "ARM",
        link: {
          href: "https://helpcenter.onlyoffice.com/docs/installation/docs-enterprise-install-ubuntu-arm64.aspx",
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
      url: "/images/templates/download-commercial-new/hero/centos.svg",
      positionX: "center",
      positionY: "center",
      background: "#f5f5f5",
      size: "contain",
      width: "100px",
      mobileWidth: "78px",
    },
    heading: "ForCentOSRHEL",
    version: documentServer.version,
    whatsNewLink: "https://helpcenter.onlyoffice.com/docs/docs-changelog.aspx",
    releaseDate: documentServer.date,
    readInstructionLink:
      "ForCentOSRHELDocsEnterpriseInstructionLink",
    buttons: [
      {
        id: "onlyoffice_docs_enterprise_for_centos_rhel_and_derivatives_intel",
        label: "Intel",
        link: {
          href: "https://helpcenter.onlyoffice.com/docs/installation/docs-enterprise-install-centos.aspx?_ga=2.51626159.764533964.1595236576-1157782750.1587541027",
          isExternal: true,
        },
      },
      {
        id: "onlyoffice_docs_enterprise_for_centos_rhel_and_derivatives_arm",
        label: "ARM",
        link: {
          href: "https://helpcenter.onlyoffice.com/docs/installation/docs-enterprise-install-centos-arm64.aspx",
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
      url: "/images/templates/download-commercial-new/hero/windows.svg",
      positionX: "center",
      positionY: "center",
      background: "#00188f",
      size: "contain",
      width: "100px",
      mobileWidth: "78px",
    },
    heading: "ForWindowsServer",
    version: documentServer.version,
    whatsNewLink: "https://helpcenter.onlyoffice.com/docs/docs-changelog.aspx",
    releaseDate: documentServer.date,
    readInstructionLink:
      "ForWindowsServerDocsEnterpriseInstructionLink",
    buttons: [
      {
        id: "onlyoffice_docs_enterprise_for_windows",
        label: "Download",
        link: {
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
      url: "/images/templates/download-commercial-new/hero/amazon.svg",
      positionX: "center",
      positionY: "center",
      background: "#f39d39",
      size: "contain",
      width: "72px",
    },
    heading: "AmazonMachineImage",
    version: documentServer.version,
    whatsNewLink: "https://helpcenter.onlyoffice.com/docs/docs-changelog.aspx",
    releaseDate: documentServer.date,
    readInstructionLink:
      "AmazonMachineImageDocsEnterpriseInstructionLink",
    buttons: [
      {
        id: "onlyoffice_docs_enterprise_for_amazon_machine_image",
        label: "InstallOnAWScloud",
        link: {
          href: "https://aws.amazon.com/marketplace/seller-profile?id=b2557f65-4b3a-4b0e-a96a-d9a9d3b45b60&ref=dtl_B07ZQHPPWN",
          isExternal: true,
        },
      },
    ],
  },
  {
    image: {
      url: "/images/templates/download-commercial-new/hero/alibabacloud.svg",
      positionX: "center",
      positionY: "center",
      background: "#f5f5f5",
      size: "contain",
      width: "100px",
      mobileWidth: "64px",
    },
    heading: "AlibabaCloudImage",
    version: alibabaCloudImage.version,
    whatsNewLink: "https://helpcenter.onlyoffice.com/docs/docs-changelog.aspx",
    releaseDate: alibabaCloudImage.date,
    readInstructionLink:
      "AlibabaCloudImageDocsEnterpriseInstructionLink",
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

export const docsDeveloperProducts: IDownloadBlock[] = [
  {
    nameKey: "onlyoffice4enterprise/documentserver-ee",
    image: {
      url: "/images/templates/download-commercial-new/hero/docker.svg",
      positionX: "center",
      positionY: "center",
      background: "#099cec",
      size: "contain",
      width: "100px",
      mobileWidth: "78px",
    },
    heading: "DockerImage",
    version: dockerDocument.version,
    whatsNewLink: "https://helpcenter.onlyoffice.com/docs/docs-changelog.aspx",
    releaseDate: dockerDocument.date,
    readInstructionLink:
      "DockerDocsDeveloperInstructionLink",
    buttons: [
      {
        id: "onlyoffice_docs_developer_for_docker_image_intel",
        label: "Intel",
        link: {
          href: "https://helpcenter.onlyoffice.com/docs/installation/docs-developer-install-docker.aspx",
          isExternal: true,
        },
      },
      {
        id: "onlyoffice_docs_developer_for_docker_image_arm",
        label: "ARM",
        link: {
          href: "https://helpcenter.onlyoffice.com/docs/installation/docs-developer-install-docker-arm64.aspx",
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
      url: "/images/templates/download-commercial-new/hero/derbian-ubuntu.svg",
      positionX: "center",
      positionY: "center",
      background: "#f5f5f5",
      size: "contain",
      width: "232px",
      mobileWidth: "141px",
    },
    heading: "ForDebianUbuntu",
    version: documentServer.version,
    whatsNewLink: "https://helpcenter.onlyoffice.com/docs/docs-changelog.aspx",
    releaseDate: documentServer.date,
    readInstructionLink:
      "ForDebianUbuntuDocsDeveloperInstructionLink",
    buttons: [
      {
        id: "onlyoffice_docs_developer_for_debian_ubuntu_and_derivatives_intel",
        label: "Intel",
        link: {
          href: "https://helpcenter.onlyoffice.com/docs/installation/docs-developer-install-ubuntu.aspx",
          isExternal: true,
        },
      },
      {
        id: "onlyoffice_docs_developer_for_debian_ubuntu_and_derivatives_arm",
        label: "ARM",
        link: {
          href: "https://helpcenter.onlyoffice.com/docs/installation/docs-developer-install-ubuntu-arm64.aspx",
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
      url: "/images/templates/download-commercial-new/hero/centos.svg",
      positionX: "center",
      positionY: "center",
      background: "#f5f5f5",
      size: "contain",
      width: "100px",
      mobileWidth: "78px",
    },
    heading: "ForCentOSRHEL",
    version: documentServer.version,
    whatsNewLink: "https://helpcenter.onlyoffice.com/docs/docs-changelog.aspx",
    releaseDate: documentServer.date,
    readInstructionLink:
      "ForCentOSRHELDocsDeveloperInstructionLink",
    buttons: [
      {
        id: "onlyoffice_docs_developer_for_centos_rhel_and_derivatives_intel",
        label: "Intel",
        link: {
          href: "https://helpcenter.onlyoffice.com/docs/installation/docs-developer-install-centos.aspx",
          isExternal: true,
        },
      },
      {
        id: "onlyoffice_docs_developer_for_centos_rhel_and_derivatives_arm",
        label: "ARM",
        link: {
          href: "https://helpcenter.onlyoffice.com/docs/installation/docs-developer-install-centos-arm64.aspx",
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
      url: "/images/templates/download-commercial-new/hero/windows.svg",
      positionX: "center",
      positionY: "center",
      background: "#00188f",
      size: "contain",
      width: "100px",
      mobileWidth: "78px",
    },
    heading: "ForWindowsServer",
    version: documentServer.version,
    whatsNewLink: "https://helpcenter.onlyoffice.com/docs/docs-changelog.aspx",
    releaseDate: documentServer.date,
    readInstructionLink:
      "ForWindowsServerDocsDeveloperInstructionLink",
    buttons: [
      {
        id: "onlyoffice_docs_developer_for_windows",
        label: "Download",
        link: {
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
      url: "/images/templates/download-commercial-new/hero/amazon.svg",
      positionX: "center",
      positionY: "center",
      background: "#f39d39",
      size: "contain",
      width: "72px",
    },
    heading: "AmazonMachineImage",
    version: documentServer.version,
    releaseDate: documentServer.date,
    readInstructionLink:
      "AmazonMachineImageDocsDeveloperInstructionLink",
    buttons: [
      {
        id: "onlyoffice_docs_developer_for_amazon_machine_image",
        label: "InstallOnAWScloud",
        link: {
          href: "https://aws.amazon.com/marketplace/seller-profile?id=b2557f65-4b3a-4b0e-a96a-d9a9d3b45b60&ref=dtl_B07ZQHPPWN",
          isExternal: true,
        },
      },
    ],
  },
  {
    image: {
      url: "/images/templates/download-commercial-new/hero/alibabacloud.svg",
      positionX: "center",
      positionY: "center",
      background: "#f5f5f5",
      size: "contain",
      width: "100px",
      mobileWidth: "64px",
    },
    heading: "AlibabaCloudImage",
    version: alibabaCloudImage.version,
    whatsNewLink: "https://helpcenter.onlyoffice.com/docs/docs-changelog.aspx",
    releaseDate: alibabaCloudImage.date,
    readInstructionLink:
      "AlibabaCloudImageDocsDeveloperInstructionLink",
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
