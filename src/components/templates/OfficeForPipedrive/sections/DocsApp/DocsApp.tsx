import { useTranslation, Trans } from "next-i18next";
import {
  StyledDocsAppHeading,
} from "./DocsApp.styled";
import { FeatureSwitcher } from "@src/components/widgets/FeatureSwitcher";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";
import { items } from "./data/items";

const DocsApp = () => {
  const { t } = useTranslation("office-for-pipedrive");

  const scrollToBlock = () => {
    const element = document.getElementById("how-to-start");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Section
      background="#f9f9f9"
    >
      <Container>
        <StyledDocsAppHeading level={2} textAlign="center">
          <Trans
            t={t}
            i18nKey="DocsAppTitle"
            components={[<Text as="span" color="main" key="0" />]}
          />
        </StyledDocsAppHeading>

        <FeatureSwitcher
          position="right"
          items={items.map(({ label, image }) => ({
            label: t(String(label)),
            image: {
              url: t(image.url),
              url2x: image.url2x ? t(image.url2x) : undefined,
            },
          }))}
          customButton={
            <Button
              id="docs-app-get-started"
              label={t("GetStarted")}
              onClick={() => scrollToBlock()}
            />
          }
          heading={t("DocsAppHeader")}
        />
      </Container>
    </Section>
  );
};

export { DocsApp };
