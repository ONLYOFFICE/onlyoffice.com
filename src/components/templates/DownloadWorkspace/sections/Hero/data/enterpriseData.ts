import { IDownloadBlock } from "@src/components/widgets/download/DownloadBlock";
import {
  enterpriseWindows,
  weAws,
  weOvhcloud,
  weAlibabacloud,
} from "@src/config/constans/download";

export const enterpriseProducts: IDownloadBlock[] = [
  {
    image: {
      url: "/images/templates/download-workspace/hero/windows.svg",
      positionX: "center",
      positionY: "center",
      background: "#00188f",
      size: "contain",
      width: "100px",
      mobileWidth: "78px",
    },
    heading: "ForWindowsServer",
    version: enterpriseWindows.version,
    releaseDate: enterpriseWindows.date,
    readInstructionLink:
      "https://helpcenter.onlyoffice.com/workspace/installation/workspace-enterprise-install-windows.aspx",
    buttons: [
      {
        id: "onlyoffice_workspace_enterprise_for_windows",
        label: "Download",
        withModal: {
          href: "https://download.onlyoffice.com/install/windows/enterprise/ONLYOFFICE_WorkspaceEnterprise_Win-install.latest.exe",
          download: true,
        },
      },
    ],
    buyButton: {
      id: "onlyoffice_workspace_enterprise_for_windows_buy",
      href: "/workspace-prices#workspace-on-premises?from=download-workspace",
    },
  },
  {
    image: {
      url: "/images/templates/download-workspace/hero/docker.svg",
      positionX: "center",
      positionY: "center",
      background: "#099cec",
      size: "contain",
      width: "100px",
      mobileWidth: "78px",
    },
    heading: "DockerImage",
    version: enterpriseWindows.version,
    releaseDate: enterpriseWindows.date,
    readInstructionLink:
      "https://helpcenter.onlyoffice.com/workspace/installation/workspace-enterprise-install-docker.aspx",
    buttons: [
      {
        id: "onlyoffice_workspace_enterprise_for_docker_image",
        label: "InstallNow",
        withModal: {
          href: "https://download.onlyoffice.com/install/workspace-enterprise-install.sh",
          download: true,
        },
      },
    ],
    buyButton: {
      id: "onlyoffice_workspace_enterprise_for_docker_image_buy",
      href: "/workspace-prices#workspace-on-premises?from=download-workspace",
    },
  },
  {
    image: {
      url: "/images/templates/download-workspace/hero/derbian-ubuntu.svg",
      positionX: "center",
      positionY: "center",
      background: "#f5f5f5",
      size: "contain",
      width: "232px",
      mobileWidth: "141px",
    },
    heading: "ForDebianUbuntu",
    version: enterpriseWindows.version,
    releaseDate: enterpriseWindows.date,
    readInstructionLink:
      "https://helpcenter.onlyoffice.com/workspace/installation/workspace-enterprise-install-linux.aspx",
    buttons: [
      {
        id: "onlyoffice_workspace_enterprise_for_debian_ubuntu_and_derivatives",
        label: "InstallNow",
        withModal: {
          href: "https://download.onlyoffice.com/install/workspace-enterprise-install.sh",
          download: true,
        },
      },
    ],
    buyButton: {
      id: "onlyoffice_workspace_enterprise_for_debian_ubuntu_and_derivatives_buy",
      href: "/workspace-prices#workspace-on-premises?from=download-workspace",
    },
  },
  {
    image: {
      url: "/images/templates/download-workspace/hero/centos.svg",
      positionX: "center",
      positionY: "center",
      background: "#f5f5f5",
      size: "contain",
      width: "100px",
      mobileWidth: "78px",
    },
    heading: "ForCentOSRHEL",
    version: enterpriseWindows.version,
    releaseDate: enterpriseWindows.date,
    readInstructionLink:
      "https://helpcenter.onlyoffice.com/workspace/installation/workspace-enterprise-install-linux.aspx",
    buttons: [
      {
        id: "onlyoffice_workspace_enterprise_for_centos_rhel_and_derivatives",
        label: "InstallNow",
        withModal: {
          href: "https://download.onlyoffice.com/install/workspace-enterprise-install.sh",
          download: true,
        },
      },
    ],
    buyButton: {
      id: "onlyoffice_workspace_enterprise_for_centos_rhel_and_derivatives_buy",
      href: "/workspace-prices#workspace-on-premises?from=download-workspace",
    },
  },
  {
    image: {
      url: "/images/templates/download-workspace/hero/amazon.svg",
      positionX: "center",
      positionY: "center",
      background: "#f39d39",
      size: "contain",
      width: "72px",
    },
    heading: "AmazonMachineImage",
    version: weAws.version,
    releaseDate: weAws.date,
    readInstructionLink:
      "https://helpcenter.onlyoffice.com/workspace/installation/workspace-enterprise-install-ami.aspx",
    buttons: [
      {
        id: "onlyoffice_workspace_enterprise_for_amazon_machine_image",
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
      url: "/images/templates/download-workspace/hero/ovhcloud.svg",
      positionX: "center",
      positionY: "center",
      background: "#000e9c",
      size: "contain",
      width: "280px",
    },
    heading: "OVHcloudMarketplace",
    version: weOvhcloud.version,
    releaseDate: weOvhcloud.date,
    buttons: [
      {
        id: "onlyoffice_workspace_enterprise_for_ovhcloud_marketplace",
        label: "InstallNow",
        link: {
          href: "https://marketplace.ovhcloud.com/p/onlyoffice-enterprise",
          isExternal: true,
        },
      },
    ],
  },
  {
    image: {
      url: "/images/templates/download-workspace/hero/alibabacloud.svg",
      positionX: "center",
      positionY: "center",
      background: "#f5f5f5",
      size: "contain",
      width: "100px",
      mobileWidth: "64px",
    },
    heading: "AlibabaCloudImage",
    version: weAlibabacloud.version,
    releaseDate: weAlibabacloud.date,
    readInstructionLink:
      "https://helpcenter.onlyoffice.com/workspace/installation/workspace-enterprise-install-alibaba.aspx",
    buttons: [
      {
        id: "onlyoffice_workspace_enterprise_for_alibaba_cloud_image",
        label: "InstallOnAlibabaCloud",
        link: {
          href: "https://marketplace.alibabacloud.com/store/3246121.html",
          isExternal: true,
        },
      },
    ],
  },
];
