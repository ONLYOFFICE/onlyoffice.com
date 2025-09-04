import { useEffect, useState } from "react";
import { discoverFormatYear } from "./discoverFormatYear";
import { IAboutAccumulate, IAbouts } from "../../../About.types";

const useAccumulateYears = (abouts: IAbouts["abouts"]) => {
  const [accumulateItems, setAccumulateItems] = useState<IAboutAccumulate[]>([]);

  useEffect(() => {
    const accumulateYears = abouts.data.reduce((acc, item) => {
      const year = discoverFormatYear(item.date);

      const found = acc.find((x) => x.year === year);
      if (!found) {
        acc.push({ year: year, items: [item] });
      } else {
        found.items.push(item);
      }

      return acc;
    }, [] as IAboutAccumulate[]);
    setAccumulateItems(accumulateYears);
  }, [abouts]);

  return { accumulateItems };
};

export { useAccumulateYears };
