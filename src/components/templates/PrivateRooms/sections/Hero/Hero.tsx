import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import {
  StyledHero,
  StyledHeroContent,
  StyledHeroHeading,
  StyledHeroText,
  StyledHeroImage,
  StyledHeroWrapper,
} from "./Hero.styled";

const Hero = () => {
  const { t } = useTranslation("private-rooms");

  return (
    <StyledHero
      desktopSpacing={["120px", "150px"]}
      tabletSpacing={["200px", "200px"]}
      tabletSmallSpacing={["118px", "50px"]}
      mobileSpacing={["60px", "50px"]}
    >
      <Container maxWidth="1240px">
        <StyledHeroWrapper>
          <StyledHeroContent>
            <StyledHeroHeading
              label={t("KeepYourDocuments")}
            />
            <StyledHeroText label={t("MeetONLYOFFICEPrivateRooms")} />
          </StyledHeroContent>
          <StyledHeroImage />
        </StyledHeroWrapper>
      </Container>
    </StyledHero>
  );
};

export { Hero };
