import { useTranslation } from "next-i18next";
import {
  StyledSubscribe,
  StyledSubscribeWrapper,
  StyledSubscribeHero,
  StyledSubscribeHeroWrapper,
  StyledSubscribeHeroHeading,
  StyledSubscribeHeroText,
  StyledSubscribeHeroImage,
  StyledSubscribeMemberHeading,
  StyledSubscribeMemberItems,
  StyledSubscribeHelpfulResourcesHeading,
  StyledSubscribeHelpfulResourcesItems,
} from "./Subscribe.styled";
import { Container } from "@src/components/ui/Container";
import { SubscribeItem } from "./sub-components/SubscribeItem";
import { GiftBanner } from "./sub-components/GiftBanner";
import { GratitudionBanner } from "./sub-components/GratitudionBanner";
import { memberItems } from "./data/memberItems";
import { helpfulResourcesItems } from "./data/helpfulResourcesItems";

const SubscribeTemplate = () => {
  const { t } = useTranslation("subscribe");

  return (
    <StyledSubscribe
      background="#f9f9f9"
      desktopSpacing={["152px", "112px"]}
      tabletSpacing={["128px", "112px"]}
      tabletSmallSpacing={["120px", "112px"]}
      mobileSpacing={["96px", "48px"]}
    >
      <Container>
        <StyledSubscribeWrapper>
          <StyledSubscribeHero>
            <StyledSubscribeHeroWrapper>
              <StyledSubscribeHeroHeading
                level={1}
                label={t("WelcomeToTheOOCommunity")}
              />
              <StyledSubscribeHeroText
                size={1}
                label={t("YouVeOfficiallyJoinedANetwork")}
              />
            </StyledSubscribeHeroWrapper>

            <StyledSubscribeHeroImage />
          </StyledSubscribeHero>

          <div>
            <StyledSubscribeMemberHeading
              level={2}
              size={4}
              label={t("AsAmemberOfOurCommunity")}
            />

            <StyledSubscribeMemberItems>
              {memberItems.map((item, index) => (
                <SubscribeItem
                  key={index}
                  icon={item.icon}
                  heading={t(item.heading)}
                  text={t(item.text)}
                />
              ))}
            </StyledSubscribeMemberItems>
          </div>

          <GiftBanner />

          <div>
            <StyledSubscribeHelpfulResourcesHeading
              level={3}
              size={4}
              label={t("HelpfulResources")}
            />

            <StyledSubscribeHelpfulResourcesItems>
              {helpfulResourcesItems.map((item, index) => (
                <SubscribeItem
                  key={index}
                  icon={item.icon}
                  heading={t(item.heading)}
                  text={t(item.text)}
                  variant="secondary"
                />
              ))}
            </StyledSubscribeHelpfulResourcesItems>
          </div>

          <GratitudionBanner />
        </StyledSubscribeWrapper>
      </Container>
    </StyledSubscribe>
  );
};

export { SubscribeTemplate };
