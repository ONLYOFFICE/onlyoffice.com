import { useTranslation, Trans } from "next-i18next";
import {
  StyledFeaturesWrapper,
  StyledFeaturesItems,
  StyledHeaderWrapper,
} from "./Features.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { FeatureItem } from "@src/components/widgets/FeatureItem";
import { Button } from "@src/components/ui/Button";
import { items } from "./data/items";
import { Text } from "@src/components/ui/Text";

const Features = () => {
  const { t } = useTranslation("office-for-redmine");

  const scrollToBlock = () => {
    const element = document.getElementById("how-to-start");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section tabletSmallSpacing={["88px", "88px"]}>
      <Container>
        <StyledFeaturesWrapper>
          <StyledHeaderWrapper>
            <Heading level={2} textAlign="center" label={t("WhyOO")} />
            <Text size={1} textAlign="center" label={t("WhySubheader")} />
          </StyledHeaderWrapper>

          <StyledFeaturesItems>
            {items.map((item, index) => (
              <FeatureItem
                key={index}
                maxWidth="256px"
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
    </Section>
  );
};

export { Features };
