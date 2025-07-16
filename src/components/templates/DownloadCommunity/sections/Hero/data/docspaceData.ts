import { IDownloadBlock } from "@src/components/widgets/download/DownloadBlock";
import {
  docspaceEnterprise,
  digitaloceanDocspace,
  vultrDocspace,
} from "@src/config/constans/download";

export const docspaceProducts: IDownloadBlock[] = [
  {
    nameKey: "Docspace",
    image: {
      url: "/images/templates/download-community/hero/docker.svg",
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
    nameKey: "Docspace",
    image: {
      url: "/images/templates/download-community/hero/derbian-ubuntu.svg",
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
    nameKey: "Docspace",
    image: {
      url: "/images/templates/download-community/hero/centos.svg",
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
    nameKey: "Docspace",
    image: {
      url: "/images/templates/download-community/hero/windows.svg",
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
  {
    image: {
      url: "/images/templates/download-community/hero/digital-ocean.svg",
      positionX: "center",
      positionY: "center",
      background: "#0080ff",
      size: "contain",
      width: "81px",
      mobileWidth: "56px",
    },
    heading: "1ClickAppOnDigitalOcean",
    version: digitaloceanDocspace.version,
    whatsNewLink:
      "https://helpcenter.onlyoffice.com/docspace/docspace-changelog.aspx",
    releaseDate: digitaloceanDocspace.date,
    license: "AGPLv3",
    buttons: [
      {
        id: "onlyoffice_docspace_community_for_1-click_app_on_digitalocean",
        label: "InstallOnDigitalOcean",
        link: {
          href: "https://marketplace.digitalocean.com/apps/onlyoffice-docspace",
          download: true,
        },
      },
    ],
  },
  {
    image: {
      url: "/images/templates/download-community/hero/vultr.svg",
      positionX: "center",
      positionY: "center",
      background: "linear-gradient(90deg,#09276B 0%,#2448A2 100%)",
      size: "contain",
      width: "152px",
    },
    heading: "1ClickAppOnVultr",
    version: vultrDocspace.version,
    whatsNewLink:
      "https://helpcenter.onlyoffice.com/docspace/docspace-changelog.aspx",
    releaseDate: vultrDocspace.date,
    license: "AGPLv3",
    buttons: [
      {
        id: "onlyoffice_docspace_community_for_1-click_app_on_vultr",
        label: "InstallOnVultr",
        link: {
          href: "https://www.vultr.com/marketplace/apps/onlyoffice-docspace",
          download: true,
        },
      },
    ],
  },
];
