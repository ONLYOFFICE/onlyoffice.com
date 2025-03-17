import { Trans, useTranslation } from "next-i18next";
import {
  StyledHero,
  StyledHeroContent,
  StyledHeroImage,
  StyledHeroWrapper,
} from "./Hero.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { List } from "@src/components/widgets/List";
import { Button } from "@src/components/ui/Button";
import { items } from "./data/items";

const Hero = () => {
  const { t } = useTranslation("collaboration-rooms");

  return (
    <StyledHero
      desktopSpacing={["120px", "80px"]}
      tabletSpacing={["120px", "80px"]}
      tabletSmallSpacing={["136px", "32px"]}
      mobileSpacing={["96px", "48px"]}
    >
      <Container>
        <StyledHeroWrapper>
          <StyledHeroContent>
            <Heading level={1}>
              <Trans
                t={t}
                i18nKey="WorkTogetherBetterInCollaborationRooms"
                components={[<Text as="span" color="#FF6F3D" key="0" />]}
              />
            </Heading>
            <Text size={1} label={t("EnjoyStressFreeCoEditing")} />
            <List
              items={items.map(({ label }) => ({
                label: t(label),
              }))}
              className="header-list"
            />
            <Button
              id="create-free-account"
              className="header-button"
              as="a"
              href="/docspace-registration.aspx"
              label={t("CreateFreeAccount")}
            />
          </StyledHeroContent>
          <StyledHeroImage
            $imgUrl={t("HeroImgUrl")}
            $imgUrl2x={t("HeroImgUrl2x")}
          />
        </StyledHeroWrapper>
      </Container>
    </StyledHero>
  );
};

export { Hero };
