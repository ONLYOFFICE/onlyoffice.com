import { useEffect, useState } from "react";
import { ICardDatasheetsItems, ICardWhitepapersItems } from "../../../Whitepapers.types";

const useFilterInputICardsItems = (
  cardWhitepapersItems: ICardWhitepapersItems[],
  cardDatasheetsItems: ICardDatasheetsItems[],
  sortValue: string
) => {
  const [inputFilterWhitepaperItems, setInputFilterWhitepaperItems] = useState(cardWhitepapersItems);
  const [inputFilterDatasheetsItems, setInputFilterDatasheetsItems] = useState(cardDatasheetsItems);

  useEffect(() => {
    const filteredWhitepapers = cardWhitepapersItems.filter((item) => {
      return item.title.toLowerCase().includes(sortValue.toLowerCase());
    });
    setInputFilterWhitepaperItems(filteredWhitepapers);

    const filteredDatasheets = cardDatasheetsItems.filter((item) => {
      return item.title.toLowerCase().includes(sortValue.toLowerCase());
    })
    setInputFilterDatasheetsItems(filteredDatasheets);
  }, [sortValue, cardWhitepapersItems, cardDatasheetsItems]);

  return { inputFilterWhitepaperItems, inputFilterDatasheetsItems };
}

export { useFilterInputICardsItems };