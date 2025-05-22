import { useTranslation } from "next-i18next";
import {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroImg,
  StyledHeroButtons,
} from "./Hero.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";

const Hero = () => {
  const { t: t1 } = useTranslation("share-powerpoint-presentations");
  const { t: t2 } = useTranslation("Editors");

  return (
    <StyledHero
      desktopSpacing={["184px", "24px"]}
      tabletSpacing={["184px", "24px"]}
      tabletSmallSpacing={["128px", "24px"]}
      mobileSpacing={["128px", "24px"]}
    >
      <Container>
        <StyledHeroWrapper>
          <Heading level={1} color="#ffffff" label={t1("Header")} />
          <Text size={1} label={t1("SubHeader")} />
          <StyledHeroButtons>
            <Button
              id="hero-run-on-your-own-server"
              as="a"
              href="/download#docs-enterprise"
              label={t2("RunOnYourOwnServer")}
            />
            <Button
              id="hero-see-it-in-action"
              as="a"
              href="/see-it-in-action"
              variant="quaternary"
              label={t2("SeeItInAction")}
            />
          </StyledHeroButtons>
        </StyledHeroWrapper>

        <StyledHeroImg
          $imgUrl={t1("HeroImgUrl")}
          $imgUrl2x={t1("HeroImgUrl2x")}
        />
      </Container>
    </StyledHero>
  );
};

export { Hero };
