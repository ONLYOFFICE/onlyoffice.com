import { useTranslation } from "next-i18next";
import { getAssetUrl } from "@utils/getAssetUrl";
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
    <Section background="#f9f9f9">
      <Container>
        <StyledDocumentsHeading
          level={2}
          label={t("EditAndCoAuthorOfficeDocuments")}
          textAlign="center"
        />

        <FeatureSwitcher
          items={items.map(({ label, image }) => ({
            label: t(String(label)),
            image: {
              url: getAssetUrl(t(image.url)),
              url2x: image.url2x ? getAssetUrl(t(image.url2x)) : undefined,
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
