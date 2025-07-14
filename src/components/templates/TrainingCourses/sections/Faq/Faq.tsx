import { useCallback, useState } from "react";
import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { items } from "./data/items";

import {
  StyledFaqHeading,
  StyledFaqItem,
  StyledFaqItemHeading,
  StyledFaqItemText,
  StyledFaqList
} from "./Faq.styled";

const Faq = () => {
  const { t } = useTranslation("training-courses");
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = useCallback((id: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }, [])

  return (
    <Section>
      <Container>
        <StyledFaqHeading
          level={2}
          size={2}
          label={t("FAQ")}
        />
        <StyledFaqList>
          {items.map((item) => {
            const isOpen = openItems[item.id] ?? false

            return (
              <StyledFaqItem
                key={item.id}
                onClick={() => toggleItem(item.id)}
                $isOpen={isOpen}
              >
                <StyledFaqItemHeading
                  $isOpen={isOpen}
                  level={3}
                  size={5}
                  label={t(item.title)}
                />
                <StyledFaqItemText
                  size={3}
                  label={t(item.description)}
                />
              </StyledFaqItem>
            )
          })}
        </StyledFaqList>
      </Container>
    </Section>
  );
};

export { Faq };