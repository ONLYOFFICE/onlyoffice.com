import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import React from "react";
import { StyledFeaturesWrapper, StyledFeatureButtons } from "./Features.styled";
import { Button } from "@src/components/ui/Button";
import { useTranslation } from "next-i18next";
import { FeatureTextImage } from "@src/components/widgets/FeatureTextImage/FeatureTextImage";
import { items } from "./data/items";

const Features = () => {
  const { t } = useTranslation("collaboration-rooms");

  return (
    <Section
      desktopSpacing={["112px", "124px"]}
      tabletSmallSpacing={["72px", "72px"]}
    >
      <Container>
        <StyledFeaturesWrapper>
          {items.map(({ title, text, links, image, ...items }, index) => (
            <FeatureTextImage
              key={index}
              {...items}
              title={t(title)}
              text={t(text)}
              links={links?.map((link) => ({ ...link, label: t(link.label) }))}
              image={{
                url: t(image.url),
                url2x: image.url2x && t(image.url2x),
              }}
            />
          ))}
          <StyledFeatureButtons>
            <Button
              id="features-register-a-free-account"
              as="a"
              href="/docspace-registration.aspx"
              label={t("RegisterAFreeAccount")}
            />
            <Button
              id="features-try-on-premise"
              as="a"
              href="/download.aspx#docspace-enterprise"
              variant="secondary"
              label={t("TryOnPremise")}
            />
          </StyledFeatureButtons>
        </StyledFeaturesWrapper>
      </Container>
    </Section>
  );
};

export { Features };
