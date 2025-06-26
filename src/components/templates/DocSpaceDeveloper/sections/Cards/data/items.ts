import { ICardsItems } from "../../../DocSpaceDeveloper.types";

const items: ICardsItems[] = [
  {
    title: "CardsItemTitle1",
    text: "CardsItemText1",
    iconUrl: {
      default: "/images/templates/docspace-developer/cards/icon-1.svg",
      active: "/images/templates/docspace-developer/cards/icon-1-active.svg",
    }
  },
  {
    title: "CardsItemTitle2",
    text: "CardsItemText2",
    iconUrl: {
      default: "/images/templates/docspace-developer/cards/icon-2.svg",
      active: "/images/templates/docspace-developer/cards/icon-2-active.svg",
    }
  },
  {
    title: "CardsItemTitle3",
    text: "CardsItemText3",
    iconUrl: {
      default: "/images/templates/docspace-developer/cards/icon-3.svg",
      active: "/images/templates/docspace-developer/cards/icon-3-active.svg",
    }
  }
]

export { items };