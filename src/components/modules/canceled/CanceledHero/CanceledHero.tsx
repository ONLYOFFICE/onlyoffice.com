import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import {
  StyledCanceledHeading,
  StyledCanceledImage,
  StyledCanceledSection,
} from "./CanceledHero.styled";
import { ILocale } from "@src/types/locale";

const CanceledHero = ({ locale }: ILocale) => {
  const { t } = useTranslation("canceled");
  return (
    <StyledCanceledSection
      desktopSpacing={["194px", "197px"]}
      tabletSpacing={["120px", "432px"]}
      tabletSmallSpacing={["120px", "432px"]}
      mobileSpacing={["96px", "232px"]}
      background={"#f5f5f5"}
    >
      <Container>
        <StyledCanceledHeading
          className={locale}
          size={1}
          label={t("CanceledHeroTitle")}
        />
        <StyledCanceledImage />
      </Container>
    </StyledCanceledSection>
  );
};

export { CanceledHero };
