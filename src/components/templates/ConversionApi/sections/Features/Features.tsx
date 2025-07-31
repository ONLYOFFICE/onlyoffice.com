import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import {
  StyledConverterImage,
  StyledConverterLink,
  StyledConverterText,
  StyledConverterTitle,
  StyledConverterWrapper,
  StyledFeaturesHeading,
  StyledFeaturesItems,
} from "./Features.styled";
import { items } from "./data/items";
import { FeatureItem } from "@src/components/widgets/FeatureItem";
import { Link } from "@src/components/ui/Link";

const Features = () => {
  const { t } = useTranslation("conversion-api");

  return (
    <Section tabletSmallSpacing={["88px", "88px"]}>
      <Container>
        <StyledFeaturesHeading level={2} label={t("WhyToUseOOConversionApi")} />
        <StyledFeaturesItems>
          {items.map((item, index) => (
            <FeatureItem
              key={index}
              icon={{
                ...item.icon,
                isSprite: true,
              }}
              text={
                <Trans
                  t={t}
                  i18nKey={t(String(item.text.label))}
                  components={item.text.links?.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      target={link.isExternal ? "_blank" : undefined}
                      color="main"
                      textUnderline
                      hover="underline-none"
                    />
                  ))}
                />
              }
              heading={t(String(item.heading || ""))}
              variant="horizontal"
            />
          ))}
        </StyledFeaturesItems>
        <StyledConverterWrapper>
          <StyledConverterImage />
          <div>
            <StyledConverterTitle level={4} size={5} label={t("EasilyBuild")} />
            <StyledConverterText label={t("UsingOOConversionApi")} />
            <StyledConverterLink
              href={t("DocumentConverterLink")}
              label={t("CheckTheTutorial")}
              color="main"
              textUnderline
              hover="underline-none"
            />
          </div>
        </StyledConverterWrapper>
      </Container>
    </Section>
  );
};

export { Features };
