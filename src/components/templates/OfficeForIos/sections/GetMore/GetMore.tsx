import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";

import {
  StyledGetMoreHeading,
  StyledGetMoreImage,
  StyledGetMoreText,
} from "./GetMore.styled";

const GetMore = () => {
  const { t } = useTranslation("office-for-ios");

  return (
    <Section>
      <Container>
        <StyledGetMoreHeading
          label={t("GetMoreWithComplete")}
          size={3}
          textAlign="center"
        />
        <StyledGetMoreText
          label={t("WorkOnDocumentsWithin")}
          textAlign="center"
          size={1}
        />
        <StyledGetMoreImage $backgroundUrl={t("GetMoreImage")} $backgroundUrl2x={t("GetMoreImage2x")} />
      </Container>
    </Section>
  );
};

export { GetMore };
