import { IHomeUseFeatureImageItem } from "@src/components/modules/home-use/HomeUseFeatureImageItem.types";

import { getAssetUrl } from "@utils/getAssetUrl";
export const items: IHomeUseFeatureImageItem[] = [
  {
    heading: "SafePersonalSpace",
    text: "ReplacementForGoogleDocsSheetsSlides",
    image: {
      url: getAssetUrl("/images/templates/home-use/features/huf_04.svg"),
      url2x: getAssetUrl("/images/templates/home-use/features/huf_04.svg"),
      height: 346,
      width: 412,
    },
    logos: [
      {
        url: getAssetUrl("/images/templates/home-use/features/google_docs.svg"),
        width: 125,
        height: 31,
      },
      {
        url: getAssetUrl("/images/templates/home-use/features/office.svg"),
        width: 88,
        height: 31,
      },
      {
        url: getAssetUrl("/images/templates/home-use/features/zoho_docs.svg"),
        width: 87,
        height: 31,
      },
    ],
    items: [
      { label: "SafeStorage" },
      { label: "WorkingWithAnyContent" },
      { label: "ProfessionalEditing" },
      { label: "PerfectForStudentsBloggersFreelancers" },
      { label: "FreePlanForIndividuals" },
      { label: "InvitingUsersViaExternalLinks" },
    ],
    links: [{ href: "/docspace", label: "LearnMore" }],
    buttons: [
      {
        href: "/docspace-registration",
        label: "GetStarted",
      },
    ],
    contentWidth: 544,
    position: {
      desktop: "left",
      mobile: "top",
    },
  },
  {
    heading: "DesktopEditorsForWorkStudyCreativeProjects",
    text: "ReplacementForMicrosoftOfficeWPSCalligraOffice",
    image: {
      url: getAssetUrl("/images/templates/home-use/features/huf_01.svg"),
      url2x: getAssetUrl("/images/templates/home-use/features/huf_01.svg"),
      height: 390,
      width: 340,
    },
    logos: [
      {
        url: getAssetUrl("/images/templates/home-use/features/office.svg"),
        width: 88,
        height: 31,
      },
      {
        url: getAssetUrl("/images/templates/home-use/features/wps.svg"),
        width: 111,
        height: 31,
      },
      {
        url: getAssetUrl("/images/templates/home-use/features/aliata.svg"),
        width: 67,
        height: 41,
      },
    ],
    items: [
      { label: "OneAppForDocumentsSpreadsheetsPresentationsFormsPdfs" },
      { label: "MaximumCompatibilityWithDocxXlsxPptx" },
      { label: "WorksOnWindowsLinuxAndMacOS" },
      { label: "FreeAndOpenSource" },
    ],
    links: [{ href: "/desktop?from=home-use", label: "LearnMore" }],
    buttons: [
      {
        href: "/download-desktop?from=home-use",
        label: "DownloadNow",
      },
    ],
    contentWidth: 544,
    position: {
      desktop: "right",
      mobile: "top",
    },
  },
  {
    heading: "SelfHostedEditorsToWorkOnDocsPrivately",
    text: "ReplacementForGoogleDocsSheetsSlidesMSOfficeOnlineZohoDocs",
    image: {
      url: getAssetUrl("/images/templates/home-use/features/huf_02.svg"),
      url2x: getAssetUrl("/images/templates/home-use/features/huf_02.svg"),
      height: 384,
      width: 340,
    },
    logos: [
      {
        url: getAssetUrl("/images/templates/home-use/features/google_docs.svg"),
        width: 125,
        height: 31,
      },
      {
        url: getAssetUrl("/images/templates/home-use/features/office.svg"),
        width: 88,
        height: 31,
      },
      {
        url: getAssetUrl("/images/templates/home-use/features/zoho_docs.svg"),
        width: 87,
        height: 31,
      },
    ],
    items: [
      { label: "OnlineDocumentEditorsWithCollaborationTools" },
      { label: "HostedLocallySoYouWonTSharePersonalDataWithAnyone" },
      {
        label:
          "EasyIntegrationWithOwnCloudNextcloudSeafileAndOtherPopularPlatforms",
      },
      { label: "LifetimeLicenseFor10Users1YearOfUpdatesIncludedInPriceOf149" },
    ],
    links: [{ href: "/all-connectors", label: "SeeAllIntegrations" }],
    buttons: [
      {
        href: "/download#docs-enterprise",
        label: "GetItNow",
      },
    ],
    contentWidth: 544,
  },
  {
    heading: "SelfHostedProductivityAppsForFamilyProjectsAndCreativeWork",
    text: "ReplacementForGSuiteOffice365",
    image: {
      url: getAssetUrl("/images/templates/home-use/features/huf_03.svg"),
      url2x: getAssetUrl("/images/templates/home-use/features/huf_03.svg"),
      height: 419,
      width: 359,
    },
    logos: [
      {
        url: getAssetUrl("/images/templates/home-use/features/gsuite.svg"),
        width: 81,
        height: 21,
      },
      {
        url: getAssetUrl("/images/templates/home-use/features/office365.svg"),
        width: 110,
        height: 31,
      },
    ],
    items: [
      { label: "OnlineDocumentEditorsForDocsSheetsSlidesFormsPdfs" },
      { label: "ToolsToManageYourDocumentsAndProjects" },
      {
        label:
          "SharedCalendarsWithToDoListsForYourFamilyMailServerToConnectYourOwnDomain",
      },
      { label: "FreeAndOpenSource" },
    ],
    links: [{ href: "/workspace", label: "LearnMore" }],
    buttons: [
      {
        href: "/download-workspace",
        label: "Download",
      },
    ],
    contentWidth: 544,
    position: {
      desktop: "right",
      mobile: "top",
    },
  },
  {
    heading: "FreeAppsToWorkWithDocsOnDevices",
    text: "ReplacementForMobileMSOfficeGoogleDocsQuickOfficePages",
    image: {
      url: getAssetUrl("/images/templates/home-use/features/huf_05.svg"),
      url2x: getAssetUrl("/images/templates/home-use/features/huf_05.svg"),
      height: 386,
      width: 357,
    },
    logos: [
      {
        url: getAssetUrl("/images/templates/home-use/features/office.svg"),
        width: 88,
        height: 31,
      },
      {
        url: getAssetUrl("/images/templates/home-use/features/google_docs.svg"),
        width: 125,
        height: 31,
      },
      {
        url: getAssetUrl("/images/templates/home-use/features/quickoffice.svg"),
        width: 114,
        height: 31,
      },
      {
        url: getAssetUrl("/images/templates/home-use/features/pages.svg"),
        width: 72,
        height: 31,
      },
    ],
    items: [
      { label: "OneAppToWorkWithDocsSheetsSlidesAndFormsOnDevices" },
      {
        label:
          "AccessFilesStoredOnYourHomeServerInOnlyofficeCloudNextcloudOwncloudSeafileLiferayAndKdrive",
      },
      { label: "EditAndCollaborateInRealTime" },
      { label: "TotallyFree" },
    ],
    downloadButtons: [
      {
        href: "https://apps.apple.com/us/app/onlyoffice-documents/id944896972",
        title: "GetStarted",
        platform: "app-store",
        variant: "secondary",
      },
      {
        href: "https://play.google.com/store/apps/details?id=com.onlyoffice.documents",
        title: "GetStarted",
        platform: "google-play",
        variant: "secondary",
      },
    ],
    contentWidth: 544,
  },
];
