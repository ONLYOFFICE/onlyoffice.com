import { IBlogCard } from "@src/components/widgets/BlogCard";

import { getAssetUrl } from "@utils/getAssetUrl";
export const items: IBlogCard[] = [
  {
    imgUrl: getAssetUrl("/images/templates/best-adobe-alternative/learn-more/blog-1.jpg"),
    heading: {
      label: "HowToEditaPDF",
      href: "HowToEditaPDFLink",
    },
    text: "HowToEditaPDFText",
  },
  {
    imgUrl: getAssetUrl("/images/templates/best-adobe-alternative/learn-more/blog-2.jpg"),
    heading: {
      label: "OOConnector",
      href: "OOConnectorLink",
    },
    text: "OOConnectorText",
  },
];
