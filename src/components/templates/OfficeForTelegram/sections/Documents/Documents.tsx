import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Button } from "@src/components/ui/Button";
import { FeatureSwitcher } from "@src/components/widgets/FeatureSwitcher";
import { items } from "./data/items";

const Documents = () => {
  const { t } = useTranslation("office-for-telegram");

  return (
    <Section>
      <Container>
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
              as="a"
              id="hero-get-started"
              label={t("StartNow")}
              href="https://t.me/ONLYOFFICE_bot"
            />
          }
        />
      </Container>
    </Section>
  );
};

export { Documents };
