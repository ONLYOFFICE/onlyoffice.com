import { useTranslation } from "next-i18next";
import { getAssetUrl } from "@utils/getAssetUrl";
import {
  StyledDocumentsHeading,
  StyledDocumentsBtnWrapper,
} from "./Materials.styled";
import { FeatureSwitcher } from "@src/components/widgets/FeatureSwitcher";
import { items } from "./data/items";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Button } from "@src/components/ui/Button";

const Materials = () => {
  const { t } = useTranslation("office-for-moodle");
  const scrollToBlock = () => {
    const element = document.getElementById("how-to-start");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section
      background="#f9f9f9"
      desktopSpacing={["112px", "90px"]}
      mobileSpacing={["48px", "0"]}
    >
      <Container>
        <StyledDocumentsHeading
          level={2}
          label={t("MaterialsTitle")}
          textAlign="center"
        />

        <FeatureSwitcher
          imageHeight={550}
          position="right"
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
            onClick={scrollToBlock}
            id="features-get-started"
            variant="secondary"
            label={t("GetStarted")}
          />
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

export { Materials };
