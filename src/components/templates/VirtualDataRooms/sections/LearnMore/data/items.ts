import { IBlogCard } from "@src/components/widgets/BlogCard";

export const items: IBlogCard[] = [
  {
    imgUrl: "/images/templates/virtual-data-rooms/learn-more/helpcenter.png",
    heading: "HelpCenter",
    text: "HelpCenterDesc",
    links: [
      {
        href: "HelpCenterLink",
        label: "LearnMore",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: "/images/templates/virtual-data-rooms/learn-more/docspace.png",
    heading: "YouTube",
    text: "MasterONLYOFFICEDocSpace",
    links: [
      {
        href: "MasterONLYOFFICEDocSpaceLink",
        label: "WatchNow",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: "/images/templates/virtual-data-rooms/learn-more/customers.png",
    heading: "CustomerTestimonial",
    text: "HowKinderhausBerlinSharesAndCollaborates",
    links: [
      {
        href: "CustomerTestimonialLink",
        label: "ReadStory",
      },
    ],
  },
];
