import { useTranslation, Trans } from "next-i18next";
import {
  StyledFeaturesWrapper,
  StyledFeaturesItems,
  StyledSection,
} from "./Features.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { FeatureItem } from "@src/components/widgets/FeatureItem";
import { Button } from "@src/components/ui/Button";
import { items } from "./data/items";

const Features = () => {
  const { t } = useTranslation("office-for-drupal");

  const scrollToBlock = () => {
    const element = document.getElementById("how-to-start");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <StyledSection>
      <Container>
        <StyledFeaturesWrapper>
          <Heading level={2} textAlign="center" label={t("WhyOO")} />

          <StyledFeaturesItems>
            {items.map((item, index) => (
              <FeatureItem
                key={index}
                maxWidth="352px"
                icon={{
                  url: item.icon.url,
                  positionX: item.icon.positionX,
                  isSprite: true,
                }}
                text={
                  <Trans
                    t={t}
                    i18nKey={String(item.text)}
                    components={[<b key="0" />]}
                  />
                }
              />
            ))}
          </StyledFeaturesItems>

          <Button
            variant="secondary"
            onClick={scrollToBlock}
            id="features-get-started"
            label={t("GetStarted")}
          />
        </StyledFeaturesWrapper>
      </Container>
    </StyledSection>
  );
};

export { Features };
