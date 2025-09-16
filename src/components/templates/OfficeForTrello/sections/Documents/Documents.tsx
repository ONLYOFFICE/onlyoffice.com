import { useTranslation } from "next-i18next";
import { StyledDocumentsHeading, StyledFeatureSwitcher, StyledContainer } from "./Documents.styled";
import { Section } from "@src/components/ui/Section";
import { items } from "./data/items";

import { getAssetUrl } from "@utils/getAssetUrl";
const Documents = () => {
  const { t } = useTranslation("office-for-trello");

  return (
    <Section background="#f9f9f9">
      <StyledContainer>
        <StyledDocumentsHeading
          level={2}
          label={t("WorkWithinConnector")}
          textAlign="center"
        />

        <StyledFeatureSwitcher
          imageHeight={404}
          imageWidth={736}
          items={items.map(({ label, image }) => ({
            label: t(String(label)),
            image: {
              url: getAssetUrl(t(image.url)),
              url2x: image.url2x ? getAssetUrl(t(image.url2x)) : undefined,
            },
          }))}
        />
      </StyledContainer>
    </Section>
  );
};

export { Documents };
