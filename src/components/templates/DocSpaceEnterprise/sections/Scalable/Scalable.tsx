import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { items } from "./data/items";

import {
  StyledScalable,
  StyledScalableImgWrapper,
  StyledScalableTextWrapper,
} from "./Scalable.styled";

const Scalable = () => {
  const { t } = useTranslation("docspace-enterprise");

  return (
    <StyledScalable>
      <Container desktopSpacing="0" tabletSpacing="0" mobileSpacing="0">
        <Heading
          label={t("ScalableTitleForBusinesses")}
          level={2}
          className="title"
        />
        <StyledScalableTextWrapper>
          {items.map((item) => (
            <Text key={item.label} className="text" label={t(item.label)} />
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
