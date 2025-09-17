import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Button } from "@src/components/ui/Button";
import { items } from "./data/items";

import { getAssetUrl } from "@utils/getAssetUrl";
import {
  StyledFeaturesButtonWrapper,
  StyledFeaturesFeatureImageItem,
  StyledFeaturesHeading,
  StyledFeaturesItem,
  StyledFeaturesItemHeading,
  StyledFeaturesItemText,
  StyledFeaturesLink,
  StyledFeaturesList
} from "./Features.styled";

const Features = () => {
  const { t } = useTranslation("nonprofit-organizations")
  return (
    <Section
      tabletSmallSpacing={["144px", "0"]}
      mobileSpacing={["82px", "0"]}
    >
      <Container
        maxWidth="1280px"
      >
        <StyledFeaturesHeading
          level={2}
          size={3}
          label={t("SeamlessWorkWithDonorsAndSponsors")}
          textAlign="center"
        />
        <StyledFeaturesFeatureImageItem
          contentWidth={550}
          heading={""}
          text={
            <>
              <StyledFeaturesList>
                {items.map((item) => (
                  <StyledFeaturesItem key={item.id}>
                    <StyledFeaturesItemHeading
                      level={3}
                      size={5}
                      label={t(item.heading)}
                    />
                    <StyledFeaturesItemText
                      size={3}
                      label={t(item.description)}
                    />
                  </StyledFeaturesItem>
                ))}
              </StyledFeaturesList>

              <StyledFeaturesButtonWrapper>
                <Button
                  label={t("TryNow")}
                  variant="secondary"
                  as="a"
                  href="/docspace-registration"
                />
                <StyledFeaturesLink
                  label={t("LearnMore")}
                  href="/docspace?from=nonprofit"
                  color="main"
                  textUnderline={true}
                  hover="underline-none"
                />
              </StyledFeaturesButtonWrapper>
            </>
          }
          image={{
            url: getAssetUrl("/images/templates/nonprofit-organizations/features/feature-image.svg")
          }}
          position={{
            desktop: "right",
            mobile: "top",
          }}
        />
      </Container>
    </Section>
  );
};

export { Features };