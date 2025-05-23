import { useTranslation } from "next-i18next";
import { StyledDocumentsHeading, StyledDocumentBtn } from "./Documents.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { FeatureSwitcher } from "@src/components/widgets/FeatureSwitcher";
import { Button } from "@src/components/ui/Button";
import { items } from "./data/items";

const Documents = () => {
  const { t } = useTranslation("office-for-liferay");

  return (
    <Section background="#f9f9f9">
      <Container>
        <StyledDocumentsHeading
          level={2}
          label={t("WorkWithinConnector")}
          textAlign="center"
        />

        <FeatureSwitcher
          imageHeight={540}
          imageWidth={736}
          items={items.map(({ label, image }) => ({
            label: t(String(label)),
            image: {
              url: t(image.url),
              url2x: image.url2x ? t(image.url2x) : undefined,
            },
          }))}
        />

        <StyledDocumentBtn>
          <Button
            variant="secondary"
            as="a"
            href="/demo-order?from=office-for-liferay"
            id="documents-request-free-demo"
            label={t("RequestFreeDemo")}
          />
        </StyledDocumentBtn>
      </Container>
    </Section>
  );
};

export { Documents };
