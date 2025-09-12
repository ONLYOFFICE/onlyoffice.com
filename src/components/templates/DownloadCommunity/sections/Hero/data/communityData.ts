import { IDownloadBlock } from "@src/components/widgets/download/DownloadBlock";
import { getAssetUrl } from "@utils/getAssetUrl";
import {
  documentServer,
  snapPackage,
  univentionAppliance,
  cloudron,
  vultr,
  linode,
  onlyofficeOvhcloud,
  providedbyunivention,
  onlyofficeNextcloud,
} from "@src/config/constans/download";

export const communityProducts: IDownloadBlock[] = [
  {
    nameKey: "DocumentServer",
    image: {
      url: getAssetUrl("/images/templates/download-community/hero/docker.svg"),
      positionX: "center",
      positionY: "center",
      background: "#099cec",
      size: "contain",
      width: "100px",
      mobileWidth: "78px",
    },
    heading: "DockerImage",
    version: documentServer.version,
    whatsNewLink: "https://helpcenter.onlyoffice.com/docs/docs-changelog.aspx",
    releaseDate: documentServer.date,
    license: "AGPLv3",
    sourceCodeOnGithubLink:
      "https://github.com/ONLYOFFICE/Docker-DocumentServer",
    readInstructionLink: "DockerImagecommunityProductsLink",
    buttons: [
      {
        id: "onlyoffice_docs_community_for_docker_image_intel",
        label: "Intel",
        link: {
          href: "https://helpcenter.onlyoffice.com/docs/installation/docs-community-install-docker.aspx?_ga=2.51711023.782359554.1594636128-1157782750.1587541027",
          isExternal: true,
        },
      },
      {
        id: "onlyoffice_docs_community_for_docker_image_arm",
        label: "ARM",
        link: {
          href: "https://helpcenter.onlyoffice.com/docs/installation/docs-community-install-docker-arm64.aspx",
          isExternal: true,
        },
      },
    ],
  },
  {
    nameKey: "DocumentServer",
    image: {
      url: getAssetUrl("/images/templates/download-community/hero/derbian-ubuntu.svg"),
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
    license: "AGPLv3",
    sourceCodeOnGithubLink: "https://github.com/ONLYOFFICE/DocumentServer",
    readInstructionLink: "ForDebianUbuntucommunityProductsLink",
    buttons: [
      {
        id: "onlyoffice_docs_community_for_debian_ubuntu_and_derivatives_intel",
        label: "Intel",
        link: {
          href: "https://helpcenter.onlyoffice.com/docs/installation/docs-community-install-ubuntu.aspx?_ga=2.121380878.782359554.1594636128-1157782750.1587541027",
          isExternal: true,
        },
      },
      {
        id: "onlyoffice_docs_community_for_debian_ubuntu_and_derivatives_arm",
        label: "ARM",
        link: {
          href: "https://helpcenter.onlyoffice.com/docs/installation/docs-community-install-ubuntu-arm64.aspx",
          isExternal: true,
        },
      },
    ],
  },
  {
    nameKey: "DocumentServer",
    image: {
      url: getAssetUrl("/images/templates/download-community/hero/centos.svg"),
      positionX: "center",
      positionY: "center",
      background: "#f5f5f5",
      size: "contain",
      width: "100px",
      mobileWidth: "78px",
    },
    heading: "ForCentOS",
    version: documentServer.version,
    whatsNewLink: "https://helpcenter.onlyoffice.com/docs/docs-changelog.aspx",
    releaseDate: documentServer.date,
    license: "AGPLv3",
    sourceCodeOnGithubLink: "https://github.com/ONLYOFFICE/DocumentServer",
    readInstructionLink: "ForCentOScommunityProductsLink",
    buttons: [
      {
        id: "onlyoffice_docs_community_for_centos_rhel_and_derivatives_intel",
        label: "Intel",
        link: {
          href: "https://helpcenter.onlyoffice.com/docs/installation/docs-community-install-centos.aspx?_ga=2.111501954.782359554.1594636128-1157782750.1587541027",
          isExternal: true,
        },
      },
      {
        id: "onlyoffice_docs_community_for_centos_rhel_and_derivatives_arm",
        label: "ARM",
        link: {
          href: "https://helpcenter.onlyoffice.com/docs/installation/docs-community-install-centos-arm64.aspx",
          isExternal: true,
        },
      },
    ],
  },
  {
    nameKey: "DocumentServer",
    image: {
      url: getAssetUrl("/images/templates/download-community/hero/windows.svg"),
      positionX: "center",
      positionY: "center",
      background: "#00188f",
      size: "contain",
      width: "100px",
      mobileWidth: "78px",
    },
    heading: "ForWindowsServer2012OrHigher",
    version: documentServer.version,
    whatsNewLink: "https://helpcenter.onlyoffice.com/docs/docs-changelog.aspx",
    releaseDate: documentServer.date,
    license: "AGPLv3",
    sourceCodeOnGithubLink: "https://github.com/ONLYOFFICE/DocumentServer",
    readInstructionLink: "ForWindowsServer2012OrHighercommunityProductsLink",
    buttons: [
      {
        id: "onlyoffice_docs_community_for_windows_server_2012_or_higher",
        label: "Download",
        link: {
          href: "https://download.onlyoffice.com/install/documentserver/windows/onlyoffice-documentserver.exe",
          download: true,
        },
      },
    ],
  },
  {
    nameKey: "snap-documentserver",
    image: {
      url: getAssetUrl("/images/templates/download-community/hero/snap-package.svg"),
      positionX: "center",
      positionY: "center",
      background: "#ff6f3d",
      size: "contain",
      width: "100px",
      mobileWidth: "78px",
    },
    heading: "SnapPackage",
    version: snapPackage.version,
    whatsNewLink: "https://helpcenter.onlyoffice.com/docs/docs-changelog.aspx",
    releaseDate: snapPackage.date,
    license: "AGPLv3",
    sourceCodeOnGithubLink: "https://github.com/ONLYOFFICE/snap-documentserver",
    readInstructionLink: "SnapPackagecommunityProductsLink",
    buttons: [
      {
        id: "onlyoffice_docs_community_for_snap_package",
        label: "InstallSnapPackage",
        link: {
          href: "https://helpcenter.onlyoffice.com/docs/installation/docs-community-install-from-snap.aspx?_ga=2.24912700.782359554.1594636128-1157782750.1587541027",
          isExternal: true,
        },
      },
    ],
  },
  {
    image: {
      url: getAssetUrl("/images/templates/download-community/hero/univention-appliance.png"),
      positionX: "center",
      positionY: "center",
      background: "#f5f5f5",
      size: "contain",
      width: "100px",
      mobileWidth: "78px",
    },
    heading: "UniventionAppliance",
    version: univentionAppliance.version,
    whatsNewLink: "https://helpcenter.onlyoffice.com/docs/docs-changelog.aspx",
    releaseDate: univentionAppliance.date,
    license: "AGPLv3",
    readInstructionLink: "UniventionAppliancecommunityProductsLink",
    buttons: [
      {
        id: "onlyoffice_docs_community_for_univention_appliance",
        label: "InstallInUnivention",
        link: {
          href: "https://www.univention.com/products/univention-app-center/app-catalog/onlyoffice-ds/",
          isExternal: true,
        },
      },
    ],
  },
  {
    nameKey: "DocumentServer",
    image: {
      url: getAssetUrl("/images/templates/download-community/hero/digital-ocean.svg"),
      positionX: "center",
      positionY: "center",
      background: "#0080ff",
      size: "contain",
      width: "81px",
      mobileWidth: "56px",
    },
    heading: "1ClickAppOnDigitalOcean",
    version: documentServer.version,
    whatsNewLink: "https://helpcenter.onlyoffice.com/docs/docs-changelog.aspx",
    releaseDate: documentServer.date,
    license: "AGPLv3",
    readInstructionLink: "1ClickAppOnDigitalOceancommunityProductsLink",
    buttons: [
      {
        id: "onlyoffice_docs_community_for_1-click_app_on_digitalocean",
        label: "InstallOnDigitalOcean",
        link: {
          href: "https://marketplace.digitalocean.com/apps/onlyoffice-docs",
          isExternal: true,
        },
      },
    ],
  },
  {
    nameKey: "com.onlyoffice.coudronapp",
    image: {
      url: getAssetUrl("/images/templates/download-community/hero/cloudron.png"),
      positionX: "center",
      positionY: "center",
      background: "#03aefc",
      size: "contain",
      width: "100px",
      mobileWidth: "78px",
    },
    heading: "1ClickAppOnCloudron",
    version: cloudron.version,
    whatsNewLink: "https://helpcenter.onlyoffice.com/docs/docs-changelog.aspx",
    releaseDate: cloudron.date,
    license: "AGPLv3",
    readInstructionLink: "1ClickAppOnCloudroncommunityProductsLink",
    buttons: [
      {
        id: "onlyoffice_docs_community_for_1-click_app_on_cloudron",
        label: "InstallOnCloudron",
        link: {
          href: "https://cloudron.io/store/com.onlyoffice.coudronapp.html",
          isExternal: true,
        },
      },
    ],
  },
  {
    image: {
      url: getAssetUrl("/images/templates/download-community/hero/vultr.svg"),
      positionX: "center",
      positionY: "center",
      background: "linear-gradient(90deg,#09276B 0%,#2448A2 100%)",
      size: "contain",
      width: "152px",
    },
    heading: "1ClickAppOnVultr",
    version: vultr.version,
    whatsNewLink: "https://helpcenter.onlyoffice.com/docs/docs-changelog.aspx",
    releaseDate: vultr.date,
    license: "AGPLv3",
    readInstructionLink: "1ClickAppOnVultrcommunityProductsLink",
    buttons: [
      {
        id: "onlyoffice_docs_community_for_1-click_app_on_vultr",
        label: "InstallOnVultr",
        link: {
          href: "https://www.vultr.com/marketplace/apps/onlyoffice-docs",
          isExternal: true,
        },
      },
    ],
  },
  {
    image: {
      url: getAssetUrl("/images/templates/download-community/hero/linode.svg"),
      positionX: "center",
      positionY: "center",
      background: "#f5f5f5",
      size: "contain",
      width: "160px",
    },
    heading: "1ClickAppOnLinode",
    version: linode.version,
    whatsNewLink: "https://helpcenter.onlyoffice.com/docs/docs-changelog.aspx",
    releaseDate: linode.date,
    license: "AGPLv3",
    readInstructionLink: "1ClickAppOnLinodecommunityProductsLink",
    buttons: [
      {
        id: "onlyoffice_docs_community_for_1-click_app_on_linode",
        label: "InstallOnLinode",
        link: {
          href: "https://www.linode.com/marketplace/apps/onlyoffice/onlyoffice-docs/",
          isExternal: true,
        },
      },
    ],
  },
];

export const bundlesWithOwnCloudProducts: IDownloadBlock[] = [
  {
    nameKey: "onlyoffice-owncloud",
    image: {
      url: getAssetUrl("/images/templates/download-community/hero/docker.svg"),
      positionX: "center",
      positionY: "center",
      background: "#099cec",
      size: "contain",
      width: "100px",
      mobileWidth: "78px",
    },
    heading: "DockerCompose",
    version: onlyofficeOvhcloud.version,
    whatsNewLink:
      "https://github.com/ONLYOFFICE/onlyoffice-owncloud/blob/master/CHANGELOG.md",
    releaseDate: onlyofficeOvhcloud.date,
    license: "AGPLv3",
    readInstructionLink: "DockerComposebundlesWithOwnCloudProductsLink",
    buttons: [
      {
        id: "onlyoffice_workspace_with_owncloud_for_docker_compose",
        label: "InstallNow",
        link: {
          href: "https://github.com/ONLYOFFICE/docker-onlyoffice-owncloud",
          isExternal: true,
        },
      },
    ],
  },
  {
    image: {
      url: getAssetUrl("/images/templates/download-community/hero/vmware.svg"),
      positionX: "center",
      positionY: "center",
      background: "#f5f5f5",
      size: "contain",
      width: "150px",
    },
    heading: "VMwareImage",
    version: providedbyunivention.version,
    releaseDate: providedbyunivention.date,
    readInstructionLink: "VMwareImagebundlesWithOwnCloudProductsLink",
    buttons: [
      {
        id: "onlyoffice_workspace_with_owncloud_for_vmware_image",
        label: "InstallNow",
        link: {
          href: "https://appcenter.software-univention.de/univention-apps/current/onlyoffice-ds/Univention-App-onlyoffice-ds-owncloud-vmware.zip",
          download: true,
        },
      },
    ],
  },
  {
    image: {
      url: getAssetUrl("/images/templates/download-community/hero/vmware-esx.png"),
      positionX: "center",
      positionY: "center",
      background: "#f5f5f5",
      size: "contain",
      width: "172px",
    },
    heading: "VMwareESXImage",
    version: providedbyunivention.version,
    releaseDate: providedbyunivention.date,
    readInstructionLink: "VMwareESXImagebundlesWithOwnCloudProductsLink",
    buttons: [
      {
        id: "onlyoffice_workspace_with_owncloud_for_vmware_esx_image",
        label: "InstallNow",
        link: {
          href: "https://appcenter.software-univention.de/univention-apps/current/onlyoffice-ds/Univention-App-onlyoffice-ds-owncloud-ESX.ova",
          download: true,
        },
      },
    ],
  },
  {
    image: {
      url: getAssetUrl("/images/templates/download-community/hero/virtualbox.png"),
      positionX: "center",
      positionY: "center",
      background: "#1d3d67",
      size: "contain",
      width: "100px",
      mobileWidth: "78px",
    },
    heading: "VirtualBoxImage",
    version: providedbyunivention.version,
    releaseDate: providedbyunivention.date,
    readInstructionLink: "VirtualBoxImagebundlesWithOwnCloudProductsLink",
    buttons: [
      {
        id: "onlyoffice_workspace_with_owncloud_for_virtualbox_image",
        label: "InstallNow",
        link: {
          href: "https://appcenter.software-univention.de/univention-apps/current/onlyoffice-ds/Univention-App-onlyoffice-ds-owncloud-virtualbox.ova",
          download: true,
        },
      },
    ],
  },
  {
    image: {
      url: getAssetUrl("/images/templates/download-community/hero/kvm.png"),
      positionX: "center",
      positionY: "center",
      background: "#f5f5f5",
      size: "contain",
      width: "150px",
    },
    heading: "KVMImage",
    version: providedbyunivention.version,
    releaseDate: providedbyunivention.date,
    readInstructionLink: "KVMImagebundlesWithOwnCloudProductsLink",
    buttons: [
      {
        id: "onlyoffice_workspace_with_owncloud_for_kvm_image",
        label: "InstallNow",
        link: {
          href: "https://appcenter.software-univention.de/univention-apps/current/onlyoffice-ds/Univention-App-onlyoffice-ds-owncloud-KVM.qcow2",
          download: true,
        },
      },
    ],
  },
];

export const bundlesWithNextcloudProducts: IDownloadBlock[] = [
  {
    nameKey: "onlyoffice-nextcloud",
    image: {
      url: getAssetUrl("/images/templates/download-community/hero/docker.svg"),
      positionX: "center",
      positionY: "center",
      background: "#099cec",
      size: "contain",
      width: "100px",
      mobileWidth: "78px",
    },
    heading: "DockerCompose",
    version: onlyofficeNextcloud.version,
    whatsNewLink:
      "https://github.com/ONLYOFFICE/onlyoffice-nextcloud/blob/master/CHANGELOG.md",
    releaseDate: onlyofficeNextcloud.date,
    license: "AGPLv3",
    readInstructionLink: "DockerComposebundlesWithNextcloudProductsLink",
    buttons: [
      {
        id: "onlyoffice_workspace_with_nextcloud_for_docker_compose",
        label: "InstallNow",
        link: {
          href: "https://github.com/ONLYOFFICE/docker-onlyoffice-nextcloud",
          isExternal: true,
        },
      },
    ],
  },
  {
    image: {
      url: getAssetUrl("/images/templates/download-community/hero/vmware.svg"),
      positionX: "center",
      positionY: "center",
      background: "#f5f5f5",
      size: "contain",
      width: "150px",
    },
    heading: "VMwareImage",
    version: providedbyunivention.version,
    releaseDate: providedbyunivention.date,
    readInstructionLink: "VMwareImagebundlesWithNextcloudProductsLink",
    buttons: [
      {
        id: "onlyoffice_workspace_with_nextcloud_for_vmware_image",
        label: "InstallNow",
        link: {
          href: "https://appcenter.software-univention.de/univention-apps/current/onlyoffice-ds/Univention-App-onlyoffice-ds-nextcloud-vmware.zip",
          download: true,
        },
      },
    ],
  },
  {
    image: {
      url: getAssetUrl("/images/templates/download-community/hero/vmware-esx.png"),
      positionX: "center",
      positionY: "center",
      background: "#f5f5f5",
      size: "contain",
      width: "172px",
    },
    heading: "VMwareESXImage",
    version: providedbyunivention.version,
    releaseDate: providedbyunivention.date,
    readInstructionLink: "VMwareESXImagebundlesWithNextcloudProductsLink",
    buttons: [
      {
        id: "onlyoffice_workspace_with_nextcloud_for_vmware_esx_image",
        label: "InstallNow",
        link: {
          href: "https://appcenter.software-univention.de/univention-apps/current/onlyoffice-ds/Univention-App-onlyoffice-ds-nextcloud-ESX.ova",
          download: true,
        },
      },
    ],
  },
  {
    image: {
      url: getAssetUrl("/images/templates/download-community/hero/virtualbox.png"),
      positionX: "center",
      positionY: "center",
      background: "#1d3d67",
      size: "contain",
      width: "100px",
      mobileWidth: "78px",
    },
    heading: "VirtualBoxImage",
    version: providedbyunivention.version,
    releaseDate: providedbyunivention.date,
    readInstructionLink: "VirtualBoxImagebundlesWithNextcloudProductsLink",
    buttons: [
      {
        id: "onlyoffice_workspace_with_nextcloud_for_virtualbox_image",
        label: "InstallNow",
        link: {
          href: "https://appcenter.software-univention.de/univention-apps/current/onlyoffice-ds/Univention-App-onlyoffice-ds-nextcloud-virtualbox.ova",
          download: true,
        },
      },
    ],
  },
  {
    image: {
      url: getAssetUrl("/images/templates/download-community/hero/kvm.png"),
      positionX: "center",
      positionY: "center",
      background: "#f5f5f5",
      size: "contain",
      width: "150px",
    },
    heading: "KVMImage",
    version: providedbyunivention.version,
    releaseDate: providedbyunivention.date,
    readInstructionLink: "KVMImagebundlesWithNextcloudProductsLink",
    buttons: [
      {
        id: "onlyoffice_workspace_with_nextcloud_for_kvm_image",
        label: "InstallNow",
        link: {
          href: "https://appcenter.software-univention.de/univention-apps/current/onlyoffice-ds/Univention-App-onlyoffice-ds-nextcloud-KVM.qcow2",
          download: true,
        },
      },
    ],
  },
];
