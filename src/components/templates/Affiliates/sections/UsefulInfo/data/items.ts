import { IInfoCard } from "../sub-components/InfoCard";

export const items: IInfoCard[] = [
  {
    id: "product-guide",
    heading: "ProductGuide",
    text: {
      label: "ProductGuideDesc",
    },
    link: {
      href: "/images/templates/affiliates/useful-info/onlyoffice_secure_cloud_space.pdf",
      label: "DownloadNow",
      isDownload: true,
    },
  },
  {
    id: "marketing-kit",
    heading: "MarketingKit",
    text: {
      label: "MarketingKitDesc",
    },
    link: {
      href: "/press-downloads?from=affiliatesdf",
      label: "DownloadNow",
    },
  },
  {
    id: "affiliate-policy",
    heading: "AffiliatePolicy",
    text: {
      label: "AffiliatePolicyDesc",
    },
    link: {
      href: "https://www.rewardful.com/terms",
      label: "ReadNow",
      isExternal: true,
    },
  },
  {
    id: "contact-us",
    heading: "ContactUs",
    text: {
      label: "ContactUsDesc",
      link: "mailto:affiliates@onlyoffice.com",
    },
  },
  {
    id: "help-from-oomarketing",
    heading: "HelpFromOOMarketing",
    text: {
      label: "HelpFromOOMarketingDesc",
      link: "mailto:marketing@onlyoffice.com",
    },
  },
];
