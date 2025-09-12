import { useTranslation, Trans } from "next-i18next";
import { getAssetUrl } from "@utils/getAssetUrl";
import {
  StyledDocSpaceAppHeader,
  StyledDocSpaceAppHeading,
} from "./DocSpaceApp.styled";
import { IDocSpaceApp } from "./DocSpaceApp.types";
import { FeatureSwitcher } from "@src/components/widgets/FeatureSwitcher";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { Badge } from "@src/components/ui/Badge";
import { items } from "./data/items";
import { Button } from "@src/components/ui/Button";

const DocSpaceApp = ({ setActiveTab }: IDocSpaceApp) => {
  const { t } = useTranslation("office-for-pipedrive");

  const scrollToBlock = () => {
    const element = document.getElementById("how-to-start");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveTab(0);
    }
  };

  return (
    <Section background="#f9f9f9">
      <Container>
        <StyledDocSpaceAppHeader>
          <StyledDocSpaceAppHeading level={2}>
            <Trans
              t={t}
              i18nKey="DocspaceAppTitle"
              components={[<Text as="span" color="main" key="0" />]}
            />
          </StyledDocSpaceAppHeading>
          <Badge label={t("New")} verticalAlign="super" />
        </StyledDocSpaceAppHeader>

        <FeatureSwitcher
          items={items.map(({ label, image }) => ({
            label: t(String(label)),
            image: {
              url: getAssetUrl(t(image.url)),
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
          heading={t("DocspaceAppHeader")}
        />
      </Container>
    </Section>
  );
};

export { DocSpaceApp };
