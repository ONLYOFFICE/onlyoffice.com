import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { items } from "./data/items";

import {
  StyledScalable,
  StyledScalableHeading,
  StyledScalableImgWrapper,
  StyledScalableTextWrapper,
} from "./Scalable.styled";

const Scalable = () => {
  const { t } = useTranslation("docspace-enterprise");

  return (
    <StyledScalable>
      <Container desktopSpacing="0" tabletSpacing="0" mobileSpacing="0">
        <StyledScalableHeading
          label={t("ScalableTitleForBusinesses")}
          level={2}
          size={2}
        />
        <StyledScalableTextWrapper>
          {items.map((item) => (
            <Text key={item.label} size={1} label={t(item.label)} />
          ))}
        </StyledScalableTextWrapper>
        <StyledScalableImgWrapper>
          <img
            src="/images/templates/docspace-enterprise/scalable/main_picture.svg"
            alt={t("ScalableImageAltText")}
          />
        </StyledScalableImgWrapper>
      </Container>
    </StyledScalable>
  );
};

export { Scalable };
