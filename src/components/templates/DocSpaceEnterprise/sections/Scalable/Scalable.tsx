import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { items } from "./data/items";

import {
  StyledScalableImgWrapper,
  StyledScalableTextWrapper,
} from "./Scalable.styled";

const Scalable = () => {
  const { t } = useTranslation("docspace-enterprise");

  return (
    <Section>
      <Container>
        <Heading
          label={t("ScalableTitleForBusinesses")}
          level={2}
          size={2}
          textAlign="center"
        />
        <StyledScalableTextWrapper>
          {items.map((item) => (
            <Text
              key={item.label}
              size={2}
              label={t(item.label)}
              textAlign="center"
            />
          ))}
        </StyledScalableTextWrapper>
        <StyledScalableImgWrapper>
          <img
            src="/images/templates/docspace-enterprise/scalable/main_picture.svg"
            alt={t("ScalableImageAltText")}
          />
        </StyledScalableImgWrapper>
      </Container>
    </Section>
  );
};

export { Scalable };
