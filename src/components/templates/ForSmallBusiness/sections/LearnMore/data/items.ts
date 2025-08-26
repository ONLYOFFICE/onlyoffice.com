import { IBlogCard } from "@src/components/widgets/BlogCard";

export const items: IBlogCard[] = [
  {
    imgUrl:
      "/images/templates/for-small-business/learn-more/onlyoffice_moderatorenschule.jpg",
    heading: { label: "UseCase" },
    text: "HowONLYOFFICEWorkspace",
    links: [
      {
        href: "BlogLink1",
        label: "ReadStory",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl:
      "/images/templates/for-small-business/learn-more/onlyoffice_guide.jpg",
    heading: { label: "Guide" },
    text: "HowToMigrate",
    links: [
      {
        href: "BlogLink2",
        label: "LearnMoreBlog",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl:
      "/images/templates/for-small-business/learn-more/onlyoffice_pt_todico_use_case.jpg",
    heading: { label: "UseCase" },
    text: "HowPTTODICO",
    links: [
      {
        href: "BlogLink3",
        label: "LearnMoreBlog",
        isExternal: true,
      },
    ],
  },
];
