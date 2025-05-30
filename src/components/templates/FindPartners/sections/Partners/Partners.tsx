import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Button } from "@src/components/ui/Button";
import { items } from "./data/items";

import { StyledPartnersKeyItem, StyledPartnersKeyList } from "./Partners.styled";

const Partners = () => {
  const { t } = useTranslation("find-partners");
  const [activeTab, setActiveTab] = useState<number>(0);
  const [uniqueKeys, setUniqueKeys] = useState<string[]>([]);

  useEffect(() => {
    const unique = new Set(items.map((item) => item.title[0]));
    setUniqueKeys([t("PartnersAll"), ...unique]);
  }, [t]);

  return (
    <Section>
      <Container>
        <StyledPartnersKeyList>
          {uniqueKeys.map((title, index) => (
            <StyledPartnersKeyItem key={title}>
              <Button
                label={title}
                onClick={() => setActiveTab(index)}
                variant={activeTab === index ? "secondary" : "tertiary"}
              />
            </StyledPartnersKeyItem>
          ))}
        </StyledPartnersKeyList>
      </Container>
    </Section>
  );
};

export { Partners };