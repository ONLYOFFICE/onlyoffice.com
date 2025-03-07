import { useTranslation } from "next-i18next";
import {
  StyledDocumentsHeading,
  StyledDocumentsBtnWrapper,
} from "./Documents.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { FeatureSwitcher } from "@src/components/widgets/FeatureSwitcher";
import { Button } from "@src/components/ui/Button";
import { items } from "./data/items";

const Documents = () => {
  const { t } = useTranslation("office-for-owncloud");

  return (
    <Section bgColor="#f9f9f9">
      <Container>
        <StyledDocumentsHeading
          level={2}
          label={t("EditAndCoAuthorOfficeDocuments")}
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

        <StyledDocumentsBtnWrapper>
          <Button
            id="documents-get-it-now"
            as="a"
            href="/download?from=officeforowncloud#docs-enterprise"
            label={t("GetItNow")}
          />
        </StyledDocumentsBtnWrapper>
      </Container>
    </Section>
  );
};

export { Documents };
