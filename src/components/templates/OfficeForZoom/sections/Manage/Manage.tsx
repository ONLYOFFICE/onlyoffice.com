import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { StyledManageHeading } from "./Manage.styled";
import { Container } from "@src/components/ui/Container";
import { FeatureSwitcher } from "@src/components/widgets/FeatureSwitcher";
import { items } from "./data/items";

const Manage = () => {
  const { t } = useTranslation("office-for-zoom");

  return (
    <Section
      desktopSpacing={["0px", "112px"]}
      tabletSpacing={["0px", "112px"]}
      tabletSmallSpacing={["0px", "80px"]}
      mobileSpacing={["0px", "48px"]}
    >
      <Container>
        <StyledManageHeading
          level={2}
          label={t("EfficientlyManageYourDocuments")}
          textAlign="center"
        />
        <FeatureSwitcher
          position="right"
          imageHeight={550}
          items={items.map(({ label, image }) => ({
            label: t(String(label)),
            image: {
              url: t(image.url),
              url2x: image.url2x ? t(image.url2x) : undefined,
            },
          }))}
        />
      </Container>
    </Section>
  );
};

export { Manage };
