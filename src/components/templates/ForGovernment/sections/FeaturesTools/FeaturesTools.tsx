import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { Trans, useTranslation } from "next-i18next";
import {
  StyledFeaturesHeader,
  StyledFeaturesItems,
  StyledReasonsWrapper,
  StyledReasonsContent,
  StyledReasonsList,
  StyledFeaturesText
} from "./FeaturesTools.styled";
import { featureItems } from "./data/items";
import { FeatureItem } from "@src/components/widgets/FeatureItem";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const items = [
  { label: "AdvancedSetOfEditingTools" },
  { label: "EnhancedSecurityOptions" },
  { label: "PriorityAccessToSecurity" },
  { label: "EasilyScalable" },
  { label: "FreeTrialLifetimeLicense" },
];

const FeaturesTools = () => {
  const { t } = useTranslation("for-government");

  return (
    <Section>
      <Container>
        <Heading level={1} size={3} textAlign="center" label={t("FeaturesToolsHeading")} />
        <StyledFeaturesHeader>
          <Heading level={2} size={1} label="1" />
          <Heading level={3} size={4} label={t("FeaturesToolsHead")} />
        </StyledFeaturesHeader>

        <StyledFeaturesItems>
            {featureItems.map((item, index) => (
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

        <StyledFeaturesHeader>
          <Heading level={2} size={1} label="2" />
          <Heading level={3} size={4} label={t("FeaturesToolsHead2")} />
        </StyledFeaturesHeader>
        <StyledReasonsWrapper>
          <img src='/images/templates/for-government/features_tools/ui_experience.svg' alt="Image" />
          <StyledReasonsContent>
            <Text label={t("FeaturesToolsText")} />
          </StyledReasonsContent>
        </StyledReasonsWrapper>

        <StyledFeaturesHeader>
          <Heading level={2} size={1} label="3" />
          <Heading level={3} size={4} label={t("FeaturesToolsHead3")} />
        </StyledFeaturesHeader>
        <StyledFeaturesText textAlign="center" label={t("FeaturesToolsTitle")} className="desktop" />
        <StyledReasonsWrapper>
          <img src='/images/templates/for-government/features_tools/ui_enterprise.svg' alt="Image" />
          <StyledReasonsContent>
            <StyledFeaturesText textAlign="center" label={t("FeaturesToolsTitle")} className="mobile" />
            <StyledReasonsList>
              {items.map((item, index) => (
                <li key={index}>{t(item.label)}</li>
              ))}
            </StyledReasonsList>
          </StyledReasonsContent>
        </StyledReasonsWrapper>
      </Container>
    </Section>
  );
};

export { FeaturesTools };
