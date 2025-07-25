import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import {
  StyledAcceptItem,
  StyledAcceptItems,
  StyledAcceptItemText,
  StyledAcceptWrapper,
} from "./Accept.styled";
import { items } from "./data/items";
import { Button } from "@src/components/ui/Button";
import { SocialIcons } from "@src/components/modules/SocialIcons";

const Accept = () => {
  const { t } = useTranslation("influencer-program");

  return (
    <Section>
      <Container>
        <StyledAcceptWrapper>
          <Heading level={2} size={3} textAlign="center">
            <Trans
              t={t}
              i18nKey="WhatWeAccept"
              components={[<Text as="span" color="main" key="0" />]}
            />
          </Heading>

          <StyledAcceptItems>
            {items.map((item, index) => (
              <StyledAcceptItem $positionX={item.positionX} key={index}>
                <StyledAcceptItemText label={t(item.title)} />
                <StyledAcceptItemText
                  color="#808080"
                  fontStyle="italic"
                  label={t(item.text)}
                />
              </StyledAcceptItem>
            ))}
          </StyledAcceptItems>

          <SocialIcons />

          <Button as="a" href="#form" label={t("ApplyNow")} />
        </StyledAcceptWrapper>
      </Container>
    </Section>
  );
};

export { Accept };
