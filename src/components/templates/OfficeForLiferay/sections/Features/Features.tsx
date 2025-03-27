import { useTranslation, Trans } from "next-i18next";
import { StyledFeaturesWrapper, StyledFeaturesItems } from "./Features.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { FeatureItem } from "@src/components/widgets/FeatureItem";
import { Button } from "@src/components/ui/Button";
import { items } from "./data/items";

const Features = () => {
  const { t } = useTranslation("office-for-liferay");

  const scrollToBlock = () => {
    const element = document.getElementById("how-to-start");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section>
      <Container>
        <StyledFeaturesWrapper>
          <Heading level={2} textAlign="center" label={t("WhyOO")} />

          <StyledFeaturesItems>
            {items.map((item, index) => (
              <FeatureItem
                key={index}
                icon={{
                  url: item.icon.url,
                  positionX: item.icon.positionX,
                }}
                heading={
                  <Trans
                    t={t}
                    i18nKey={String(item.heading)}
                    components={[<b key="0" />]}
                  />
                }
              />
            ))}
          </StyledFeaturesItems>

          <Button
            onClick={scrollToBlock}
            id="features-get-started"
            label={t("GetStarted")}
          />
        </StyledFeaturesWrapper>
      </Container>
    </Section>
  );
};

export { Features };
