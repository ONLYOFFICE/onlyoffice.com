import { IDownloadBlock } from "@src/components/widgets/download/DownloadBlock";
import { docspaceEnterprise } from "@src/config/constans/download";

import { getAssetUrl } from "@utils/getAssetUrl";
export const enterpriseProducts: IDownloadBlock[] = [
  {
    nameKey: "DocSpace",
    image: {
      url: getAssetUrl("/images/templates/download-docspace/hero/docker.svg"),
      positionX: "center",
      positionY: "center",
      background: "#099cec",
      size: "contain",
      width: "100px",
      mobileWidth: "78px",
    },
    heading: "DockerImage",
    version: docspaceEnterprise.version,
    releaseDate: docspaceEnterprise.date,
    readInstructionLink: "DockerImageenterpriseProductsLink",
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
      href: "/docspace-prices.aspx?from=download-docspace",
    },
  },
  {
    nameKey: "DocSpace",
    image: {
      url: getAssetUrl("/images/templates/download-docspace/hero/derbian-ubuntu.svg"),
      positionX: "center",
      positionY: "center",
      background: "#f5f5f5",
      size: "contain",
      width: "232px",
      mobileWidth: "141px",
    },
    heading: "ForDebianUbuntu",
    version: docspaceEnterprise.version,
    releaseDate: docspaceEnterprise.date,
    readInstructionLink: "ForDebianUbuntuenterpriseProductsLink",
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
      href: "/docspace-prices.aspx?from=download-docspace",
    },
  },
  {
    nameKey: "DocSpace",
    image: {
      url: getAssetUrl("/images/templates/download-docspace/hero/centos.svg"),
      positionX: "center",
      positionY: "center",
      background: "#f5f5f5",
      size: "contain",
      width: "100px",
      mobileWidth: "78px",
    },
    heading: "ForCentOS",
    version: docspaceEnterprise.version,
    releaseDate: docspaceEnterprise.date,
    readInstructionLink: "ForCentOSenterpriseProductsLink",
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
      href: "/docspace-prices.aspx?from=download-docspace",
    },
  },
  {
    nameKey: "DocSpace",
    image: {
      url: getAssetUrl("/images/templates/download-docspace/hero/windows.svg"),
      positionX: "center",
      positionY: "center",
      background: "#00188f",
      size: "contain",
      width: "100px",
      mobileWidth: "78px",
    },
    heading: "ForWindowsServer",
    version: docspaceEnterprise.version,
    releaseDate: docspaceEnterprise.date,
    readInstructionLink: "ForWindowsServerenterpriseProductsLink",
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
      href: "/docspace-prices.aspx?from=download-docspace",
    },
  },
];