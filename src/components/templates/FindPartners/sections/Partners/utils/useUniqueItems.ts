import { useEffect, useState } from "react";
import { IPartner } from "../../../FindPartners.types";

const useUniqueItems = (allItems: IPartner[], allBtnText: string, allOptionText: string) => {
  const [uniqueKeys, setUniqueKeys] = useState<string[]>([]);
  const [uniqueCountries, setUniqueCountries] = useState<string[]>([]);

  useEffect(() => {
    const uniqueKey = new Set(allItems
      .map((item) => item.name[0]
      .toUpperCase())
      .sort((a, b) => a.localeCompare(b))
    );
    setUniqueKeys([ allBtnText, ...uniqueKey]);

    const uniqueCountry = new Set(allItems
      .map((item) => item.country)
      .sort((a, b) => a.localeCompare(b))
    );
    setUniqueCountries([allOptionText, ...uniqueCountry]);
  }, [allItems, allBtnText, allOptionText]);

  return {uniqueKeys, uniqueCountries};
}

export { useUniqueItems }