import { useTranslation, Trans } from "next-i18next";
import {
  ResourcesContainer,
  ResourcesGrid,
  ResourceCard,
  ResourceIcon,
  ResourceText,
} from "./HelpfulResource.styled";
import { Section } from "@src/components/ui/Section";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { Heading } from "@src/components/ui/Heading";
import { resources } from "./data/items";

const HelpfulResourcesSection = () => {
  const { t } = useTranslation("installation-success-docs-cloud");

  return (
    <Section
      desktopSpacing={["72px", "112px"]}
      tabletSpacing={["72px", "112px"]}
      tabletSmallSpacing={["72px", "80px"]}
      mobileSpacing={["48px", "48px"]}
    >
      <ResourcesContainer>
        <Heading level={2}>
          <Trans
            t={t}
            i18nKey="HelpfulResources"
            components={[<Text as="span" color="main" key="0" />]}
          />
        </Heading>

        <ResourcesGrid>
          {resources.map((item, i) => (
            <ResourceCard key={i}>
              <ResourceIcon $positionX={item.positionX}></ResourceIcon>
              <ResourceText>
                <Trans
                  t={t}
                  i18nKey={item.text}
                  components={[
                    <Link
                      key={0}
                      href={item.linkUrl[0]}
                      color="main"
                      textUnderline
                      hover="underline-none"
                      target="_blank"
                    />,
                    <Link
                      key={1}
                      href={item.linkUrl[1]}
                      color="main"
                      textUnderline
                      hover="underline-none"
                      target="_blank"
                    />,
                  ]}
                />
              </ResourceText>
            </ResourceCard>
          ))}
        </ResourcesGrid>
      </ResourcesContainer>
    </Section>
  );
};

export { HelpfulResourcesSection };
