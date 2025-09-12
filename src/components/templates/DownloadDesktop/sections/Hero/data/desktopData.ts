import { IHeroNavData, IHeroProducts } from "../Hero.types";
import { getAssetUrl } from "@utils/getAssetUrl";
import {
  onlineinstaller,
  win64Exe,
  win64Msi,
  win86Exe,
  win86Msi,
  win64Xp,
  win86Xp,
  macosIntel,
  macosApple,
  macosX86,
  lindeb,
  linrpm,
  linsnap,
  linflatpak,
  appimageDesktopeditors,
} from "@src/config/constans/download";

const productsSprite = getAssetUrl("/images/templates/download-desktop/hero/products.svg");
const productsSprite2 = getAssetUrl("/images/templates/download-desktop/hero/products.png");

export const navDesktopData: IHeroNavData[] = [
  {
    id: "windows",
    label: "Windows",
  },
  {
    id: "macos",
    label: "macOS",
  },
  {
    id: "linux",
    label: "Linux",
  },
  {
    id: "pre-installed-on",
    label: "PreInstalledOn",
  },
  {
    id: "available-on",
    label: "AvailableOn",
  },
];

export const desktopProducts: IHeroProducts[] = [
  {
    id: "windows",
    heading: "OODesktopEditorsForWindows",
    text: "OODesktopEditorsForWindowsText",
    items: [
      {
        nameKey: "Desktop-Windows_online-exe-x86",
        image: {
          url: productsSprite,
          positionX: "-21px",
          positionY: "-20px",
        },
        heading: "OnlineInstaller",
        recomended: true,
        version: onlineinstaller.version,
        fileSize: {
          primary: onlineinstaller.size,
          unit: "KB",
        },
        releaseDate: onlineinstaller.date,
        license: "AGPLv3",
        buttons: [
          {
            id: "onlyoffice_desktop_editors_online_installer",
            label: "Download",
            link: {
              href: onlineinstaller.url,
              download: true,
            },
          },
        ],
      },
      {
        nameKey: ["Desktop-Windows-exe-x64", "Desktop-Windows-msi-x64"],
        image: {
          url: productsSprite,
          positionX: "-21px",
          positionY: "-122px",
        },
        heading: "ForWindowsX64",
        version: win64Exe.version,
        whatsNewLink:
          "https://helpcenter.onlyoffice.com/desktop/desktop-changelog.aspx",
        fileSize: {
          primary: win64Exe.size,
          secondary: win64Msi.size,
          unit: "MB",
        },
        releaseDate: win64Exe.date,
        license: "AGPLv3",
        sourceCodeOnGithubLink: "https://github.com/ONLYOFFICE/DesktopEditors",
        readInstructionLink:
          "https://helpcenter.onlyoffice.com/desktop/installation/desktop-install-windows.aspx",
        buttons: [
          {
            id: "onlyoffice_desktop_editors_for_windows_10_8_7_x64_exe",
            label: "EXE",
            link: {
              href: win64Exe.url,
              download: true,
            },
          },
          {
            id: "onlyoffice_desktop_editors_for_windows_10_8_7_x64_msi",
            label: "MSI",
            link: {
              href: win64Msi.url,
              download: true,
            },
          },
        ],
      },
      {
        nameKey: ["Desktop-Windows-exe-x86", "Desktop-Windows-msi-x86"],
        image: {
          url: productsSprite,
          positionX: "-21px",
          positionY: "-224px",
        },
        heading: "ForWindowsX86",
        version: win86Exe.version,
        whatsNewLink:
          "https://helpcenter.onlyoffice.com/desktop/desktop-changelog.aspx",
        fileSize: {
          primary: win86Exe.size,
          secondary: win86Msi.size,
          unit: "MB",
        },
        releaseDate: win86Exe.date,
        license: "AGPLv3",
        sourceCodeOnGithubLink: "https://github.com/ONLYOFFICE/DesktopEditors",
        readInstructionLink:
          "https://helpcenter.onlyoffice.com/desktop/installation/desktop-install-windows.aspx",
        buttons: [
          {
            id: "onlyoffice_desktop_editors_for_windows_10_8_7_x86_exe",
            label: "EXE",
            link: {
              href: win86Exe.url,
              download: true,
            },
          },
          {
            id: "onlyoffice_desktop_editors_for_windows_10_8_7_x86_msi",
            label: "MSI",
            link: {
              href: win86Msi.url,
              download: true,
            },
          },
        ],
      },
      {
        nameKey: ["Desktop-Windows--x64_xp", "Desktop-Windows--x86_xp"],
        image: {
          url: productsSprite,
          positionX: "-21px",
          positionY: "-326px",
        },
        heading: "ForWindowsXPVista",
        version: win64Xp.version,
        whatsNewLink:
          "https://helpcenter.onlyoffice.com/desktop/desktop-changelog.aspx",
        fileSize: {
          primary: win64Xp.size,
          secondary: win86Xp.size,
          unit: "MB",
        },
        releaseDate: win64Xp.date,
        license: "AGPLv3",
        sourceCodeOnGithubLink: "https://github.com/ONLYOFFICE/DesktopEditors",
        readInstructionLink:
          "https://helpcenter.onlyoffice.com/desktop/installation/desktop-install-windows.aspx",
        buttons: [
          {
            id: "onlyoffice_desktop_editors_for_windows_xp_vista_x64",
            label: "x64",
            link: {
              href: win64Xp.url,
              download: true,
            },
          },
          {
            id: "onlyoffice_desktop_editors_for_windows_xp_vista_x86",
            label: "x86",
            link: {
              href: win86Xp.url,
              download: true,
            },
          },
        ],
      },
    ],
  },
  {
    id: "macos",
    heading: "OODesktopEditorsForMacOS",
    text: "OODesktopEditorsForMacOSText",
    items: [
      {
        nameKey: ["Desktop-MacOS--", "Desktop-MacOS_arm--"],
        image: {
          url: productsSprite,
          positionX: "-21px",
          positionY: "-428px",
        },
        heading: "ForMacOS10.13OrHigher",
        version: macosIntel.version,
        whatsNewLink:
          "https://helpcenter.onlyoffice.com/desktop/desktop-changelog.aspx",
        fileSize: {
          primary: macosIntel.size,
          secondary: macosApple.size,
          unit: "MB",
        },
        releaseDate: macosIntel.date,
        license: "AGPLv3",
        sourceCodeOnGithubLink: "https://github.com/ONLYOFFICE/DesktopEditors",
        readInstructionLink:
          "https://helpcenter.onlyoffice.com/desktop/installation/desktop-install-macos.aspx",
        buttons: [
          {
            id: "onlyoffice_desktop_editors_for_macos_10_intel_chip",
            label: "IntelChip",
            link: {
              href: macosIntel.url,
              download: true,
            },
          },
          {
            id: "onlyoffice_desktop_editors_for_macos_10_apple_chip",
            label: "AppleChip",
            link: {
              href: macosApple.url,
              download: true,
            },
          },
        ],
      },
      {
        nameKey: "Desktop-MacOS_legacy--",
        image: {
          url: productsSprite,
          positionX: "-21px",
          positionY: "-428px",
        },
        heading: "ForMacOS10.12OrLower",
        version: macosX86.version,
        whatsNewLink:
          "https://helpcenter.onlyoffice.com/desktop/desktop-changelog.aspx",
        fileSize: {
          primary: macosX86.size,
          unit: "MB",
        },
        releaseDate: macosX86.date,
        license: "AGPLv3",
        sourceCodeOnGithubLink: "https://github.com/ONLYOFFICE/DesktopEditors",
        readInstructionLink:
          "https://helpcenter.onlyoffice.com/desktop/installation/desktop-install-macos.aspx",
        buttons: [
          {
            id: "onlyoffice_desktop_editors_for_macos_x86",
            label: "Download",
            link: {
              href: macosX86.url,
              download: true,
            },
          },
        ],
      },
    ],
  },
  {
    id: "linux",
    heading: "OODesktopEditorsForLinux",
    text: "OODesktopEditorsForLinuxText",
    items: [
      {
        nameKey: "Desktop-Linux-deb-x64",
        image: {
          url: productsSprite,
          positionX: "-21px",
          positionY: "-530px",
        },
        heading: "Debian8Ubuntu16.04AndHigher",
        version: lindeb.version,
        whatsNewLink:
          "https://helpcenter.onlyoffice.com/desktop/desktop-changelog.aspx",
        releaseDate: lindeb.date,
        fileSize: {
          primary: lindeb.size,
          unit: "MB",
        },
        license: "AGPLv3",
        sourceCodeOnGithubLink: "https://github.com/ONLYOFFICE/DesktopEditors",
        readInstructionLink:
          "https://helpcenter.onlyoffice.com/installation/desktop-install-ubuntu.aspx",
        buttons: [
          {
            id: "onlyoffice_desktop_editors_for_linux_for_debian_8_ubuntu_14_and_higher",
            label: "DownloadDEB",
            link: {
              href: lindeb.url,
              download: true,
            },
          },
        ],
      },
      {
        nameKey: "Desktop-Linux-rpm-x64",
        image: {
          url: productsSprite,
          positionX: "-21px",
          positionY: "-632px",
        },
        heading: "ForCentOSAndRHEL",
        version: linrpm.version,
        whatsNewLink:
          "https://helpcenter.onlyoffice.com/desktop/desktop-changelog.aspx",
        releaseDate: linrpm.date,
        fileSize: {
          primary: linrpm.size,
          unit: "MB",
        },
        license: "AGPLv3",
        sourceCodeOnGithubLink: "https://github.com/ONLYOFFICE/DesktopEditors",
        readInstructionLink:
          "https://helpcenter.onlyoffice.com/desktop/installation/desktop-install-rhel.aspx",
        buttons: [
          {
            id: "onlyoffice_desktop_editors_for_linux_for_centos_and_rhel",
            label: "DownloadRPM",
            link: {
              href: linrpm.url,
              download: true,
            },
          },
        ],
      },
      {
        image: {
          url: productsSprite,
          positionX: "-21px",
          positionY: "-734px",
        },
        heading: "SnapPackage",
        version: linsnap.version,
        whatsNewLink:
          "https://helpcenter.onlyoffice.com/desktop/desktop-changelog.aspx",
        releaseDate: linsnap.date,
        license: "AGPLv3",
        sourceCodeOnGithubLink:
          "https://github.com/ONLYOFFICE/snap-desktopeditors",
        readInstructionLink:
          "https://helpcenter.onlyoffice.com/desktop/installation/desktop-install-snap.aspx",
        buttons: [
          {
            id: "onlyoffice_desktop_editors_for_linux_for_snap_package",
            label: "InstallFromSnapStore",
            link: {
              href: "https://snapcraft.io/onlyoffice-desktopeditors",
              isExternal: true,
            },
          },
        ],
      },
      {
        image: {
          url: productsSprite2,
          size: "88px",
        },
        heading: "Flatpak",
        version: linflatpak.version,
        whatsNewLink:
          "https://helpcenter.onlyoffice.com/desktop/desktop-changelog.aspx",
        releaseDate: linflatpak.date,
        license: "AGPLv3",
        sourceCodeOnGithubLink:
          "https://github.com/flathub/org.onlyoffice.desktopeditors",
        readInstructionLink:
          "https://helpcenter.onlyoffice.com/installation/desktop-install-flatpak.aspx",
        buttons: [
          {
            id: "onlyoffice_desktop_editors_for_linux_for_flatpak",
            label: "InstallFromFlathub",
            link: {
              href: "https://flathub.org/apps/details/org.onlyoffice.desktopeditors",
              isExternal: true,
            },
          },
        ],
      },
      {
        nameKey: "appimage-desktopeditors",
        image: {
          url: productsSprite,
          positionX: "-21px",
          positionY: "-2672px",
        },
        heading: "AppImage",
        version: appimageDesktopeditors.version,
        whatsNewLink:
          "https://helpcenter.onlyoffice.com/desktop/desktop-changelog.aspx",
        releaseDate: appimageDesktopeditors.date,
        license: "AGPLv3",
        sourceCodeOnGithubLink:
          "https://github.com/ONLYOFFICE/appimage-desktopeditors",
        readInstructionLink:
          "https://helpcenter.onlyoffice.com/installation/desktop-install-appimage.aspx",
        buttons: [
          {
            id: "onlyoffice_desktop_editors_for_linux_for_appimage",
            label: "Download",
            link: {
              href: "https://github.com/ONLYOFFICE/appimage-desktopeditors/releases/download/v8.3.3/DesktopEditors-x86_64.AppImage",
              download: true,
            },
          },
        ],
      },
    ],
  },
  {
    id: "pre-installed-on",
    heading: "OODesktopEditorsArePreInstalledOn",
    items: [
      {
        image: {
          url: productsSprite,
          positionX: "-21px",
          positionY: "-836px",
        },
        heading: "BrOS",
        buttons: [
          {
            id: "onlyoffice_desktop_editors_for_br_os",
            label: "LearnMore",
            link: {
              href: "https://br-os.com",
              isExternal: true,
            },
          },
        ],
      },
      {
        image: {
          url: productsSprite2,
          positionY: "-96px",
          size: "88px",
        },
        heading: "EscuelasLinux",
        buttons: [
          {
            id: "onlyoffice_desktop_editors_for_escuelas_linux",
            label: "LearnMore",
            link: {
              href: "https://escuelaslinux.sourceforge.io/english/index.html",
              isExternal: true,
            },
          },
        ],
      },
      {
        image: {
          url: productsSprite2,
          positionY: "-192px",
          size: "88px",
        },
        heading: "Linkat",
        buttons: [
          {
            id: "onlyoffice_desktop_editors_for_linkat",
            label: "LearnMore",
            link: {
              href: "http://linkat.xtec.cat",
              isExternal: true,
            },
          },
        ],
      },
      {
        image: {
          url: productsSprite,
          positionX: "-21px",
          positionY: "-1142px",
        },
        heading: "Linspire",
        buttons: [
          {
            id: "onlyoffice_desktop_editors_for_linspire",
            label: "LearnMore",
            link: {
              href: "https://www.linspirelinux.com",
              isExternal: true,
            },
          },
        ],
      },
      {
        image: {
          url: productsSprite,
          positionX: "-21px",
          positionY: "-1244px",
        },
        heading: "Wubuntu",
        buttons: [
          {
            id: "onlyoffice_desktop_editors_for_linuxfx",
            label: "LearnMore",
            link: {
              href: "https://wubuntu.org",
              isExternal: true,
            },
          },
        ],
      },
      {
        image: {
          url: productsSprite,
          positionX: "-21px",
          positionY: "-938px",
        },
        heading: "PamacManjarosPackageManager",
        buttons: [
          {
            id: "onlyoffice_desktop_editors_for_pamac",
            label: "VisitOSWebsite",
            link: {
              href: "https://manjaro.org",
              isExternal: true,
            },
          },
        ],
      },
      {
        image: {
          url: productsSprite,
          positionX: "-21px",
          positionY: "-1346px",
        },
        heading: "risiOS",
        buttons: [
          {
            id: "onlyoffice_desktop_editors_for_risi",
            label: "LearnMore",
            link: {
              href: "https://risi.io",
              isExternal: true,
            },
          },
        ],
      },
      {
        image: {
          url: productsSprite,
          positionX: "-21px",
          positionY: "-1550px",
        },
        heading: "SparkyLinux",
        buttons: [
          {
            id: "onlyoffice_desktop_editors_for_SparkyLinux",
            label: "LearnMore",
            link: {
              href: "https://repo.sparkylinux.org",
              isExternal: true,
            },
          },
        ],
      },
      {
        image: {
          url: productsSprite,
          positionX: "-21px",
          positionY: "-1652px",
        },
        heading: "MaunaLinux",
        buttons: [
          {
            id: "onlyoffice_desktop_editors_for_Mauna_Linux",
            label: "LearnMore",
            link: {
              href: "https://maunalinux.top",
              isExternal: true,
            },
          },
        ],
      },
      {
        image: {
          url: productsSprite,
          positionX: "-21px",
          positionY: "-1040px",
        },
        heading: "Freespire",
        buttons: [
          {
            id: "onlyoffice_desktop_editors_for_freespire",
            label: "LearnMore",
            link: {
              href: "https://www.freespire.net",
              isExternal: true,
            },
          },
        ],
      },
      {
        image: {
          url: productsSprite,
          positionX: "-21px",
          positionY: "-1447px",
        },
        heading: "RegataOS",
        buttons: [
          {
            id: "onlyoffice_desktop_editors_for_regataos",
            label: "LearnMore",
            link: {
              href: "https://get.regataos.com.br",
              isExternal: true,
            },
          },
        ],
      },
    ],
  },
  {
    id: "available-on",
    heading: "OODesktopEditorsAreAvailableOn",
    items: [
      {
        image: {
          url: productsSprite,
          positionX: "-21px",
          positionY: "-1958px",
        },
        heading: "LinuxMintSoftwareStore",
        buttons: [
          {
            id: "onlyoffice_desktop_editors_for_linux_mint_software_store",
            label: "VisitOSWebsite",
            link: {
              href: "https://www.linuxmint.com",
              isExternal: true,
            },
          },
        ],
      },
      {
        image: {
          url: productsSprite,
          positionX: "-21px",
          positionY: "-1856px",
        },
        heading: "ZorinOSSoftwareStore",
        buttons: [
          {
            id: "onlyoffice_desktop_editors_for_zorin_os_software_store",
            label: "VisitOSWebsite",
            link: {
              href: "https://zorinos.com",
              isExternal: true,
            },
          },
        ],
      },
      {
        image: {
          url: productsSprite,
          positionX: "-21px",
          positionY: "-1754px",
        },
        heading: "DeepinAppStore",
        buttons: [
          {
            id: "onlyoffice_desktop_editors_for_deepin_app_store",
            label: "VisitOSWebsite",
            link: {
              href: "https://www.deepin.org/en",
              isExternal: true,
            },
          },
        ],
      },
      {
        image: {
          url: productsSprite,
          positionX: "-21px",
          positionY: "-2162px",
        },
        heading: "CutefishStore",
        buttons: [
          {
            id: "onlyoffice_desktop_editors_for_cutefish_store",
            label: "VisitOSWebsite",
            link: {
              href: "https://cutefish-ubuntu.github.io",
              isExternal: true,
            },
          },
        ],
      },
      {
        image: {
          url: productsSprite,
          positionX: "-21px",
          positionY: "-2060px",
        },
        heading: "openKylinSoftwareStore",
        buttons: [
          {
            id: "onlyoffice_desktop_editors_for_openkylin_software",
            label: "VisitOSWebsite",
            link: {
              href: "https://www.openkylin.top/downloads/os-en.html",
              isExternal: true,
            },
          },
        ],
      },
    ],
  },
];
