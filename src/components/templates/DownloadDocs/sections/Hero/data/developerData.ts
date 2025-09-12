import { IDownloadBlock } from "@src/components/widgets/download/DownloadBlock";
import { getAssetUrl } from "@utils/getAssetUrl";
import {
  dockerDocument,
  documentServer,
  alibabaCloudImage,
} from "@src/config/constans/download";

export const developerProducts: IDownloadBlock[] = [
  {
    nameKey: "onlyoffice4enterprise/documentserver-ee",
    image: {
      url: getAssetUrl("/images/templates/download-docs/hero/docker.svg"),
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
      "https://helpcenter.onlyoffice.com/docs/installation/docs-developer-install-docker.aspx",
    buttons: [
      {
        id: "onlyoffice_docs_developer_for_docker_image_intel",
        label: "Intel",
        withModal: {
          href: "https://helpcenter.onlyoffice.com/docs/installation/docs-developer-install-docker.aspx",
          isExternal: true,
        },
      },
      {
        id: "onlyoffice_docs_developer_for_docker_image_arm",
        label: "ARM",
        withModal: {
          href: "https://helpcenter.onlyoffice.com/docs/installation/docs-developer-install-docker-arm64.aspx",
          isExternal: true,
        },
      },
    ],
    buyButton: {
      id: "onlyoffice_docs_developer_for_docker_image_buy",
      href: "/developer-edition-prices?from=download-docs",
    },
  },
  {
    nameKey: "DocumentServer",
    image: {
      url: getAssetUrl("/images/templates/download-docs/hero/derbian-ubuntu.svg"),
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
      "https://helpcenter.onlyoffice.com/docs/installation/docs-developer-install-ubuntu.aspx",
    buttons: [
      {
        id: "onlyoffice_docs_developer_for_debian_ubuntu_and_derivatives_intel",
        label: "Intel",
        withModal: {
          href: "https://helpcenter.onlyoffice.com/docs/installation/docs-developer-install-ubuntu.aspx",
          isExternal: true,
        },
      },
      {
        id: "onlyoffice_docs_developer_for_debian_ubuntu_and_derivatives_arm",
        label: "ARM",
        withModal: {
          href: "https://helpcenter.onlyoffice.com/docs/installation/docs-developer-install-ubuntu-arm64.aspx",
          isExternal: true,
        },
      },
    ],
    buyButton: {
      id: "onlyoffice_docs_developer_for_debian_ubuntu_and_derivatives_buy",
      href: "/developer-edition-prices?from=download-docs",
    },
  },
  {
    nameKey: "DocumentServer",
    image: {
      url: getAssetUrl("/images/templates/download-docs/hero/centos.svg"),
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
      "https://helpcenter.onlyoffice.com/docs/installation/docs-developer-install-centos.aspx",
    buttons: [
      {
        id: "onlyoffice_docs_developer_for_centos_rhel_and_derivatives_intel",
        label: "Intel",
        withModal: {
          href: "https://helpcenter.onlyoffice.com/docs/installation/docs-developer-install-centos.aspx",
          isExternal: true,
        },
      },
      {
        id: "onlyoffice_docs_developer_for_centos_rhel_and_derivatives_arm",
        label: "ARM",
        withModal: {
          href: "https://helpcenter.onlyoffice.com/docs/installation/docs-developer-install-centos-arm64.aspx",
          isExternal: true,
        },
      },
    ],
    buyButton: {
      id: "onlyoffice_docs_developer_for_centos_rhel_and_derivatives_buy",
      href: "/developer-edition-prices?from=download-docs",
    },
  },
  {
    nameKey: "DocumentServer",
    image: {
      url: getAssetUrl("/images/templates/download-docs/hero/windows.svg"),
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
      "https://helpcenter.onlyoffice.com/docs/installation/docs-developer-install-windows.aspx",
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
      href: "/developer-edition-prices?from=download-docs",
    },
  },
  {
    nameKey: "DocumentServer",
    image: {
      url: getAssetUrl("/images/templates/download-docs/hero/amazon.svg"),
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
      "https://helpcenter.onlyoffice.com/docs/installation/docs-developer-install-ami.aspx",
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
      url: getAssetUrl("/images/templates/download-docs/hero/alibabacloud.svg"),
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
      "https://helpcenter.onlyoffice.com/docs/installation/docs-developer-install-alibaba.aspx",
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
