import { useTranslation, Trans } from "next-i18next";
import {
  StyledPricingHero,
  StyledPricingHeroHeading,
  StyledPricingHeroWrapper,
  StyledPricingHeroItem,
  StyledPricingHeroPrice,
  StyledPricingHeroList,
  StyledPricingHeroLinkWrapper,
  StyledPricingHeroLink,
  StyledPricingWrapperTotal,
  StyledPricingWrapperTotalPrice,
  StyledPricingHeroPartners,
} from "./PricingHero.styled";
import { IPricingHero } from "./PricingHero.types";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { LabeledWrapper } from "@src/components/widgets/LabeledWrapper";
import { CounterSelector } from "@src/components/widgets/CounterSelector";
import { ToggleButtons } from "@src/components/widgets/ToggleButtons";
import { Button } from "@src/components/ui/Button";

const PricingHero = ({
  heading,
  label,
  price,
  list,
  tryItFreelinkUrl,
  buyNowLinkUrl,
  counterSelectors,
  toggleButtons,
}: IPricingHero) => {
  const { t } = useTranslation("PricingHero");

  return (
    <StyledPricingHero
      background="#f9f9f9"
      desktopSpacing={["144px", "112px"]}
      tabletSpacing={["144px", "88px"]}
      tabletSmallSpacing={["136px", "88px"]}
      mobileSpacing={["96px", "48px"]}
    >
      <Container>
        <StyledPricingHeroHeading level={1} textAlign="center">
          {heading}
        </StyledPricingHeroHeading>

        <StyledPricingHeroWrapper>
          <StyledPricingHeroItem $info={true}>
            <Heading level={3} textAlign="center" label={label} />

            <StyledPricingHeroPrice>
              <Text as="span" size={1} label="$" />
              {price}
            </StyledPricingHeroPrice>

            <StyledPricingHeroList>
              {list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </StyledPricingHeroList>

            <StyledPricingHeroLinkWrapper>
              <StyledPricingHeroLink
                href={tryItFreelinkUrl}
                label={t("TryItFree")}
                color="main"
                textUnderline
                hover="underline-none"
              />
            </StyledPricingHeroLinkWrapper>
          </StyledPricingHeroItem>

          <StyledPricingHeroItem>
            {counterSelectors?.map((item, index) => (
              <LabeledWrapper
                key={index}
                label={item.label}
                rightSide={item.rightSide}
              >
                <CounterSelector items={item.items} selected={item.selected} />
              </LabeledWrapper>
            ))}

            {toggleButtons?.map((item, index) => (
              <LabeledWrapper
                key={index}
                label={item.label}
                rightSide={item.rightSide}
              >
                <ToggleButtons items={item.items} />
              </LabeledWrapper>
            ))}

            <StyledPricingWrapperTotal>
              <Heading level={4} color="#444444" label={t("Total")} />
              <StyledPricingWrapperTotalPrice>
                $<span>{price}</span>
              </StyledPricingWrapperTotalPrice>
            </StyledPricingWrapperTotal>

            <Button as="a" href={buyNowLinkUrl} label={t("BuyNow")} />
          </StyledPricingHeroItem>
        </StyledPricingHeroWrapper>

        <StyledPricingHeroPartners>
          <Heading level={4} label={t("AreYouLookingForAnOOReseller")} />
          <Text size={2}>
            <Trans
              t={t}
              i18nKey="FindOutTheListAuthorizedOOPartners"
              components={[
                <Link
                  key={0}
                  href="/find-partners"
                  color="#ff6f3d"
                  textUnderline
                  hover="underline-none"
                />,
              ]}
            />
          </Text>
        </StyledPricingHeroPartners>
      </Container>
    </StyledPricingHero>
  );
};

export { PricingHero };
