import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { FeatureSwitcher } from "@src/components/widgets/FeatureSwitcher";
import { items } from "./data/items";

const Account = () => {
  const { t } = useTranslation("office-for-wordpress");

  return (
    <Section desktopSpacing={["40px", "112px"]}>
      <Container>
        <FeatureSwitcher
          position="right"
          imageHeight={550}
          items={items.map(({ label, image }) => ({
            label: t(String(label)),
            image: {
              url: t(image.url),
              url2x: image.url2x ? t(image.url2x) : undefined,
            },
          }))}
          heading={t("DocspaceAppScreen2Header")}
        />
      </Container>
    </Section>
  );
};

export { Account };
