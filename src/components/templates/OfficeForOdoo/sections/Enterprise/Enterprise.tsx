import { useTranslation, Trans } from "next-i18next";
import {
  StyledEnterpriseHeading,
  StyledEnterpriseButton,
} from "./Enterprise.styled";
import { FeatureSwitcher } from "@src/components/widgets/FeatureSwitcher";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { items } from "./data/items";

const Enterprise = () => {
  const { t } = useTranslation("office-for-odoo");

  return (
    <Section
      bg="#f9f9f9"
      desktopSpacing={["112px", "16px"]}
      tabletSpacing={["88px", "16px"]}
      tabletSmallSpacing={["80px", "16px"]}
      mobileSpacing={["48px", "16px"]}
    >
      <Container>
        <StyledEnterpriseHeading level={2} textAlign="center">
          <Trans
            t={t}
            i18nKey="CreateAndEditOfficeFiles"
            components={[<Text as="span" color="main" key="0" />]}
          />
        </StyledEnterpriseHeading>

        <FeatureSwitcher
          position="right"
          items={items.map(({ label, images }) => ({
            label: t(label),
            images: {
              url: t(images.url),
              url2x: t(images.url2x),
            },
          }))}
          customButton={
            <StyledEnterpriseButton
              id="enterprise-request-free-demo"
              forwardedAs="a"
              href="mailto:sales@onlyoffice.com?subject=Demo%20request:%20Odoo%20Enterprise"
              label={t("RequestFreeDemo")}
            />
          }
        />
      </Container>
    </Section>
  );
};

export { Enterprise };
