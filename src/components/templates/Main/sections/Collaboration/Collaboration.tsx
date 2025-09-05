import { useTranslation, Trans } from "next-i18next";
import {
  StyledCollaborationHeading,
  StyledCollaborationLinkWrapper,
} from "./Collaboration.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { FeatureSwitcher } from "@src/components/widgets/FeatureSwitcher";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { items } from "./data/items";

const Collaboration = () => {
  const { t } = useTranslation("main");

  return (
    <Section
      desktopSpacing={["112px", "56px"]}
      tabletSpacing={["80px", "56px"]}
      tabletSmallSpacing={["80px", "56px"]}
      mobileSpacing={["48px", "32px"]}
    >
      <Container maxWidth="1240px">
        <StyledCollaborationHeading level={2} size={2}>
          <Trans
            t={t}
            i18nKey="DesignedToMakeCollaborationSeamless"
            components={[<Text as="span" color="main" key="0" />]}
          />
        </StyledCollaborationHeading>

        <FeatureSwitcher
          imageWidth={776}
          imageHeight={576}
          items={items.map(({ label, image }) => ({
            label: t(String(label)),
            image: {
              url: t(image.url),
              url2x: image.url2x ? t(image.url2x) : undefined,
            },
          }))}
        />

        <StyledCollaborationLinkWrapper>
          <Link
            id="collaboration-learn-more"
            href="/seamless-collaboration"
            label={t("LearnMoreAboutOOCollaborationFeatures")}
            fontSize="16px"
            lineHeight="26px"
            color="main"
            textUnderline
            hover="underline-none"
          />
        </StyledCollaborationLinkWrapper>
      </Container>
    </Section>
  );
};

export { Collaboration };
