import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { Trans, useTranslation } from "next-i18next";
import {
  StyledFeaturesHeader,
  StyledFeaturesItems,
} from "./FeaturesTools.styled";
import { items } from "./data/items";
import { FeatureItem } from "@src/components/widgets/FeatureItem";
import { Heading } from "@src/components/ui/Heading";

const FeaturesTools = () => {
  const { t } = useTranslation("for-research");

  return (
    <Section background="#F9F9F9">
      <Container>
        <StyledFeaturesHeader>
          <Heading level={2} size={1} label="2" />
          <Heading level={3} size={4} label={t("FeaturesToolsHead")} />
        </StyledFeaturesHeader>

        <StyledFeaturesItems>
            {items.map((item, index) => (
              <FeatureItem
                key={index}
                maxWidth="320px"
                icon={{
                  url: item.icon.url,
                  positionX: item.icon.positionX,
                  isSprite: true,
                }}
                heading={
                  <Trans
                    t={t}
                    i18nKey={String(item.heading)}
                    components={[<b key="0" />]}
                  />
                }
                text={
                  <Trans
                    t={t}
                    i18nKey={String(item.text)}
                    components={[<b key="0" />]}
                  />
                }
                link={
                  item.link
                    ? {
                        ...item.link,
                        label: t(item.link.label),
                      }
                    : undefined
                }
              />
            ))}
          </StyledFeaturesItems>
      </Container>
    </Section>
  );
};

export { FeaturesTools };
