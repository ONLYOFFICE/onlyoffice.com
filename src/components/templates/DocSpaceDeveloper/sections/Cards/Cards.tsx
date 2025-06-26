import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { items } from "./data/items";

import {
  StyledCardsHeading,
  StyledCardsIconActive,
  StyledCardsIconDefault,
  StyledCardsIconWrapper,
  StyledCardsItem,
  StyledCardsList,
  StyledCardsText,
  StyledCardsTitle,
  StyledCardsWrapper
} from "./Cards.styled";

const Cards = () => {
  const { t } = useTranslation("docspace-developer");

  return (
    <Section>
      <Container>
        <StyledCardsHeading
          label={t("CardsHeading")}
          color="#f5f5f5"
          textAlign="center"
        />
        <StyledCardsList>
          {items.map((item) => (
            <StyledCardsItem key={item.title}>
              <StyledCardsWrapper>
                <StyledCardsTitle
                  label={t(item.title)}
                  level={3}
                  size={4}
                  color="#f5f5f5"
                />
                <StyledCardsIconWrapper>
                  <StyledCardsIconDefault $urlDefault={item.iconUrl.default} />
                  <StyledCardsIconActive $urlActive={item.iconUrl.active} />
                </StyledCardsIconWrapper>
              </StyledCardsWrapper>
              <StyledCardsText
                label={t(item.text)}
                color="#f5f5f5"
              />
            </StyledCardsItem>
          ))}
        </StyledCardsList>
      </Container>
    </Section>
  );
};

export { Cards };