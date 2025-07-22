import { useTranslation, Trans } from "next-i18next";
import {
  StyledSection,
  StyledTitle,
  StyledText,
} from "./DocumentEncryption.styled";
import { Link } from "@src/components/ui/Link";
import { Container } from "@src/components/ui/Container";

const DocumentEncryption = () => {
  const { t } = useTranslation("desktop");

  return (
    <StyledSection
      background="#f9f9f9"
      $image={t("SecurityImgUrl")}
      $image2x={t("SecurityImgUrl2x")}
      desktopSpacing={["130px", "130px"]}
      tabletSpacing={["130px", "130px"]}
      tabletSmallSpacing={["112px", "112px"]}
      mobileSpacing={["48px", "48px"]}
    >
      <Container>
        <StyledTitle>{t("SecurityTitle")}</StyledTitle>
        <StyledText>
          <Trans
            t={t}
            i18nKey="SecurityDescription"
            components={[
              <Link
                color="main"
                textUnderline
                hover="underline-none"
                key="0"
                href="/private-rooms"
              />,
            ]}
          />
        </StyledText>
      </Container>
    </StyledSection>
  );
};

export { DocumentEncryption };
