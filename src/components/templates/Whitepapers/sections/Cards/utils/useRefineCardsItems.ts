import { useMemo } from "react";
import { useTranslation } from "next-i18next";
import { ICardDatasheetsItems, ICardWhitepapersItems } from "../../../Whitepapers.types";

const useRefineCardsItems = (
  cardWhitepapersItems: ICardWhitepapersItems[],
  cardDatasheetsItems: ICardDatasheetsItems[],
  sortValue: string,
  choosedModule: string,
  choosedDate: string
) => {
  const { t } = useTranslation("whitepapers");

  const refineWhitepaperItems = useMemo(() => {
    const filteredWhitepapers = cardWhitepapersItems.filter((item) => {
      return item.title.toLowerCase().includes(sortValue.toLowerCase());
    });

    const filteredSortedWhitepapers = filteredWhitepapers.sort((a, b) => {
      if (choosedDate === t("CardsSortNewestOldest")) {
        return b.date.localeCompare(a.date);
      }
      return a.date.localeCompare(b.date);
    });

    return filteredSortedWhitepapers;
  }, [t, sortValue, cardWhitepapersItems, choosedDate]);

  const refineDatasheetsItems = useMemo(() => {
    const filteredDatasheets = cardDatasheetsItems.filter((item) => {
      return item.title.toLowerCase().includes(sortValue.toLowerCase());
    })

    const filteredModuleDatasheets = filteredDatasheets.filter((item) => {
      if (choosedModule === t("CardsFiltersAll")) {
        return true;
      }
      return item.title.toLowerCase().includes(choosedModule.toLowerCase());
    })

    const filteredSortedDatasheets = filteredModuleDatasheets.sort((a, b) => {
      if (choosedDate === t("CardsSortNewestOldest")) {
        return b.date.localeCompare(a.date);
      }
      return a.date.localeCompare(b.date);
    });

    return filteredSortedDatasheets;
  }, [t, sortValue, cardDatasheetsItems, choosedModule, choosedDate]);

  return { refineWhitepaperItems, refineDatasheetsItems };
}

export { useRefineCardsItems };