import { useTranslation, Trans } from "next-i18next";
import { StyledDocsHeading, StyledDocsLinkWrapper } from "./Docs.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { FeatureSwitcher } from "@src/components/widgets/FeatureSwitcher";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { items } from "./data/items";

const Docs = () => {
  const { t } = useTranslation("main");

  return (
    <Section
      desktopSpacing={["112px", "56px"]}
      tabletSpacing={["80px", "56px"]}
      tabletSmallSpacing={["80px", "56px"]}
      mobileSpacing={["48px", "32px"]}
    >
      <Container maxWidth="1240px">
        <StyledDocsHeading level={2} size={2}>
          <Trans
            t={t}
            i18nKey="OODocsTheMostCompleteOfficeSuite"
            components={[<Text as="span" color="main" key="0" />]}
          />
        </StyledDocsHeading>

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

        <StyledDocsLinkWrapper>
          <Link
            id="docs-learn-more"
            href="/office-suite"
            label={t("LearnMoreAboutOODocsFeatures")}
            fontSize="16px"
            lineHeight="26px"
            color="main"
            textUnderline
            hover="underline-none"
          />
        </StyledDocsLinkWrapper>
      </Container>
    </Section>
  );
};

export { Docs };
