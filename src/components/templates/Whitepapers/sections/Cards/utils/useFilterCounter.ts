import { TFunction } from "i18next";
import { useMemo } from "react";

const useFilterCounter = (choosedFilter: string, choosedModule: string, choosedDate: string, t: TFunction) => {

  const filterCounter = useMemo(() => {
    const defaultFilter = t("CardsFiltersAll");
    const defaultDate = t("CardsSortNewestOldest");
    let count = 0;
    if (choosedFilter !== defaultFilter) count++;
    if (choosedModule !== defaultFilter) count++;
    if (choosedDate !== defaultDate) count++;
    return count;
  }, [choosedFilter, choosedModule, choosedDate, t]);

  return { filterCounter };
}

export { useFilterCounter };
