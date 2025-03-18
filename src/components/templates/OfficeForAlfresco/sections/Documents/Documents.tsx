import { useTranslation } from "next-i18next";
import { StyledDocumentsHeading } from "./Documents.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { FeatureSwitcher } from "@src/components/widgets/FeatureSwitcher";
import { items } from "./data/items";

const Documents = () => {
  const { t } = useTranslation("office-for-alfresco");

  return (
    <Section background="#f9f9f9">
      <Container>
        <StyledDocumentsHeading
          level={2}
          label={t("WorkWithOfficeDocuments")}
          textAlign="center"
        />

        <FeatureSwitcher
          items={items.map(({ label, images }) => ({
            label: t(String(label)),
            images: {
              url: t(images.url),
              url2x: images.url2x ? t(images.url2x) : undefined,
            },
          }))}
        />
      </Container>
    </Section>
  );
};

export { Documents };
