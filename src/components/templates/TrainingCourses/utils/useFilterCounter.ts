import { useMemo } from "react";
import { TFilterKey, TSortDateKey } from "../TrainingCourses.types";

const useFilterCounter = (choosedFilter: TFilterKey, choosedModule: TFilterKey, choosedDate: TSortDateKey) => {

  const filterCounter = useMemo(() => {
    const defaultFilter = "CardsFiltersAll";
    const defaultDate = "CardsSortNewestOldest";
    let count = 0;
    if (choosedFilter !== defaultFilter) count++;
    if (choosedModule !== defaultFilter) count++;
    if (choosedDate !== defaultDate) count++;
    return count;
  }, [choosedFilter, choosedModule, choosedDate]);

  return { filterCounter };
}

export { useFilterCounter };
