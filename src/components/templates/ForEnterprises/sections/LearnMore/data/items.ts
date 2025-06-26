import { IBlogCard } from "@src/components/widgets/BlogCard";

export const items: IBlogCard[] = [
  {
    imgUrl: "/images/templates/for-enterprises/learn-more/onlyoffice_use_case.jpg",
    heading: { label: "UseCase" },
    text: "HowStellfeldErnstGmbH",
    links: [
      {
        href: "BlogLink1",
        label: "ReadStory",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: "/images/templates/for-enterprises/learn-more/onlyoffice_product_introduction.jpg",
    heading: { label: "ProductIntroduction" },
    text: "MeetONLYOFFICEDocsSaaS",
    links: [
      {
        href: "BlogLink2",
        label: "LearnMore",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: "/images/templates/for-enterprises/learn-more/onlyoffice_certification.jpg",
    heading: { label: "Certification" },
    text: "ONLYOFFICEDocsEnterpriseCertified",
    links: [
      {
        href: "BlogLink3",
        label: "LearnMore",
        isExternal: true,
      },
    ],
  },
];
