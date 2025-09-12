import { IBlogCard } from "@src/components/widgets/BlogCard";

import { getAssetUrl } from "@utils/getAssetUrl";
export const items: IBlogCard[] = [
  {
    imgUrl: getAssetUrl("/images/templates/office-for-nextcloud/learn-more/blue-dragon.png"),
    heading: { label: "LearnMoreBlueDragon" },
    links: [
      {
        href: "LearnMoreBlueDragonLink",
        label: "ReadTheFullStory",
      },
    ],
  },
  {
    imgUrl: getAssetUrl("/images/templates/office-for-nextcloud/learn-more/stiftung.png"),
    heading: { label: "LearnMoreStiftung" },
    links: [
      {
        href: "LearnMoreStiftungLink",
        label: "ReadTheFullStory",
      },
    ],
  },
  {
    imgUrl:
      "/images/templates/office-for-nextcloud/learn-more/equal-rights.png",
    heading: { label: "LearnMoreEqualRights" },
    links: [
      {
        href: "LearnMoreEqualRightsLink",
        label: "ReadTheFullStory",
      },
    ],
  },
  {
    imgUrl: getAssetUrl("/images/templates/office-for-nextcloud/learn-more/maritime.png"),
    heading: { label: "LearnMoreMaritime" },
    links: [
      {
        href: "LearnMoreMaritimeLink",
        label: "ReadTheFullStory",
      },
    ],
  },
  {
    imgUrl: getAssetUrl("/images/templates/office-for-nextcloud/learn-more/geyma.png"),
    heading: { label: "LearnMoreGeyma" },
    links: [
      {
        href: "LearnMoreGeymaLink",
        label: "ReadTheFullStory",
      },
    ],
  },
  {
    imgUrl: getAssetUrl("/images/templates/office-for-nextcloud/learn-more/stellfeld.png"),
    heading: { label: "LearnMoreStellfeld" },
    links: [
      {
        href: "LearnMoreStellfeldLink",
        label: "ReadTheFullStory",
      },
    ],
  },
  {
    imgUrl: getAssetUrl("/images/templates/office-for-nextcloud/learn-more/ibe.png"),
    heading: { label: "LearnMoreIBE" },
    links: [
      {
        href: "LearnMoreIBELink",
        label: "ReadTheFullStory",
      },
    ],
  },
  {
    imgUrl:
      "/images/templates/office-for-nextcloud/learn-more/love-foundation.png",
    heading: { label: "LearnMoreLoveFoundation" },
    links: [
      {
        href: "LearnMoreLoveFoundationLink",
        label: "ReadTheFullStory",
      },
    ],
  },
];
