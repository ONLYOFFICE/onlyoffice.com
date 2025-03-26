import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { FeatureSwitcher } from "@src/components/widgets/FeatureSwitcher";
import { items } from "./data/items";

const Account = () => {
  const { t } = useTranslation("office-for-drupal");

  return (
    <Section desktopSpacing={["40px", "112px"]}>
      <Container>
        <FeatureSwitcher
          position="right"
          items={items.map(({ label, images }) => ({
            label: t(String(label)),
            images: {
              url: t(images.url),
              url2x: images.url2x ? t(images.url2x) : undefined,
            },
          }))}
          header={t("DocumentsScreen2Header")}
        />
      </Container>
    </Section>
  );
};

export { Account };
