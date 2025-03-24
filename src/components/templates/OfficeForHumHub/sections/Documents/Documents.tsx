import { useTranslation } from "next-i18next";
import { StyledDocumentsHeading, StyledDocumentBtn } from "./Documents.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { FeatureSwitcher } from "@src/components/widgets/FeatureSwitcher";
import { Button } from "@src/components/ui/Button";
import { items } from "./data/items";

const Documents = () => {
  const { t } = useTranslation("office-for-humhub");

  const scrollToBlock = () => {
    const element = document.getElementById("how-to-start");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section bgColor="#ffffff">
      <Container>
        <StyledDocumentsHeading
          level={2}
          label={t("WorkWithinConnector")}
          textAlign="center"
        />

        <FeatureSwitcher
          imageHeight={403}
          imageWidth={736}
          items={items.map(({ label, images }) => ({
            label: t(String(label)),
            images: {
              url: t(images.url),
              url2x: images.url2x ? t(images.url2x) : undefined,
            },
          }))}
        />

        <StyledDocumentBtn>
          <Button
            onClick={scrollToBlock}
            id="documents-get-started"
            label={t("GetStarted")}
          />
        </StyledDocumentBtn>
      </Container>
    </Section>
  );
};

export { Documents };
