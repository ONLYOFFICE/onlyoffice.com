import { IStarsRatingLogo } from "@src/components/widgets/StarsRatingLogo";

import { getAssetUrl } from "@utils/getAssetUrl";
export const starsRatingItems: IStarsRatingLogo[] = [
  {
    url: "https://sourceforge.net/projects/teamlab/",
    image: {
      url: getAssetUrl("/images/templates/main/rating/stars-rating/sourceforge.svg"),
      alt: "SourceForge",
      width: 150,
      height: 22,
    },
    value: 4.5,
  },
  {
    url: "https://linux.softpedia.com/get/Office/Office-Suites/ONLYOFFICE-Desktop-Editors-103956.shtml",
    image: {
      url: getAssetUrl("/images/templates/main/rating/stars-rating/softpedia.svg"),
      alt: "Softpedia",
      width: 150,
      height: 22,
    },
    value: 5,
  },
  {
    url: "https://www.getapp.com/operations-management-software/a/onlyoffice/",
    image: {
      url: getAssetUrl("/images/templates/main/rating/stars-rating/getapp.svg"),
      alt: "GetApp",
      width: 150,
      height: 22,
    },
    value: 4.5,
  },
  {
    url: "https://www.capterra.com/p/141243/ONLYOFFICE/",
    image: {
      url: getAssetUrl("/images/templates/main/rating/stars-rating/capterra.svg"),
      alt: "Capterra",
      width: 150,
      height: 23,
    },
    value: 4.5,
  },
  {
    url: "https://www.softwareadvice.com/project-management/onlyoffice-profile/",
    image: {
      url: getAssetUrl("/images/templates/main/rating/stars-rating/software-advice.svg"),
      alt: "Software Advice",
      width: 150,
      height: 22,
    },
    value: 4.5,
  },
  {
    url: "https://www.pcmag.com/reviews/ascensio-system-onlyoffice",
    image: {
      url: getAssetUrl("/images/templates/main/rating/stars-rating/editors-choice.png"),
      alt: "Editors Choice",
      width: 150,
      height: 33,
    },
    value: 4.0,
  },
];
