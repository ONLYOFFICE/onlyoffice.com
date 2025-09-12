import { useMemo } from "react";
import { ICardDatasheetsItems, ICardWhitePapersItems } from "../../../WhitePapers.types";
import { useTranslation } from "next-i18next";

const useRefineCardsItems = (
  cardWhitePapersItems: ICardWhitePapersItems[],
  cardDatasheetsItems: ICardDatasheetsItems[],
  sortValue: string,
  choosedModule: string,
  choosedDate: string
) => {
  const { t } = useTranslation("whitepapers");

  const refineWhitepaperItems = useMemo(() => {
    const filteredWhitePapers = cardWhitePapersItems.filter((item) => {
      return t(item.title).toLowerCase().includes(sortValue.toLowerCase());
    });

    const filteredSortedWhitePapers = filteredWhitePapers.sort((a, b) => {
      if (choosedDate === "CardsSortNewestOldest") {
        return b.date.localeCompare(a.date);
      }
      return a.date.localeCompare(b.date);
    });

    return filteredSortedWhitePapers;
  }, [t, sortValue, cardWhitePapersItems, choosedDate]);

  const refineDatasheetsItems = useMemo(() => {
    const filteredDatasheets = cardDatasheetsItems.filter((item) => {
      return t(item.title).toLowerCase().includes(sortValue.toLowerCase());
    })

    const filteredModuleDatasheets = filteredDatasheets.filter((item) => {
      if (choosedModule === "CardsFiltersAll") {
        return true;
      }
      return item.title.toLowerCase().includes(choosedModule.toLowerCase());
    })

    const filteredSortedDatasheets = filteredModuleDatasheets.sort((a, b) => {
      if (choosedDate === "CardsSortNewestOldest") {
        return b.date.localeCompare(a.date);
      }
      return a.date.localeCompare(b.date);
    });

    return filteredSortedDatasheets;
  }, [t, sortValue, cardDatasheetsItems, choosedModule, choosedDate]);

  return { refineWhitepaperItems, refineDatasheetsItems };
}

export { useRefineCardsItems };