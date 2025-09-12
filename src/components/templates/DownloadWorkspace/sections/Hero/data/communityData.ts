import { IDownloadBlock } from "@src/components/widgets/download/DownloadBlock";
import { getAssetUrl } from "@utils/getAssetUrl";
import {
  communityWindows,
  wcDigitalocean,
  wcVultr,
} from "@src/config/constans/download";

export const communityProducts: IDownloadBlock[] = [
  {
    image: {
      url: getAssetUrl("/images/templates/download-workspace/hero/windows.svg"),
      positionX: "center",
      positionY: "center",
      background: "#00188f",
      size: "contain",
      width: "100px",
      mobileWidth: "78px",
    },
    heading: "ForWindowsServer2012OrHigher",
    version: communityWindows.version,
    whatsNewLink:
      "https://helpcenter.onlyoffice.com/workspace/workspace-changelog.aspx",
    releaseDate: communityWindows.date,
    readInstructionLink:
      "https://helpcenter.onlyoffice.com/workspace/installation/workspace-install-windows.aspx",
    buttons: [
      {
        id: "onlyoffice_workspace_for_windows_server_2012_or_higher",
        label: "Download",
        link: {
          href: "https://download.onlyoffice.com/install/windows/workspace/ONLYOFFICE_Workspace_Win-install.latest.exe",
          download: true,
        },
      },
    ],
  },
  {
    image: {
      url: getAssetUrl("/images/templates/download-workspace/hero/derbian-ubuntu.svg"),
      positionX: "center",
      positionY: "center",
      background: "#f5f5f5",
      size: "contain",
      width: "232px",
      mobileWidth: "141px",
    },
    heading: "ForDebianUbuntu",
    version: communityWindows.version,
    whatsNewLink:
      "https://helpcenter.onlyoffice.com/workspace/workspace-changelog.aspx",
    releaseDate: communityWindows.date,
    readInstructionLink:
      "https://helpcenter.onlyoffice.com/workspace/installation/workspace-install-linux.aspx",
    buttons: [
      {
        id: "onlyoffice_workspace_for_debian_ubuntu_and_derivatives",
        label: "InstallNow",
        link: {
          href: "https://download.onlyoffice.com/install/workspace-install.sh",
          download: true,
        },
      },
    ],
  },
  {
    image: {
      url: getAssetUrl("/images/templates/download-workspace/hero/centos.svg"),
      positionX: "center",
      positionY: "center",
      background: "#f5f5f5",
      size: "contain",
      width: "100px",
      mobileWidth: "78px",
    },
    heading: "ForCentOSRHEL",
    version: communityWindows.version,
    whatsNewLink:
      "https://helpcenter.onlyoffice.com/workspace/workspace-changelog.aspx",
    releaseDate: communityWindows.date,
    readInstructionLink:
      "https://helpcenter.onlyoffice.com/workspace/installation/workspace-install-linux.aspx",
    buttons: [
      {
        id: "onlyoffice_workspace_for_centos_rhel_and_derivatives",
        label: "InstallNow",
        link: {
          href: "https://download.onlyoffice.com/install/workspace-enterprise-install.sh",
          download: true,
        },
      },
    ],
  },
  {
    image: {
      url: getAssetUrl("/images/templates/download-workspace/hero/docker.svg"),
      positionX: "center",
      positionY: "center",
      background: "#099cec",
      size: "contain",
      width: "100px",
      mobileWidth: "78px",
    },
    heading: "DockerImageForLinux",
    version: communityWindows.version,
    whatsNewLink:
      "https://helpcenter.onlyoffice.com/workspace/workspace-changelog.aspx",
    releaseDate: communityWindows.date,
    readInstructionLink:
      "https://helpcenter.onlyoffice.com/workspace/installation/workspace-install-docker.aspx",
    buttons: [
      {
        id: "onlyoffice_workspace_for_docker_image_for_linux",
        label: "InstallNow",
        link: {
          href: "https://download.onlyoffice.com/install/workspace-install.sh",
          download: true,
        },
      },
    ],
  },
  {
    image: {
      url: getAssetUrl("/images/templates/download-workspace/hero/docker.svg"),
      positionX: "center",
      positionY: "center",
      background: "#099cec",
      size: "contain",
      width: "100px",
      mobileWidth: "78px",
    },
    heading: "DockerCompose",
    version: communityWindows.version,
    whatsNewLink:
      "https://helpcenter.onlyoffice.com/workspace/workspace-changelog.aspx",
    releaseDate: communityWindows.date,
    readInstructionLink:
      "https://helpcenter.onlyoffice.com/workspace/installation/workspace-install-docker-compose.aspx",
    buttons: [
      {
        id: "onlyoffice_workspace_for_docker_compose",
        label: "InstallNow",
        link: {
          href: "https://github.com/ONLYOFFICE/Docker-CommunityServer",
          isExternal: true,
        },
      },
    ],
  },
  {
    image: {
      url: getAssetUrl("/images/templates/download-workspace/hero/digital-ocean.svg"),
      positionX: "center",
      positionY: "center",
      background: "#0080ff",
      size: "contain",
      width: "81px",
      mobileWidth: "56px",
    },
    heading: "1ClickAppOnDigitalOcean",
    version: wcDigitalocean.version,
    whatsNewLink:
      "https://helpcenter.onlyoffice.com/workspace/workspace-changelog.aspx",
    releaseDate: wcDigitalocean.date,
    readInstructionLink:
      "https://helpcenter.onlyoffice.com/workspace/installation/workspace-install-digitalocean.aspx",
    buttons: [
      {
        id: "onlyoffice_workspace_for_1-click_app_on_digitalocean",
        label: "InstallOnDigitalOcean",
        link: {
          href: "https://marketplace.digitalocean.com/apps/onlyoffice-workspace",
          isExternal: true,
        },
      },
    ],
  },
  {
    image: {
      url: getAssetUrl("/images/templates/download-workspace/hero/vultr.svg"),
      positionX: "center",
      positionY: "center",
      background: "linear-gradient(90deg,#09276B 0%,#2448A2 100%)",
      size: "contain",
      width: "152px",
    },
    heading: "1ClickAppOnVultr",
    version: wcVultr.version,
    whatsNewLink:
      "https://helpcenter.onlyoffice.com/workspace/workspace-changelog.aspx",
    releaseDate: wcVultr.date,
    readInstructionLink:
      "https://helpcenter.onlyoffice.com/workspace/installation/workspace-install-vultr.aspx",
    buttons: [
      {
        id: "onlyoffice_workspace_for_1-click_app_on_vultr",
        label: "InstallOnVultr",
        link: {
          href: "https://www.vultr.com/marketplace/apps/onlyoffice-workspace",
          isExternal: true,
        },
      },
    ],
  },
];
