import { IDownloadBlock } from "@src/components/widgets/download/DownloadBlock";
import { docspaceEnterprise } from "@src/config/constans/download";

export const docspaceProducts: IDownloadBlock[] = [
  {
    nameKey: "DocSpace",
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
    version: docspaceEnterprise.version,
    releaseDate: docspaceEnterprise.date,
    readInstructionLink:
      "DockerDocspaceInstructionLink",
    buttons: [
      {
        id: "onlyoffice_docspace_enterprise_for_docker_image",
        label: "InstallNow",
        link: {
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
      url: "/images/templates/download-commercial-new/hero/derbian-ubuntu.svg",
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
      "ForDebianUbuntuDocspaceInstructionLink",
    buttons: [
      {
        id: "onlyoffice_docspace_enterprise_for_debian_ubuntu_and_derivatives",
        label: "InstallNow",
        link: {
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
      url: "/images/templates/download-commercial-new/hero/centos.svg",
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
      "ForCentOSRHELDocspaceInstructionLink",
    buttons: [
      {
        id: "onlyoffice_docspace_enterprise_for_centos_rhel_and_derivatives",
        label: "InstallNow",
        link: {
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
      url: "/images/templates/download-commercial-new/hero/windows.svg",
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
    readInstructionLink:
      "ForWindowsServerDocspaceInstructionLink",
    buttons: [
      {
        id: "onlyoffice_docspace_enterprise_for_windows",
        label: "Download",
        link: {
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
];
