import { Trans, useTranslation } from "next-i18next";
import {
  StyledHeroHeading,
  StyledHeroSubHeading,
  StyledHeroItems,
} from "./Hero.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { FeatureConnectorCard } from "./sub-components/FeatureConnectorCard";
import { featuredConnectors } from "./data/featuredConnectors";
import { getAssetUrl } from "@utils/getAssetUrl";

const Hero = () => {
  const { t } = useTranslation("all-connectors");

  return (
    <Section desktopSpacing={["80px", "112px"]}>
      <Container>
        <StyledHeroHeading level={1} size={3} textAlign="center">
          <Trans
            t={t}
            i18nKey={"IntegrateOODocsOrDocSpace"}
            components={[
              <Text as="span" color="main" key={0} />,
              <Text as="span" color="main" key={1} />,
            ]}
          />
        </StyledHeroHeading>

        <StyledHeroSubHeading
          level={4}
          label={t("FeaturedConnectors")}
          textAlign="center"
        />

        <StyledHeroItems>
          {featuredConnectors.map((connector, index) => (
            <FeatureConnectorCard
              key={index}
              url={connector.url}
              image={{
                url: getAssetUrl(connector.image.url),
                bgColor: connector.image.bgColor,
              }}
              heading={connector.heading}
              text={t(connector.text)}
              isNew={connector.isNew}
            />
          ))}
        </StyledHeroItems>
      </Container>
    </Section>
  );
};

export { Hero };
