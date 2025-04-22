import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { FeatureSwitcher } from "@src/components/widgets/FeatureSwitcher";
import { switcher } from "./data/switcher";
import {
  StyledExamplesHeading,
  StyledExamplesLogo,
  StyledExamplesLogosWrapper,
} from "./Examples.styled";
import { logos } from "./data/logos";

const Examples = () => {
  const { t } = useTranslation("conversion-api");
  return (
    <Section tabletSmallSpacing={["88px", "88px"]}>
      <Container>
        <StyledExamplesHeading
          level={2}
          label={t("ExploreExamples")}
          textAlign="center"
        />
        <StyledExamplesLogosWrapper>
          {logos.map(({ id, className, link }) => (
            <StyledExamplesLogo
              key={id}
              href={link}
              className={className}
              aria-label={id}
            />
          ))}
        </StyledExamplesLogosWrapper>

        <FeatureSwitcher
          imageHeight={500}
          items={switcher.map(({ label, image }) => ({
            label: t(String(label)),
            image: {
              url: t(image.url),
              url2x: image.url2x ? t(image.url2x) : undefined,
            },
          }))}
          heading={t("OOConversionApuTitle")}
        />
      </Container>
    </Section>
  );
};

export { Examples };
