import { IStoryCard } from "@src/components/widgets/StoryCard";

import { getAssetUrl } from "@utils/getAssetUrl";
export const successStoriesItems: IStoryCard[] = [
  {
    imgUrl: getAssetUrl("/images/templates/developer-edition/testimonials/success-stories/easishare.png"),
    linkUrl: "BlogNewsLink1",
    heading: "BlogNews1",
  },
  {
    imgUrl: getAssetUrl("/images/templates/developer-edition/testimonials/success-stories/tgi.png"),
    linkUrl: "BlogNewsLink2",
    heading: "BlogNews2",
  },
  {
    imgUrl: getAssetUrl("/images/templates/developer-edition/testimonials/success-stories/cnki.jpg"),
    linkUrl: "BlogNewsLink3",
    heading: "BlogNews3",
  },
  {
    imgUrl: getAssetUrl("/images/templates/developer-edition/testimonials/success-stories/nuage-francais.jpg"),
    linkUrl: "BlogNewsLink4",
    heading: "BlogNews4",
  },
];
