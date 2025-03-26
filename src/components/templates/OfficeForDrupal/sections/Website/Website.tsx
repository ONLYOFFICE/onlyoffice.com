import { useTranslation, Trans } from "next-i18next";
import { StyledWebsiteHeading } from "./Website.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { FeatureSwitcher } from "@src/components/widgets/FeatureSwitcher";
import { items } from "./data/items";
import { Text } from "@src/components/ui/Text";

const Website = () => {
  const { t } = useTranslation("office-for-drupal");

  return (
    <Section>
      <Container>
        <StyledWebsiteHeading
          level={2}
          textAlign="center"
        >
          <Trans
            t={t}
            i18nKey="WorkWithinConnector"
            components={[<Text as="span" color="#FF6F3D" key="0" />]}
          />
        </StyledWebsiteHeading>

        <FeatureSwitcher
          items={items.map(({ label, images }) => ({
            label: t(String(label)),
            images: {
              url: t(images.url),
              url2x: images.url2x ? t(images.url2x) : undefined,
            },
          }))}
          header={t("DocumentsScreen1Header")}
        />
      </Container>
    </Section>
  );
};

export { Website };
