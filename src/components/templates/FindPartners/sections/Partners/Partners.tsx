import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Button } from "@src/components/ui/Button";
import { Text } from "@src/components/ui/Text";
import { items } from "./data/items";

import { StyledPartnersCountryInner, StyledPartnersCountryOption, StyledPartnersCountryOptions, StyledPartnersCountrySelect, StyledPartnersCountryText, StyledPartnersCountryWrapper, StyledPartnersKeyItem, StyledPartnersKeyList } from "./Partners.styled";

const Partners = () => {
  const { t } = useTranslation("find-partners");
  const [activeTab, setActiveTab] = useState<number>(0);
  const [uniqueKeys, setUniqueKeys] = useState<string[]>([]);
  const [uniqueCountrys, setUniqueCountrys] = useState<string[]>([]);
  const [selectOpen, setSelectOpen] = useState<boolean>(false);

  useEffect(() => {
    const uniqueKey = new Set(items.map((item) => item.name[0]));
    setUniqueKeys([t("PartnersAll"), ...uniqueKey]);
  }, [t]);

  useEffect(() => {
    const uniqueCountry = new Set(items.map((item) => item.country));
    setUniqueCountrys([...uniqueCountry]);
  }, []);

  return (
    <Section desktopSpacing={["80px", "112px"]}>
      <Container>
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
          <StyledPartnersCountrySelect onClick={() => setSelectOpen(!selectOpen)}>
            <StyledPartnersCountryInner $isSelectOpen={selectOpen}>
              <StyledPartnersCountryText $isSelectOpen={selectOpen} label={t("PartnersSelectCountry")} size={2} />
              <StyledPartnersCountryText $isSelectOpen={selectOpen} label={t("PartnersCountry")} size={2} />
            </StyledPartnersCountryInner>
          </StyledPartnersCountrySelect>
          <StyledPartnersCountryOptions $isSelectOpen={selectOpen}>
            {uniqueCountrys.map((country) => (
              <StyledPartnersCountryOption key={country} onClick={() => setSelectOpen(false)}>
                <Text label={country} as={"span"} size={2} />
              </StyledPartnersCountryOption>
            ))}
          </StyledPartnersCountryOptions>
        </StyledPartnersCountryWrapper>
      </Container>
    </Section>
  );
};

export { Partners };