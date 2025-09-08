import { useTranslation, Trans } from "next-i18next";
import {
  StyledAIAssistantsHeading,
  StyledAIAssistantsLinkWrapper,
} from "./AIAssistants.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { FeatureSwitcher } from "@src/components/widgets/FeatureSwitcher";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { items } from "./data/items";

const AIAssistants = () => {
  const { t } = useTranslation("main");

  return (
    <Section
      tabletSpacing={["80px", "112px"]}
      tabletSmallSpacing={["80px", "112px"]}
      mobileSpacing={["32px", "48px"]}
    >
      <Container maxWidth="1240px">
        <StyledAIAssistantsHeading level={2} size={2}>
          <Trans
            t={t}
            i18nKey="EnhancedWithAIPoweredVirtualAssistants"
            components={[<Text as="span" color="main" key="0" />]}
          />
        </StyledAIAssistantsHeading>

        <FeatureSwitcher
          position="right"
          imageWidth={776}
          imageHeight={576}
          items={items.map(({ label, links, image }) => ({
            label: links ? (
              <Trans
                t={t}
                i18nKey={String(label)}
                components={links.map(({ id, url }, index) => (
                  <Link
                    id={id}
                    key={index}
                    href={url}
                    color="main"
                    textUnderline
                    hover="underline-none"
                  />
                ))}
              />
            ) : (
              t(String(label))
            ),
            image: {
              url: t(image.url),
              url2x: image.url2x ? t(image.url2x) : undefined,
            },
          }))}
        />

        <StyledAIAssistantsLinkWrapper>
          <Link
            id="ai-assistants-learn-more"
            href="/ai-assistants"
            label={t("LearnMoreAboutAIAssistantsInOO")}
            fontSize="16px"
            lineHeight="26px"
            color="main"
            textUnderline
            hover="underline-none"
          />
        </StyledAIAssistantsLinkWrapper>
      </Container>
    </Section>
  );
};

export { AIAssistants };
