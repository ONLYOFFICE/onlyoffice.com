import { useTranslation } from "next-i18next";
import {
  StyledDocumentsHeading,
  StyledDocumentsBtnWrapper,
} from "./Documents.styled";
import { FeatureSwitcher } from "@src/components/widgets/FeatureSwitcher";
import { items } from "./data/items";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Button } from "@src/components/ui/Button";

const Documents = () => {
  const { t } = useTranslation("office-for-moodle");

  return (
    <Section
      bgColor="#f9f9f9"
      desktopSpacing={["112px", "90px"]}
      mobileSpacing={["48px", "0"]}
    >
      <Container>
        <StyledDocumentsHeading
          level={2}
          label={t("EditAndCollaborateOnOfficeDocuments")}
          textAlign="center"
        />

        <FeatureSwitcher
          imageHeight={550}
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
            id="documents-free-demo"
            as="a"
            href="mailto:sales@onlyoffice.com?subject=Demo%20request:%20Moodle"
            label={t("ScheduleYourFreeDemo")}
          />
        </StyledDocumentsBtnWrapper>
      </Container>
    </Section>
  );
};

export { Documents };
