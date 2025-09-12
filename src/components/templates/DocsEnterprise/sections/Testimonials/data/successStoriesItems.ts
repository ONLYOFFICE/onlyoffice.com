import { IStoryCard } from "@src/components/widgets/StoryCard";

import { getAssetUrl } from "@utils/getAssetUrl";
export const successStoriesItems: IStoryCard[] = [
  {
    imgUrl: getAssetUrl("/images/templates/docs-enterprise/testimonials/owncloud-integration.jpg"),
    linkUrl: "BlogNews1Link",
    heading: "BlogNews1",
  },
  {
    imgUrl: getAssetUrl("/images/templates/docs-enterprise/testimonials/college-de-taravao.png"),
    linkUrl: "BlogNews2Link",
    heading: "BlogNews2",
  },
  {
    imgUrl: getAssetUrl("/images/templates/docs-enterprise/testimonials/pflasterstube.png"),
    linkUrl: "BlogNews3Link",
    heading: "BlogNews3",
  },
  {
    imgUrl: getAssetUrl("/images/templates/docs-enterprise/testimonials/abensberg.png"),
    linkUrl: "BlogNews4Link",
    heading: "BlogNews4",
  },
];
