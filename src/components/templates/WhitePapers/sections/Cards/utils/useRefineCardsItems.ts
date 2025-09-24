import { useMemo } from "react";
import { ICardItem } from "../../../WhitePapers.types";
import { useTranslation } from "next-i18next";

const useRefineCardsItems = (
  allCards: ICardItem[],
  sortValue: string,
  choosedModule: string,
  choosedDate: string,
  choosedFilter: string
) => {
  const { t } = useTranslation("whitepapers");

  const refinedItems = useMemo(() => {
    let filtered = allCards;

    if (choosedFilter && choosedFilter !== "CardsFiltersAll") {
      filtered = filtered.filter(item => item.type === choosedFilter);
    }
    
    if (sortValue) {
      filtered = filtered.filter(item =>
        t(item.title).toLowerCase().includes(sortValue.toLowerCase())
      );
    }

    if (
      choosedModule && choosedModule !== "CardsFiltersAll" && choosedFilter === "Datasheets"
    ) {
      filtered = filtered.filter(item =>
        item.title?.toLowerCase().includes(choosedModule.toLowerCase()) ||
        item.product?.toLowerCase().includes(choosedModule.toLowerCase())
      );
    }

    filtered.sort((a, b) =>
      choosedDate === "CardsSortNewestOldest"
        ? b.date.localeCompare(a.date)
        : a.date.localeCompare(b.date)
    );

    return filtered;
  }, [allCards, t, sortValue, choosedModule, choosedDate, choosedFilter]);

  return { refinedItems };
};

export { useRefineCardsItems };