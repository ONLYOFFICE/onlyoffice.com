import { useTranslation, Trans } from "next-i18next";
import {
  StyledCommunityHeading,
  StyledCommunityButton,
} from "./Community.styled";
import { FeatureSwitcher } from "@src/components/widgets/FeatureSwitcher";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { items } from "./data/items";

const Community = () => {
  const { t } = useTranslation("office-for-odoo");

  return (
    <Section bgColor="#f9f9f9">
      <Container>
        <StyledCommunityHeading level={2} textAlign="center">
          <Trans
            t={t}
            i18nKey="EditDocumentsAttachedOrUploaded"
            components={[<Text as="span" color="main" key="0" />]}
          />
        </StyledCommunityHeading>

        <FeatureSwitcher
          items={items.map(({ label, images }) => ({
            label: t(String(label)),
            images: {
              url: t(images.url),
              url2x: images.url2x ? t(images.url2x) : undefined,
            },
          }))}
          customButton={
            <StyledCommunityButton
              id="community-request-free-demo"
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

export { Community };
