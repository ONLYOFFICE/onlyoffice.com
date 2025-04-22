import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { FeatureSwitcher } from "@src/components/widgets/FeatureSwitcher";
import { items } from "./data/items";

const Account = () => {
  const { t } = useTranslation("office-for-drupal");

  return (
    <Section
      desktopSpacing={["40px", "112px"]}
      tabletSpacing={["40px", "88px"]}
      tabletSmallSpacing={["0px", "80px"]}
      mobileSpacing={["0px", "48px"]}
    >
      <Container>
        <FeatureSwitcher
          position="right"
          items={items.map(({ label, image }) => ({
            label: t(String(label)),
            image: {
              url: t(image.url),
              url2x: image.url2x ? t(image.url2x) : undefined,
            },
          }))}
          heading={t("DocumentsScreen2Header")}
        />
      </Container>
    </Section>
  );
};

export { Account };
