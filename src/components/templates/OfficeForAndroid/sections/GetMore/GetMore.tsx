import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";

import { getAssetUrl } from "@utils/getAssetUrl";
import {
  StyledGetMoreHeading,
  StyledGetMoreImage,
  StyledGetMoreText,
} from "./GetMore.styled";

const GetMore = () => {
  const { t } = useTranslation("office-for-android");

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
        <StyledGetMoreImage $backgroundUrl={getAssetUrl(t("GetMoreImage"))} $backgroundUrl2x={t("GetMoreImage2x")} />
      </Container>
    </Section>
  );
};

export { GetMore };
