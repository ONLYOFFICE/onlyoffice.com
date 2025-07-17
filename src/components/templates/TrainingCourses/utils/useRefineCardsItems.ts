import { useMemo } from "react";
import { useTranslation } from "next-i18next";
import { ICardsDataItem } from "../TrainingCourses.types";

const useRefineCardsItems = (
  modulesItems: ICardsDataItem[],
  purposeItems: ICardsDataItem[],
  filterValue: string,
  choosedModule: string,
  choosedDate: string
) => {
  const { t } = useTranslation("training-courses");

  const refineModulesItems = useMemo(() => {
    const filteredModules = modulesItems.filter((item) => {
      return t(item.title).toLowerCase().includes(filterValue.toLowerCase());
    });

    const filteredChoosedModule = filteredModules.filter((item) => {
      if (choosedModule === "All") {
        return true;
      }
      const lowerCased =
        Array.isArray(item.module) ?
        item.module.map((str) => str.toLowerCase()) :
        item.module.toLowerCase();

      return lowerCased.includes(choosedModule.toLowerCase());
    })

    const filteredSortedModules = filteredChoosedModule.sort((a, b) => {
      if (choosedDate === "NewestOldest") {
        return b.date.localeCompare(a.date);
      }
      return a.date.localeCompare(b.date);
    });

    return filteredSortedModules;
  }, [t, filterValue, choosedModule, modulesItems, choosedDate]);

  const refinePurposeItems = useMemo(() => {
    const filteredPurpose = purposeItems.filter((item) => {
      return t(item.title).toLowerCase().includes(filterValue.toLowerCase());
    })

    const filteredSortedPurpose = filteredPurpose.sort((a, b) => {
      if (choosedDate === "NewestOldest") {
        return b.date.localeCompare(a.date);
      }
      return a.date.localeCompare(b.date);
    });

    return filteredSortedPurpose;
  }, [t, filterValue, purposeItems, choosedDate]);

  return { refineModulesItems, refinePurposeItems };
}

export { useRefineCardsItems };