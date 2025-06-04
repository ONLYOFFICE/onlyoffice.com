import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Button } from "@src/components/ui/Button";
import { Text } from "@src/components/ui/Text";
import { PartnersCardItem } from "./sub-components";
import { useUniqueItems } from "./utils/useUniqueItems";
import { IPartner, IPartners } from "../../FindPartners.types";

import {
  StyledPartnersCardList,
  StyledPartnersCountryInner,
  StyledPartnersCountryOption,
  StyledPartnersCountryOptions,
  StyledPartnersCountrySelect,
  StyledPartnersCountryText,
  StyledPartnersCountryWrapper,
  StyledPartnersKeyItem,
  StyledPartnersKeyList,
} from "./Partners.styled";

const Partners = ({ partners }: IPartners) => {
  const { t } = useTranslation("find-partners");
  const [activeTab, setActiveTab] = useState<number>(0);
  const [selectOpen, setSelectOpen] = useState<boolean>(false);
  const [selectCountry, setSelectCountry] = useState<string>("");
  const [choosedKey, setChoosedKey] = useState<string>("");
  const [itemOpen, setItemOpen] = useState<number[]>([]);
  const [allItems, setAllItems] = useState<IPartner[]>([]);

  useEffect(() => {
    const data = partners.partners.data;
    setAllItems(data);
    setChoosedKey("");
  }, [partners]);

  const { uniqueKeys, uniqueCountries } = useUniqueItems(
    allItems,
    t("PartnersAll"),
    t("PartnersAllCountries")
  );

  const filteredItems = useMemo(() => {
    let currentItems = allItems;

    if (selectCountry !== "") {
      currentItems = currentItems.filter((item) => item.country === selectCountry);
    } else if (choosedKey !== "") {
      currentItems = currentItems.filter((item) => item.name[0].toUpperCase() === choosedKey);
    }

    return currentItems;
  }, [choosedKey, selectCountry, allItems]);

  const handleToggleCard = useCallback((id: number) => {
    setItemOpen((prevItemOpen) => {
      if (prevItemOpen.includes(id)) {
        return prevItemOpen.filter((item) => item !== id);
      } else {
        return [...prevItemOpen, id];
      }
    });
  }, []);

  const handleClickKey = (key: string, index: number) => {
    if (key === t("PartnersAll")) {
      setChoosedKey("");
    } else {
      setChoosedKey(key);
    }

    setActiveTab(index);
    setSelectCountry("");
  };

  const handleClickOption = (country: string) => {
    if (country === t("PartnersAllCountries")) {
      setSelectCountry("");
    } else {
      setSelectCountry(country);
    }

    setSelectOpen(false);
    setChoosedKey("");
    setActiveTab(0);
  };

  return (
    <Section desktopSpacing={["80px", "112px"]}>
      <Container maxWidth="1008px" desktopSpacing="40px">
        <StyledPartnersKeyList>
          {uniqueKeys.map((name, index) => (
            <StyledPartnersKeyItem key={name}>
              <Button
                borderRadius="3px"
                label={name}
                onClick={() => handleClickKey(name, index)}
                variant={activeTab === index ? "secondary" : "tertiary"}
              />
            </StyledPartnersKeyItem>
          ))}
        </StyledPartnersKeyList>
        <StyledPartnersCountryWrapper>
          <StyledPartnersCountrySelect
            $isSelectOpen={selectOpen}
            onClick={() => setSelectOpen(!selectOpen)}
          >
            <StyledPartnersCountryInner $isSelectOpen={selectOpen}>
              <StyledPartnersCountryText
                $isSelectCountry={selectCountry}
                $isSelectOpen={selectOpen}
                label={t("PartnersSelectCountry")}
                size={2}
              />
              <StyledPartnersCountryText
                $isSelectCountry={selectCountry}
                $isSelectOpen={selectOpen}
                label={selectCountry}
                size={2}
              />
            </StyledPartnersCountryInner>
          </StyledPartnersCountrySelect>
          <StyledPartnersCountryOptions $isSelectOpen={selectOpen}>
            {uniqueCountries.map((country, index) => (
              <StyledPartnersCountryOption
                key={country}
                onClick={() => handleClickOption(country)}
              >
                <Text
                  label={country}
                  as={"span"}
                  size={2}
                  color={(selectCountry === country) || (selectCountry === "" && index === 0) ? "#FF6F3D" : undefined}
                />
              </StyledPartnersCountryOption>
            ))}
          </StyledPartnersCountryOptions>
        </StyledPartnersCountryWrapper>
        <StyledPartnersCardList>
          {filteredItems.length > 0 && filteredItems.map((item) => (
            <PartnersCardItem
              key={item.id}
              item={item}
              isItemOpen={itemOpen.includes(item.id)}
              onToggleCard={handleToggleCard}
              t={t}
            />
          ))}
        </StyledPartnersCardList>
      </Container>
    </Section>
  );
};

export { Partners };