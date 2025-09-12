import { getAssetUrl } from "@utils/getAssetUrl";
const iconsSprite = getAssetUrl("/images/templates/demo-order/hero/icons.svg");

interface IIconItems {
  label: string;
  icon: {
    url: string;
    positionX: string;
  }
}

export const iconsItems: IIconItems[] = [
  {
    label: "HeroItem1",
    icon: {
      url: iconsSprite,
      positionX: "0px",
    },
  },
  {
    label: "HeroItem2",
    icon: {
      url: iconsSprite,
      positionX: "-32px",
    },
  },
  {
    label: "HeroItem3",
    icon: {
      url: iconsSprite,
      positionX: "-64px",
    },
  },
  {
    label: "HeroItem4",
    icon: {
      url: iconsSprite,
      positionX: "-96px",
    },
  },
];

interface ICustomers {
  positionX: string;
}

export const customers: ICustomers[] = [
  {
    positionX: "0",
  },
  {
    positionX: "-149px",
  },
  {
    positionX: "-298px",
  },
  {
    positionX: "-447px",
  },
  {
    positionX: "-596px",
  },
  {
    positionX: "-745px",
  }
];
