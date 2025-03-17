import { useTranslation } from "next-i18next";
import { StyledDocumentsHeading } from "./Documents.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { FeatureSwitcher } from "@src/components/widgets/FeatureSwitcher";
import { items } from "./data/items";

const Documents = () => {
  const { t } = useTranslation("office-for-dropbox");

  return (
    <Section bg="#f9f9f9">
      <Container>
        <StyledDocumentsHeading
          level={2}
          label={t("WorkOnOfficeDocumentsStored")}
          textAlign="center"
        />

        <FeatureSwitcher
          items={items.map(({ label, images }) => ({
            label: t(label),
            images: {
              url: t(images.url),
              url2x: t(images.url2x),
            },
          }))}
        />
      </Container>
    </Section>
  );
};

export { Documents };
