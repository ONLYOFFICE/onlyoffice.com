import { IDownloadBlock } from "@src/components/widgets/download/DownloadBlock";
import { docspaceEnterprise } from "@src/config/constans/download";

import { getAssetUrl } from "@utils/getAssetUrl";
export const communityProducts: IDownloadBlock[] = [
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
    readInstructionLink:
      "https://helpcenter.onlyoffice.com/docspace/installation/docspace-community-install-script.aspx",
    buttons: [
      {
        id: "onlyoffice_docspace_for_docker_image",
        label: "InstallNow",
        link: {
          href: "https://download.onlyoffice.com/docspace/docspace-install.sh",
          download: true,
        },
      },
    ],
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
    readInstructionLink:
      "https://helpcenter.onlyoffice.com/docspace/installation/docspace-community-install-script.aspx",
    buttons: [
      {
        id: "onlyoffice_docspace_for_debian_ubuntu_and_derivatives",
        label: "InstallNow",
        link: {
          href: "https://download.onlyoffice.com/docspace/docspace-install.sh",
          download: true,
        },
      },
    ],
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
    readInstructionLink:
      "https://helpcenter.onlyoffice.com/docspace/installation/docspace-community-install-script.aspx",
    buttons: [
      {
        id: "onlyoffice_docspace_for_centos_rhel_and_derivatives",
        label: "InstallNow",
        link: {
          href: "https://download.onlyoffice.com/docspace/docspace-install.sh",
          download: true,
        },
      },
    ],
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
    whatsNewLink:
      "https://helpcenter.onlyoffice.com/docspace/docspace-changelog.aspx",
    releaseDate: docspaceEnterprise.date,
    readInstructionLink:
      "https://helpcenter.onlyoffice.com/docspace/installation/docspace-community-install-windows.aspx",
    buttons: [
      {
        id: "onlyoffice_docspace_for_windows_server_2012_or_higher",
        label: "Download",
        link: {
          href: "https://download.onlyoffice.com/docspace/windows/ONLYOFFICE_DocSpace_Community_Win-install.latest.exe",
          download: true,
        },
      },
    ],
  },
];
