import { IHeroNavData, IHeroProducts } from "../Hero.types";
import { ILocale } from "@src/types/locale";

import { getAssetUrl } from "@utils/getAssetUrl";
const productsSprite = getAssetUrl("/images/templates/download-desktop/hero/products.svg");

export const navMobileData: IHeroNavData[] = [
  {
    id: "documents",
    label: "Documents",
  },
  {
    id: "projects",
    label: "Projects",
  },
];

export const mobileProducts = (locale: ILocale["locale"]): IHeroProducts[] => [
  {
    id: "documents",
    heading: "OODocumentsForYourMobileDevices",
    text: "OODocumentsForYourMobileDevicesText",
    items: [
      {
        image: {
          url: productsSprite,
          positionX: "-21px",
          positionY: "-2366px",
        },
        heading: "OODocumentsOnGooglePlay",
        buttons: [
          {
            id: "onlyoffice_documents_for_android",
            label: "GetItOnGooglePlay",
            link: {
              href: "https://play.google.com/store/apps/details?id=com.onlyoffice.documents",
              isExternal: true,
            },
          },
        ],
      },
      ...(locale === "zh"
        ? [
            {
              image: {
                url: productsSprite,
                positionX: "-21px",
                positionY: "-2366px",
              },
              heading: "适用于Android(ARM)的ONLYOFFICE文档",
              buttons: [
                {
                  id: "onlyoffice_documents_for_android_arm",
                  label: "获取安卓安装包",
                  link: {
                    href: "https://download.onlyoffice.com/install/mobile/android/onlyoffice-documents.apk",
                    download: true,
                  },
                },
              ],
            },
          ]
        : []),
      {
        image: {
          url: productsSprite,
          positionX: "-21px",
          positionY: "-2264px",
        },
        heading: "OODocumentsOnTheAppStore",
        buttons: [
          {
            id: "onlyoffice_documents_for_ios",
            label: "DownloadOnTheAppStore",
            link: {
              href: "https://itunes.apple.com/us/app/onlyoffice-documents/id944896972",
              isExternal: true,
            },
          },
        ],
      },
      {
        image: {
          url: productsSprite,
          positionX: "-21px",
          positionY: "-2570px",
        },
        heading: "OODocumentsForHuaweiAppGallery",
        buttons: [
          {
            id: "onlyoffice_documents_for_huawei_app_gallery",
            label: "ExploreItOnAppGallery",
            link: {
              href: "https://appgallery.huawei.com/#/app/C102942717",
              isExternal: true,
            },
          },
        ],
      },
      {
        image: {
          url: productsSprite,
          positionX: "-21px",
          positionY: "-2468px",
        },
        heading: "OODocumentsOnTheGalaxyStore",
        buttons: [
          {
            id: "onlyoffice_documents_for_galaxy_store",
            label: "AvailableOnGalaxyStore",
            link: {
              href: "https://galaxystore.samsung.com/detail/com.onlyoffice.documents",
              isExternal: true,
            },
          },
        ],
      },
    ],
  },
  {
    id: "projects",
    heading: "OOProjectsForYourMobileDevices",
    text: "OOProjectsForYourMobileDevicesText",
    items: [
      {
        image: {
          url: productsSprite,
          positionX: "-21px",
          positionY: "-2366px",
        },
        heading: "OOProjectsForAndroid",
        buttons: [
          {
            id: "onlyoffice_projects_for_android",
            label: "GetItOnGooglePlay",
            link: {
              href: "https://play.google.com/store/apps/details?id=com.onlyoffice.projects",
              isExternal: true,
            },
          },
        ],
      },
      {
        image: {
          url: productsSprite,
          positionX: "-21px",
          positionY: "-2264px",
        },
        heading: "OOProjectsForIOS",
        buttons: [
          {
            id: "onlyoffice_projects_for_ios",
            label: "DownloadOnTheAppStore",
            link: {
              href: "https://apps.apple.com/us/app/onlyoffice-projects/id1353395928",
              isExternal: true,
            },
          },
        ],
      },
      {
        image: {
          url: productsSprite,
          positionX: "-21px",
          positionY: "-2570px",
        },
        heading: "OOProjectsForHuaweiAppGallery",
        buttons: [
          {
            id: "onlyoffice_projects_for_huawei_app_gallery",
            label: "ExploreItOnAppGallery",
            link: {
              href: "https://appgallery.huawei.com/app/C104859547",
              isExternal: true,
            },
          },
        ],
      },
    ],
  },
];
