import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

import {
  StyledWorldwideWrapper,
  StyledWorldwideImgWrapper,
} from "./Worldwide.styled";

const Worldwide = () => {
  const { t } = useTranslation("docspace-enterprise");

  return (
    <Section background="#f8f9f9">
      <Container>
        <StyledWorldwideWrapper>
          <StyledWorldwideImgWrapper>
            <img
              src="/images/templates/docspace-enterprise/hero/world_icon.svg"
              alt={t("HeroWorldIconAltText")}
            />
          </StyledWorldwideImgWrapper>
          <Text label={t("TrustedBy")} size={1} />
          <Heading level={2} label={t("CountOfUsers")} size={2} color="main" />
          <Text label={t("Worldwide")} />
        </StyledWorldwideWrapper>
      </Container>
    </Section>
  );
};

export { Worldwide };
