import React from "react";
import { Trans, useTranslation } from "next-i18next";
import {
  BenefitsWrapper,
  BenefitsIntro,
  BenefitsGrid,
  BenefitCard,
  BenefitText,
  BenefitIcon,
} from "./Benefits.styled";
import { items } from "./data/items";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Container } from "@src/components/ui/Container";

export const Benefits = () => {
  const { t } = useTranslation("academy");

  return (
    <BenefitsWrapper>
      <Container>
        <BenefitsIntro>
          <Heading level={2}>
            <Trans
              t={t}
              i18nKey="BenefitsSectionTitle"
              components={[<Text as="span" color="main" key="0" />]}
            />
          </Heading>
          <Text fontSize="18px" lineHeight="1.5em">{t("BenefitsSectionSubtitle")}</Text>
        </BenefitsIntro>

        <BenefitsGrid>
          {items.map((item, index) => (
            <BenefitCard key={index}>
              <BenefitText>
                <Heading level={4}>{t(item.title)}</Heading>
                <Text>{t(item.text)}</Text>
              </BenefitText>
              <BenefitIcon $position={item.iconPosition} />
            </BenefitCard>
          ))}
        </BenefitsGrid>
      </Container>
    </BenefitsWrapper>
  );
};
