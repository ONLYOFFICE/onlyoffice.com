import { useTranslation, Trans } from "next-i18next";
import { StyledWebsiteHeading } from "./Website.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { FeatureSwitcher } from "@src/components/widgets/FeatureSwitcher";
import { items } from "./data/items";
import { Text } from "@src/components/ui/Text";

const Website = () => {
  const { t } = useTranslation("office-for-wordpress");

  return (
    <Section>
      <Container>
        <StyledWebsiteHeading
          level={2}
          textAlign="center"
        >
          <Trans
            t={t}
            i18nKey="DocspaceAppTitle"
            components={[<Text as="span" color="#FF6F3D" key="0" />]}
          />
        </StyledWebsiteHeading>

        <FeatureSwitcher
          imageHeight={550}
          items={items.map(({ label, image }) => ({
            label: t(String(label)),
            image: {
              url: t(image.url),
              url2x: image.url2x ? t(image.url2x) : undefined,
            },
          }))}
          heading={t("DocspaceAppHeader")}
        />
      </Container>
    </Section>
  );
};

export { Website };
