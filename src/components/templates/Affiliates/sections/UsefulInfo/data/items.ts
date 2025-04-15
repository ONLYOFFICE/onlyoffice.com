import { IBlogCard } from "@src/components/widgets/BlogCard";

export interface ICustomBlogCard extends Omit<IBlogCard, "imgUrl" | "text"> {
  text: { label: React.ReactNode; textLink?: string };
  links?: {
    href: string;
    label: string;
    isExternal?: boolean;
    isDownload?: boolean;
  }[];
}

interface ICard {
  topCards: ICustomBlogCard[];
  bottomCards: ICustomBlogCard[];
}

export const items: ICard = {
  topCards: [
    {
      id: "product-guide",
      heading: { label: "ProductGuide" },
      text: { label: "ProductGuideDesc" },
      links: [
        {
          href: "/images/templates/affiliates/useful-info/onlyoffice_secure_cloud_space.pdf",
          label: "DownloadNow",
          isDownload: true,
        },
      ],
    },
    {
      id: "marketing-kit",
      heading: { label: "MarketingKit" },
      text: { label: "MarketingKitDesc" },
      links: [
        {
          href: "/press-downloads?from=affiliatesdf",
          label: "DownloadNow",
        },
      ],
    },
    {
      id: "affiliate-policy",
      heading: { label: "AffiliatePolicy" },
      text: { label: "AffiliatePolicyDesc" },
      links: [
        {
          href: "https://www.rewardful.com/terms",
          label: "ReadNow",
          isExternal: true,
        },
      ],
    },
  ],
  bottomCards: [
    {
      id: "contact-us",
      heading: { label: "ContactUs" },
      text: {
        label: "ContactUsDesc",
        textLink: "mailto:affiliates@onlyoffice.com",
      },
    },
    {
      id: "help-from-oomarketing",
      heading: { label: "HelpFromOOMarketing" },
      text: {
        label: "HelpFromOOMarketingDesc",
        textLink: "mailto:marketing@onlyoffice.com",
      },
    },
  ],
};
