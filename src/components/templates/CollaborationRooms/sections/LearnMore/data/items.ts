import { IBlogCard } from "@src/components/widgets/BlogCard";

import { getAssetUrl } from "@utils/getAssetUrl";
export const items: IBlogCard[] = [
  {
    imgUrl: getAssetUrl("/images/templates/collaboration-rooms/learn-more/customers.png"),
    heading: { label: "CustomerTestimonial" },
    text: "HowKinderhausBerlinSharesAndCollaborates",
    links: [
      {
        href: "CustomerTestimonialLink",
        label: "ReadStory",
      },
    ],
  },
  {
    imgUrl: getAssetUrl("/images/templates/collaboration-rooms/learn-more/docspace.png"),
    heading: { label: "YouTube" },
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
    imgUrl: getAssetUrl("/images/templates/collaboration-rooms/learn-more/helpcenter.png"),
    heading: { label: "HelpCenter" },
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
