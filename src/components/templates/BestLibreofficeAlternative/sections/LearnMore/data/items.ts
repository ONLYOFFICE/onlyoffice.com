import { IBlogCard } from "@src/components/widgets/BlogCard";

import { getAssetUrl } from "@utils/getAssetUrl";
export const items: IBlogCard[] = [
  {
    imgUrl: getAssetUrl("/images/templates/best-libreoffice-alternative/learn-more/onlyo_vs_libreo_vs_open.png.png"),
    heading: {
      label: "OODocsVsLibreOfficeVsOpenOffice",
      href: "OODocsVsLibreOfficeVsOpenOfficeLink",
      isExternal: true,
    },
    text: "OODocsVsLibreOfficeVsOpenOfficeText",
  },
  {
    imgUrl: getAssetUrl("/images/templates/best-libreoffice-alternative/learn-more/oo_vs_libre.png"),
    heading: {
      label: "OODocsVsLibreOffice",
      href: "OODocsVsLibreOfficeLink",
    },
    text: "OODocsVsLibreOfficeText",
  },
];
