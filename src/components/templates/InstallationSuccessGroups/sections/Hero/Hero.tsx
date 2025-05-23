import { useTranslation } from "next-i18next";
import {
  StyledHero,
  StyledHeroImage,
  StyledButtonsArea,
  StyledUpgradeArea,
  StyledUpgradeAreaRight,
  StyledUpgradeList,
  StyledUpgradeListItem,
  StyledUpgradeAreaImage,
  StyledCouponHeading,
  StyledHeading,
} from "./Hero.styled";
import { Button } from "@src/components/ui/Button";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Trans } from "next-i18next";
import { items } from "./data/items";

const Hero = () => {
  const { t } = useTranslation("installation-success-groups");

  return (
    <StyledHero
      desktopSpacing={["158px", "111px"]}
      tabletSpacing={["158px", "111px"]}
      tabletSmallSpacing={["120px", "40px"]}
      mobileSpacing={["96px", "20px"]}
    >
      <Container>
        <StyledHeroImage />
        <StyledHeading level={1}>{t("Header")}</StyledHeading>
        <StyledUpgradeArea>
          <StyledUpgradeAreaImage />
          <StyledUpgradeAreaRight>
            <Heading level={3}>
              <Trans
                t={t}
                i18nKey="UpgradeHeader"
                components={[<Text as="span" color="#FF6F3D" key={0} />]}
              />
            </Heading>
            <StyledUpgradeList>
              {items.map((item, index) => (
                <StyledUpgradeListItem key={index}>
                  <Trans
                    t={t}
                    i18nKey={item}
                    components={[<strong key={0} />]}
                  />
                </StyledUpgradeListItem>
              ))}
            </StyledUpgradeList>
            <StyledCouponHeading level={4}>
              <Trans
                t={t}
                i18nKey="CouponHeader"
                components={[
                  <Text as="span" className="coupon-span" key={0} />,
                ]}
              />
            </StyledCouponHeading>
            <StyledButtonsArea>
              <Button
                as="a"
                href="/workspace-prices#workspace-on-premises"
                label={t("BuyButton")}
              />
              <Button
                as="a"
                href="/download-workspace"
                label={t("TryNowButton")}
                variant="secondary"
              />
            </StyledButtonsArea>
          </StyledUpgradeAreaRight>
        </StyledUpgradeArea>
      </Container>
    </StyledHero>
  );
};

export { Hero };
