import { IBlogCard } from "@src/components/widgets/BlogCard";

export const items: IBlogCard[] = [
  {
    imgUrl: "/images/templates/collaboration-rooms/learn-more/customers.png",
    heading: "CustomerTestimonial",
    text: "HowKinderhausBerlinSharesAndCollaborates",
    links: [
      {
        href: "CustomerTestimonialLink",
        label: "ReadStory",
      },
    ],
  },
  {
    imgUrl: "/images/templates/public-rooms/learn-more/docspace.png",
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
    imgUrl: "/images/templates/collaboration-rooms/learn-more/helpcenter.png",
    heading: "HelpCenter",
    text: "ExploreTheToolsetAndCollaborativeFeatures",
    links: [
      {
        href: "HelpCenterLink",
        label: "LearnMore",
        isExternal: true,
      },
    ],
  },
];
