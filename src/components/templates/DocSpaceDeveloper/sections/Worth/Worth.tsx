import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { items } from "./data/items";

import {
  StyledWorthButtonsWrapper,
  StyledWorthCard,
  StyledWorthCardsWrapper,
  StyledWorthHeading,
  StyledWorthItem,
  StyledWorthList,
  StyledWorthTitle
} from "./Worth.styled";
import { Button } from "@src/components/ui/Button";

const Worth = () => {
  const { t } = useTranslation("docspace-developer");

  const rawItems = items.map((item) => (
    {
      title: t(item.title),
      list: t(item.list, {returnObjects: true}),
    }
  ));

  return (
    <Section background="#f5f5f5">
      <Container>
        <StyledWorthHeading
          label={t("WorthHeading")}
          level={2}
          size={3}
          textAlign="center"
        />
        <StyledWorthCardsWrapper>
          {rawItems.map((card) => (
            <StyledWorthCard key={card.title}>
              <StyledWorthTitle
                label={card.title}
                level={3}
                size={4}
                textAlign="center"
              />
              <StyledWorthList>
                {Array.isArray(card.list) && card.list.map((item) => (
                  <StyledWorthItem key={item}>{item}</StyledWorthItem>
                ))}
              </StyledWorthList>
            </StyledWorthCard>
          ))}
        </StyledWorthCardsWrapper>
        <StyledWorthButtonsWrapper>
          <Button label={t("WorthButtonTry")} borderRadius="3px" />
          <Button label={t("WorthButtonRead")} variant="secondary" borderRadius="3px" />
        </StyledWorthButtonsWrapper>
      </Container>
    </Section>
  );
};

export { Worth };