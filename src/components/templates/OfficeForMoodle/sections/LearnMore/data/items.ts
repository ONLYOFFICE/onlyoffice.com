import { IBlogCard } from "@src/components/widgets/BlogCard";

import { getAssetUrl } from "@utils/getAssetUrl";
export const items: IBlogCard[] = [
  {
    imgUrl: getAssetUrl("/images/templates/office-for-moodle/learn-more/story-1.jpg"),
    heading: { label: "HowEnsuresDigitalEquality" },
    links: [
      {
        href: "HowEnsuresDigitalEqualityLink",
        label: "ReadTheFullStory",
      },
      {
        href: "https://www.youtube.com/watch?v=vNbFcqhJ7wI",
        label: "WatchAVideoVersion",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: getAssetUrl("/images/templates/office-for-moodle/learn-more/story-2.png"),
    heading: { label: "WhyWeChoseMoodle" },
    links: [
      {
        href: "WhyWeChoseMoodleLink",
        label: "ReadTheFullStory",
      },
    ],
  },
  {
    imgUrl: getAssetUrl("/images/templates/office-for-moodle/learn-more/story-3.png"),
    heading: { label: "NewUpdatesOfOOPlugins" },
    links: [
      {
        href: "NewUpdatesOfOOPluginsLink",
        label: "ReadTheFullStory",
      },
    ],
  },
];
