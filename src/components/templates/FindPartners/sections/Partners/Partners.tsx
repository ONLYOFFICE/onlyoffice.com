import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { PartnersCardItem } from "./sub-components/PartnersCardItem";
import { PartnersKeyItem } from "./sub-components/PartnersKeyItem";
import { useUniqueItems } from "./utils/useUniqueItems";
import { IPartner, IPartners } from "../../FindPartners.types";
import { Select } from "@src/components/ui/Select";
import { ISelectOption } from "@src/components/ui/Select/Select.types";

import {
  StyledPartnersCardList,
  StyledPartnersCountryWrapper,
  StyledPartnersKeyList,
  StyledPartnersButtonShowMore,
} from "./Partners.styled";

const Partners = ({ partners }: IPartners) => {
  const { t, i18n } = useTranslation("find-partners");

  const [activeTab, setActiveTab] = useState<number>(0);
  const [selectCountry, setSelectCountry] = useState<string>("");
  const [choosedKey, setChoosedKey] = useState<string>("");
  const [itemOpen, setItemOpen] = useState<number[]>([]);
  const [allItems, setAllItems] = useState<IPartner[]>([]);
  const [showAllCards, setShowAllCards] = useState<boolean>(false);

  const [selectSelected, setSelectSelected] = useState<ISelectOption[]>([]);

  useEffect(() => {
    const data = partners.partners.data;
    setAllItems(data);
    setChoosedKey("");
    setShowAllCards(false);
    setActiveTab(0);
    setItemOpen([]);
    setSelectSelected([]);
  }, [partners, i18n.language]);

  const { uniqueKeys, uniqueCountries } = useUniqueItems(
    allItems,
    t("PartnersAll"),
    t("PartnersAllCountries")
  );

  const options = useMemo(() => {
    const allLabel = t("PartnersAllCountries");
    const rest = uniqueCountries
      .filter((l) => l !== allLabel)
      .map((label) => ({ label, value: label } as ISelectOption));
    return [{ label: allLabel, value: "" } as ISelectOption, ...rest];
  }, [uniqueCountries, t]);

  useEffect(() => {
    if (!options || options.length === 0) return;

    setSelectSelected((prev) => (prev.length === 0 ? [options[0]] : prev));
  }, [options]);

  useEffect(() => {
    const val = selectSelected[0]?.value ?? "";
    setSelectCountry(val);

    if (val !== "") {
      setChoosedKey("");
      setActiveTab(0);
    }
  }, [selectSelected]);

  const filteredItems = useMemo(() => {
    let currentItems = allItems;

    if (selectCountry !== "") {
      const sel = selectCountry.trim().toLowerCase();
      currentItems = currentItems.filter((item) => {
        const country = (item.country || "").trim().toLowerCase();
        return country.includes(sel);
      });
    } else if (choosedKey !== "") {
      currentItems = currentItems.filter((item) => item.name[0].toUpperCase() === choosedKey);
    }

    return currentItems;
  }, [choosedKey, selectCountry, allItems]);

  const displayedItems = useMemo(() => {
    if (showAllCards) return filteredItems;
    return filteredItems.slice(0, 3);
  }, [filteredItems, showAllCards]);

  const handleToggleCard = useCallback((id: number) => {
    setItemOpen((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  }, []);

  const handleClickKey = useCallback(
    (key: string, index: number) => {
      setChoosedKey(key === t("PartnersAll") ? "" : key);
      setActiveTab(index);
      setSelectSelected([{ label: t("PartnersAllCountries"), value: "" }]);
      setSelectCountry("");
    },
    [t]
  );

  return (
    <Section desktopSpacing={["80px", "112px"]}>
      <Container maxWidth="1008px" desktopSpacing="40px">
        <StyledPartnersKeyList>
          {uniqueKeys.map((name, index) => (
            <PartnersKeyItem
              key={name}
              name={name}
              index={index}
              isActiveTab={activeTab === index}
              onClick={handleClickKey}
            />
          ))}
        </StyledPartnersKeyList>

        <StyledPartnersCountryWrapper>
          <Select
            selected={selectSelected}
            setSelected={setSelectSelected}
            options={options}
            label={t("PartnersSelectCountry")}
            placeholder={t("PartnersSelectCountry")}
          />
        </StyledPartnersCountryWrapper>

        <StyledPartnersCardList>
          {filteredItems.length > 0 &&
            displayedItems.map((item) => (
              <PartnersCardItem
                key={item.id}
                item={item}
                isItemOpen={itemOpen.includes(item.id)}
                onToggleCard={handleToggleCard}
                t={t}
              />
            ))}
          {filteredItems.length > 3 && (
            <StyledPartnersButtonShowMore
              label={showAllCards ? t("ShowLessBtnText") : t("ShowMoreBtnText")}
              onClick={() => setShowAllCards(!showAllCards)}
              variant="tertiary"
              borderRadius="3px"
            />
          )}
        </StyledPartnersCardList>
      </Container>
    </Section>
  );
};

export { Partners };
