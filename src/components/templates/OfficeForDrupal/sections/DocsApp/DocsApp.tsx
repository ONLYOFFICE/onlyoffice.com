import { useTranslation, Trans } from "next-i18next";
import {
  StyledDocsAppHeading,
  StyledDocsAppBtnWrapper,
} from "./DocsApp.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";
import { FeatureSwitcher } from "@src/components/widgets/FeatureSwitcher";
import { items } from "./data/items";

const DocsApp = () => {
  const { t } = useTranslation("office-for-drupal");

  const scrollToBlock = () => {
    const element = document.getElementById("how-to-start");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <Section>
      <Container>
        <StyledDocsAppHeading level={2} textAlign="center">
          <Trans
            t={t}
            i18nKey="WorkWithinConnector"
            components={[<Text as="span" color="#FF6F3D" key="0" />]}
          />
        </StyledDocsAppHeading>

        <FeatureSwitcher
          items={items.map(({ label, image }) => ({
            label: t(String(label)),
            image: {
              url: t(image.url),
              url2x: image.url2x ? t(image.url2x) : undefined,
            },
          }))}
          header={t("DocsAppHeader")}
        />

        <StyledDocsAppBtnWrapper>
          <Button
            id="docs-app-get-started"
            onClick={scrollToBlock}
            label={t("GetStarted")}
          />
        </StyledDocsAppBtnWrapper>
      </Container>
    </Section>
  );
};

export { DocsApp };
