import { useTranslation } from "next-i18next";
import { StyledDocumentsHeading, StyledDocumentBtn, StyledFeatureSwitcher, StyledContainer } from "./Documents.styled";
import { Section } from "@src/components/ui/Section";
import { Button } from "@src/components/ui/Button";
import { items } from "./data/items";

import { getAssetUrl } from "@utils/getAssetUrl";
const Documents = () => {
  const { t } = useTranslation("office-for-liferay");

  return (
    <Section background="#f9f9f9">
      <StyledContainer maxWidth="1200px">
        <StyledDocumentsHeading
          level={2}
          label={t("WorkWithinConnector")}
          textAlign="center"
        />

        <StyledFeatureSwitcher
          imageHeight={540}
          imageWidth={736}
          items={items.map(({ label, image }) => ({
            label: t(String(label)),
            image: {
              url: getAssetUrl(t(image.url)),
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
      </StyledContainer>
    </Section>
  );
};

export { Documents };
