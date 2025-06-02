import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Button } from "@src/components/ui/Button";
import { Text } from "@src/components/ui/Text";
import { items } from "./data/items";

import {
  StyledPartnersCardItem,
  StyledPartnersCardItemCountry,
  StyledPartnersCardItemDesc,
  StyledPartnersCardItemHead,
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
  StyledPartnersKeyList
} from "./Partners.styled";

const Partners = () => {
  const { t } = useTranslation("find-partners");
  const [activeTab, setActiveTab] = useState<number>(0);
  const [uniqueKeys, setUniqueKeys] = useState<string[]>([]);
  const [uniqueCountrys, setUniqueCountrys] = useState<string[]>([]);
  const [selectOpen, setSelectOpen] = useState<boolean>(false);
  const [selectCountry, setSelectCountry] = useState<string>("");
  const [isItemOpen, setIsItemOpen] = useState<boolean>(false);

  useEffect(() => {
    const uniqueKey = new Set(items.map((item) => item.name[0]));
    setUniqueKeys([t("PartnersAll"), ...uniqueKey]);
  }, [t]);

  useEffect(() => {
    const uniqueCountry = new Set(items.map((item) => item.country));
    setUniqueCountrys([...uniqueCountry]);
  }, []);

  const handleClickOption = (country: string) => {
    setSelectOpen(false);
    setSelectCountry(country);
  }

  return (
    <Section desktopSpacing={["80px", "112px"]}>
      <Container maxWidth="1008px">
        <StyledPartnersKeyList>
          {uniqueKeys.map((name, index) => (
            <StyledPartnersKeyItem key={name}>
              <Button
                label={name}
                onClick={() => setActiveTab(index)}
                variant={activeTab === index ? "secondary" : "tertiary"}
              />
            </StyledPartnersKeyItem>
          ))}
        </StyledPartnersKeyList>
        <StyledPartnersCountryWrapper>
          <StyledPartnersCountrySelect $isSelectOpen={selectOpen} onClick={() => setSelectOpen(!selectOpen)}>
            <StyledPartnersCountryInner $isSelectOpen={selectOpen}>
              <StyledPartnersCountryText $isSelectCountry={selectCountry} $isSelectOpen={selectOpen} label={t("PartnersSelectCountry")} size={2} />
              <StyledPartnersCountryText $isSelectCountry={selectCountry} $isSelectOpen={selectOpen} label={selectCountry} size={2} />
            </StyledPartnersCountryInner>
          </StyledPartnersCountrySelect>
          <StyledPartnersCountryOptions $isSelectOpen={selectOpen}>
            {uniqueCountrys.map((country) => (
              <StyledPartnersCountryOption key={country} onClick={() => handleClickOption(country)}>
                <Text label={country} as={"span"} size={2} color={selectCountry === country ? "#FF6F3D" : undefined} />
              </StyledPartnersCountryOption>
            ))}
          </StyledPartnersCountryOptions>
        </StyledPartnersCountryWrapper>
        <StyledPartnersCardList>
          <StyledPartnersCardItem $isItemOpen={isItemOpen} onClick={() => setIsItemOpen(!isItemOpen)}>
            <StyledPartnersCardItemLeft />
            <StyledPartnersCardItemRight>
              <StyledPartnersCardItemHead>
                <StyledPartnersCardItemName level={4} size={5} label="blablabla" />
                <StyledPartnersCardItemCountry size={3} label="bugaga" />
                <StyledPartnersCardItemLink href="" />
              </StyledPartnersCardItemHead>
              <StyledPartnersCardItemDesc label="01River Limited is a comprehensive Business Solutions provider reselling software solutions in various areas (Database Management, CRM, Web Design for business), assisting the businesses in customization, migration and development of workflow solutions, and handling digital transformation quickly and professionally. As one of the official partners for ONLYOFFICE in Asia, they provide a wide range of IT services that cater to businesses, retain customers and drive new markets." />
            </StyledPartnersCardItemRight>
          </StyledPartnersCardItem>
        </StyledPartnersCardList>
      </Container>
    </Section>
  );
};

export { Partners };