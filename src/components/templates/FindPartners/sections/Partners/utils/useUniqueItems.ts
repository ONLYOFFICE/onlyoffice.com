import { useEffect, useState } from "react";
import { IPartner } from "../../../FindPartners.types";

const useUniqueItems = (allItems: IPartner[], allBtnText: string, allOptionText: string) => {
  const [uniqueKeys, setUniqueKeys] = useState<string[]>([]);
  const [uniqueCountries, setUniqueCountries] = useState<string[]>([]);

  useEffect(() => {
    const uniqueKey = new Set(
      allItems
        .map((item) => (item.name ? item.name[0].toUpperCase() : ""))
        .filter(Boolean)
        .sort((a, b) => a.localeCompare(b))
    );
    setUniqueKeys([allBtnText, ...uniqueKey]);

    const normalize = (s: string) => s.trim().replace(/\s+/g, " ");
    const includingRegex = /^\s*(including|include|incl\.|включая|inclu|incluyendo|包含|包括|含)\b/i;
    const topSplitRe = /[,;、，/]+/;
    const andSplitRe = /\s+(?:and|&|y|e|und|et|и)\s+/i;
    const leadingConjRe = /^\s*(?:and|&|y|e|und|et|и)\s+/i;

    const extractTokens = (countryStr?: string): string[] => {
      if (!countryStr) return [];
      const parts = countryStr.split(topSplitRe).map(normalize).filter(Boolean);
      const tokens: string[] = [];

      for (let part of parts) {
        part = part.replace(leadingConjRe, "").trim();
        if (!part) continue;

        if (includingRegex.test(part)) {
          const withoutIncluding = part.replace(includingRegex, "").trim();
          if (!withoutIncluding) continue;
          const subparts = withoutIncluding.split(andSplitRe).flatMap(p => p.split(topSplitRe));
          subparts.map(normalize).forEach(s => { if (s) tokens.push(s); });
          continue;
        }

        if (andSplitRe.test(part)) {
          part.split(andSplitRe).map(normalize).forEach(s => { if (s) tokens.push(s); });
          continue;
        }

        tokens.push(part);
      }

      return tokens.filter(Boolean);
    };

    const tokenSet = new Set<string>();
    for (const it of allItems) {
      const countryRaw = (it.country || "").trim();
      if (!countryRaw) continue;

      extractTokens(countryRaw).forEach(tok => tokenSet.add(normalize(tok)));
    }

    const sortedTokens = Array.from(tokenSet).sort((a, b) => a.localeCompare(b));

    setUniqueCountries([allOptionText, ...sortedTokens]);
  }, [allItems, allBtnText, allOptionText]);

  return { uniqueKeys, uniqueCountries };
};

export { useUniqueItems };
