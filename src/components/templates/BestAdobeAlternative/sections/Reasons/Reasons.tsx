import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { StyledFeaturesHeading, StyledFeaturesWrapper } from "./Reasons.styled";
import { Text } from "@src/components/ui/Text";
import { items } from "./data/items";
import { FeatureItem } from "@src/components/widgets/FeatureItem";
import { Link } from "@src/components/ui/Link";

const Reasons = () => {
  const { t } = useTranslation("best-adobe-alternative");

  return (
    <Section tabletSmallSpacing={["88px", "88px"]}>
      <Container>
        <StyledFeaturesHeading level={2} textAlign="center">
          <Trans
            t={t}
            i18nKey="FeaturesTitle"
            components={[<Text as="span" color="#FF6F3D" key="0" />]}
          />
        </StyledFeaturesHeading>
        <StyledFeaturesWrapper>
          {items.map((item, index) => (
            <FeatureItem
              key={index}
              variant={item.variant || "horizontal"}
              icon={{
                ...item.icon,
                isSprite: true,
              }}
              heading={t(String(item.heading))}
              text={
                <Trans
                  t={t}
                  i18nKey={String(item.text.label)}
                  components={item.text.links?.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href={link.href}
                      color="main"
                      textUnderline
                      hover="underline-none"
                    />
                  ))}
                />
              }
            />
          ))}
        </StyledFeaturesWrapper>
      </Container>
    </Section>
  );
};

export { Reasons };
