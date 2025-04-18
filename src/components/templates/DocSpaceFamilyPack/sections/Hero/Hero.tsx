import { useTranslation, Trans } from "next-i18next";
import {
  StyledHero,
  StyledHeroHeading,
  StyledHeroWrapper,
  StyledHeroItem,
  StyledHeroPrice,
  StyledHeroLinkWrapper,
  StyledHeroLink,
  StyledHeroTotal,
  StyledHeroTotalPrice,
} from "./Hero.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";
import { Tooltip } from "@src/components/ui/Tooltip";
import { LabeledWrapper } from "@src/components/widgets/LabeledWrapper";
import { CounterSelector } from "@src/components/widgets/CounterSelector";
import { ToggleButtons } from "@src/components/widgets/ToggleButtons";
import { List } from "@src/components/widgets/pricing/List";
import { Reseller } from "@src/components/modules/pricing/Reseller";

const Hero = () => {
  const { t } = useTranslation("docspace-family-pack");
  const price = "330";

  return (
    <StyledHero
      background="#f9f9f9"
      desktopSpacing={["144px", "112px"]}
      tabletSpacing={["144px", "88px"]}
      tabletSmallSpacing={["136px", "88px"]}
      mobileSpacing={["96px", "48px"]}
    >
      <Container>
        <StyledHeroHeading level={1} textAlign="center">
          <Trans
            t={t}
            i18nKey="BuyOODocSpaceFamilyPack"
            components={[<Text key={0} as="span" color="main" />]}
          />
        </StyledHeroHeading>

        <StyledHeroWrapper>
          <StyledHeroItem $info={true}>
            <Heading
              level={3}
              textAlign="center"
              label={t("DocSpaceFamilyPack")}
            />

            <StyledHeroPrice>
              <Text as="span" size={1} label="$" />
              {price}
            </StyledHeroPrice>

            <List
              items={[
                t("RoomBasedFileStorage"),
                t("OnlineEditors"),
                t("DesktopAndMobileApps"),
                t("EnhancedSecurityFeatures"),
                t("AllMinorUpdatesAndMajorUpgrades"),
              ]}
            />

            <StyledHeroLinkWrapper>
              <StyledHeroLink
                href="/download?from=familypack#docspace-enterprise"
                label={t("TryItFree")}
                color="main"
                textUnderline
                hover="underline-none"
              />
            </StyledHeroLinkWrapper>
          </StyledHeroItem>

          <StyledHeroItem>
            <LabeledWrapper
              label={t("NumberOfUsers")}
              rightSide={
                <Tooltip
                  id="number-of-users-tooltip"
                  content={t("NumberOfUsersTooltip")}
                  place="bottom-start"
                  infoIcon
                />
              }
            >
              <CounterSelector
                items={[{ id: "5", label: "5" }]}
                selected="5"
                bgColor="#f5f5f5"
              />
            </LabeledWrapper>

            <LabeledWrapper label={t("LicenseDuration")}>
              <ToggleButtons
                items={[
                  {
                    id: "lifetime",
                    label: {
                      name: t("Lifetime"),
                      rightSide: (
                        <Tooltip
                          id="lifetime-tooltip"
                          content={t("LifetimeTooltip")}
                          place="bottom-start"
                          infoIcon
                        />
                      ),
                    },
                  },
                ]}
              />
            </LabeledWrapper>

            <LabeledWrapper label={t("Updates")}>
              <ToggleButtons
                items={[{ id: "1year", label: { name: t("1Year") } }]}
              />
            </LabeledWrapper>

            <StyledHeroTotal>
              <Heading level={4} color="#444444" label={t("Total")} />
              <StyledHeroTotalPrice>
                $<span>{price}</span>
              </StyledHeroTotalPrice>
            </StyledHeroTotal>

            <Button as="a" href="" label={t("BuyNow")} />
          </StyledHeroItem>
        </StyledHeroWrapper>

        <Reseller />
      </Container>
    </StyledHero>
  );
};

export { Hero };
