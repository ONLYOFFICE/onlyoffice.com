import { IMedalAward } from "../sub-components/MedalAward";

import { getAssetUrl } from "@utils/getAssetUrl";
export const awardItems: IMedalAward[] = [
  {
    linkUrl: "https://slashdot.org/software/p/ONLYOFFICE/",
    imgUrl: getAssetUrl("/images/templates/main/rating/awards/slashdot-2025.svg"),
    heading: "SlashdotLeaderSummer2025",
  },
  {
    linkUrl: "https://www.capterra.com/document-management-software/#top-20",
    imgUrl: getAssetUrl("/images/templates/main/rating/awards/capterra-2024.svg"),
    heading: "Top20DocumentManagementSoftware",
  },
  {
    linkUrl:
      "https://www.g2.com/products/onlyoffice/reviews?utm_source=rewards-badge",
    imgUrl: getAssetUrl("/images/templates/main/rating/awards/high-performer-2023.svg"),
    heading: "OfficeSuitesHighPerformerFall2023",
  },
  {
    linkUrl:
      "https://www.cloudcomputing-insider.de/it-awards-2024-gewinner-a-0eff7f083cda3aea4c1b8c23ef107b60/",
    imgUrl: getAssetUrl("/images/templates/main/rating/awards/cloudaward-2024.svg"),
    heading: "GOLDInTheCloudContentManagement2024",
  },
  {
    linkUrl: "https://sourceforge.net/software/product/ONLYOFFICE/",
    imgUrl: getAssetUrl("/images/templates/main/rating/awards/office-suites-2023.svg"),
    heading: "TopRatedOfficeSuites",
  },
  {
    linkUrl: "https://omr.com/de/reviews/product/onlyoffice",
    imgUrl: getAssetUrl("/images/templates/main/rating/awards/leader-sourceforge-2025.svg"),
    heading: "SourceForgeLeaderSummer2025",
  },
];
