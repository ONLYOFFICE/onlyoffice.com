import { useTranslation } from "next-i18next";
import { Heading } from "@src/components/ui/Heading";
import {
  StyledSection,
  StyledContainer,
} from "./Hero.styled";

const Hero = () => {
  const { t } = useTranslation("contacts");
  
  return (
    <StyledSection desktopSpacing={["184px", "330px"]} tabletSpacing={["178px", "330px"]} tabletSmallSpacing={["160px", "330px"]} mobileSpacing={["160px", "350px"]}>
      <StyledContainer>
        <Heading level={1}>{t("HeroTitle")}</Heading>
      </StyledContainer>
    </StyledSection>
  );
};

export { Hero }; 