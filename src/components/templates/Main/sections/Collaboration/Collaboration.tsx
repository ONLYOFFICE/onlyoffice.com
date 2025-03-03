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
    <Section tabletSpacing={["80px", "112px"]} mobileSpacing={["32px", "48px"]}>
      <Container>
        <StyledCollaborationHeading level={2} size={2}>
          <Trans
            t={t}
            i18nKey="DesignedToMakeCollaborationSeamless"
            components={[<Text as="span" color="main" key="0" />]}
          />
        </StyledCollaborationHeading>

        <FeatureSwitcher
          items={items.map(({ label, images }) => ({
            label: t(label),
            images,
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
