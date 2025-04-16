import { useTranslation, Trans } from "next-i18next";
import { Heading } from "@src/components/ui/Heading";
import {
  StyledFeaturesItems,
  StyledFeaturesWrapper,
} from "./Features.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { items } from "./data/items";
import { FeatureItem } from "@src/components/widgets/FeatureItem";
import { Button } from "@src/components/ui/Button";

const Features = () => {
  const { t } = useTranslation("office-for-pipedrive");

  const scrollToBlock = () => {
    const element = document.getElementById("how-to-start");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section>
      <Container>
        <StyledFeaturesWrapper>
          <Heading
            level={2}
            textAlign="center"
            label={t("WhyOO")}
          />

          <StyledFeaturesItems>
            {items.map((item, index) => (
              <FeatureItem
                icon={{
                  url: item.icon.url,
                  positionX: item.icon.positionX,
                  positionY: "center",
                }}
                text={
                  <Trans
                    t={t}
                    i18nKey={String(item.text)}
                    components={[<b key="0" />]}
                  />
                }
                key={index}
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
