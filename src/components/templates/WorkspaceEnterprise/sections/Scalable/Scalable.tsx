import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

import {
  StyledScalableImgWrapper,
  StyledScalableTextWrapper,
} from "./Scalable.styled";

const Scalable = () => {
  const { t } = useTranslation("workspace-enterprise");

  return (
    <Section>
      <Container>
        <Heading
          label={t("OfficeGrows")}
          level={2}
          size={2}
          textAlign="center"
        />
        <StyledScalableTextWrapper>
          <Text fontSize="18px" label={t("OfficeGrowsText")} textAlign="center" />
        </StyledScalableTextWrapper>
        <StyledScalableImgWrapper />
      </Container>
    </Section>
  );
};

export { Scalable };
