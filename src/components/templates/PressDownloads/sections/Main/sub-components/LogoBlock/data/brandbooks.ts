import { getAssetUrl } from "@utils/getAssetUrl";
interface IBrandbook {
  src: string;
}

export const brandbooks: IBrandbook[] = [
  {
    src: getAssetUrl("/images/templates/press-downloads/logo/brandbook/screenshots/brandbook-1.png"),
  },
  {
    src: getAssetUrl("/images/templates/press-downloads/logo/brandbook/screenshots/brandbook-2.png"),
  },
  {
    src: getAssetUrl("/images/templates/press-downloads/logo/brandbook/screenshots/brandbook-3.png"),
  },
];
