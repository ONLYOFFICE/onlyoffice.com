import { IBlogCard } from "@src/components/widgets/BlogCard";

export const items: IBlogCard[] = [
  {
    imgUrl: "/images/templates/office-for-moodle/learn-more/story-1.jpg",
    heading: "CustomerTestimonial",
    text: "HowKinderhausBerlinSharesAndCollaborates",
    links: [
      {
        href: "CustomerTestimonialLink",
        label: "ReadStory",
        isInternal: true,
      },
    ],
  },
  {
    imgUrl: "/images/templates/office-for-moodle/learn-more/story-2.png",
    heading: "YouTube",
    text: "MasterONLYOFFICEDocSpace",
    links: [
      {
        href: "MasterONLYOFFICEDocSpaceLink",
        label: "WatchNow",
      },
    ],
  },
  {
    imgUrl: "/images/templates/office-for-moodle/learn-more/story-3.png",
    heading: "HelpCenter",
    text: "ExploreTheToolsetAndCollaborativeFeatures",
    links: [
      {
        href: "HelpCenterLink",
        label: "LearnMore",
      },
    ],
  },
];
