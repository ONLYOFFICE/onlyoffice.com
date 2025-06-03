import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Button } from "@src/components/ui/Button";
import { Text } from "@src/components/ui/Text";
import { useUniqueItems } from "./utils/useUniqueItems";
import { IPartner, IPartners } from "../../FindPartners.types";

import {
  StyledPartnersCardItem,
  StyledPartnersCardItemCountry,
  StyledPartnersCardItemDesc,
  StyledPartnersCardItemHead,
  StyledPartnersCardItemImg,
  StyledPartnersCardItemLeft,
  StyledPartnersCardItemLink,
  StyledPartnersCardItemName,
  StyledPartnersCardItemRight,
  StyledPartnersCardList,
  StyledPartnersCountryInner,
  StyledPartnersCountryOption,
  StyledPartnersCountryOptions,
  StyledPartnersCountrySelect,
  StyledPartnersCountryText,
  StyledPartnersCountryWrapper,
  StyledPartnersKeyItem,
  StyledPartnersKeyList,
  StyledPartnersLevel
} from "./Partners.styled";

const Partners = ({ partners }: IPartners) => {
  const { t } = useTranslation("find-partners");
  const [activeTab, setActiveTab] = useState<number>(0);
  const [selectOpen, setSelectOpen] = useState<boolean>(false);
  const [selectCountry, setSelectCountry] = useState<string>("");
  const [choosedKey, setChoosedKey] = useState<string>("");
  const [itemOpen, setItemOpen] = useState<number[]>([]);
  const [allItems, setAllItems] = useState<IPartner[]>([]);
  const [items, setItems] = useState<IPartner[]>([]);

  useEffect(() => {
    const data = partners.partners.data;
    setAllItems(data);
    setItems(data);
    setChoosedKey("");
  }, [partners]);

  const {uniqueKeys, uniqueCountries} = useUniqueItems(allItems, t("PartnersAll"), t("PartnersAllCountries"));

useEffect(() => {
  if (selectCountry !== "") {
    setItems(allItems.filter(item => item.country === selectCountry));
    return;
  }

  if (choosedKey !== "") {
    setItems(allItems.filter(item => item.name[0].toUpperCase() === choosedKey));
    return;
  }

  setItems(allItems);
}, [choosedKey, selectCountry, allItems]);

  const handleClickKey = (key: string, index: number) => {
    if (key === t("PartnersAll")) {
      setChoosedKey("");
    } else {
      setChoosedKey(key);
    }

    setActiveTab(index);
    setSelectCountry("");
  }

  const handleClickOption = (country: string) => {
    if (country === t("PartnersAllCountries")) {
      setSelectCountry("");
    } else {
      setSelectCountry(country);
    }

    setSelectOpen(false);
    setChoosedKey("");
    setActiveTab(0);
  }

  const handleToggleCard = (id: number) => {
    if (itemOpen.includes(id)) {
      setItemOpen(itemOpen.filter((item) => item !== id));
    } else {
      setItemOpen([...itemOpen, id]);
    }
  };

  return (
    <Section desktopSpacing={["80px", "112px"]}>
      <Container maxWidth="1008px">
        <StyledPartnersKeyList>
          {uniqueKeys.map((name, index) => (
            <StyledPartnersKeyItem key={name}>
              <Button
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
          {items.length > 0 && items.map((item) => (
            <StyledPartnersCardItem
              key={item.id}
              $isItemOpen={itemOpen.includes(item.id)}
              onClick={() => handleToggleCard(item.id)}
            >
              <StyledPartnersCardItemLeft>
                <StyledPartnersCardItemImg $imgUrl={item.logo.length > 1 ? item?.logo[1]?.url : item?.logo[0]?.url} />
              </StyledPartnersCardItemLeft>
              <StyledPartnersCardItemRight>
                <StyledPartnersCardItemHead>
                  <StyledPartnersCardItemName
                    level={4}
                    size={5}
                    label={item.name ?? ""}
                  />
                  <StyledPartnersCardItemCountry
                    size={3}
                    label={item.country ?? ""}
                  />
                  {item.link &&
                    <StyledPartnersCardItemLink
                      $siteText={t("PartnersVisitSite")}
                      $emailText={t("PartnersSendEmail")}
                      $urlType={item.url_type}
                      href={item.link.endsWith("/") ? item.link.slice(0, -1) : item.link}
                    />
                  }
                </StyledPartnersCardItemHead>
                {item.description &&
                  <StyledPartnersCardItemDesc label={item.description} />
                }
              </StyledPartnersCardItemRight>
              {item.level && item.level !== "No level" && (
                <StyledPartnersLevel $level={item.level} />
              )}
            </StyledPartnersCardItem>
          ))}
        </StyledPartnersCardList>
      </Container>
    </Section>
  );
};

export { Partners };