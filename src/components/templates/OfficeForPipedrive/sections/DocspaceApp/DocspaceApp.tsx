import { useTranslation, Trans } from "next-i18next";
import {
  StyledDocspaceAppHeader,
  StyledDocspaceAppHeading,
} from "./DocspaceApp.styled";
import { FeatureSwitcher } from "@src/components/widgets/FeatureSwitcher";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { Badge } from "@src/components/ui/Badge";
import { items } from "./data/items";
import { Button } from "@src/components/ui/Button";

const DocspaceApp = () => {
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
        <StyledDocspaceAppHeader>
          <StyledDocspaceAppHeading level={2}>
            <Trans
              t={t}
              i18nKey="DocspaceAppTitle"
              components={[<Text as="span" color="main" key="0" />]}
            />
          </StyledDocspaceAppHeading>
          <Badge label={t("New")} verticalAlign="super" />
        </StyledDocspaceAppHeader>

        <FeatureSwitcher
          items={items.map(({ label, image }) => ({
            label: t(String(label)),
            image: {
              url: t(image.url),
              url2x: image.url2x ? t(image.url2x) : undefined,
            },
          }))}
          customButton={
            <Button
              id="docspace-app-get-started"
              label={t("GetStarted")}
              onClick={() => scrollToBlock()}
            />
          }
          header={t("DocspaceAppHeader")}
        />
      </Container>
    </Section>
  );
};

export { DocspaceApp };
