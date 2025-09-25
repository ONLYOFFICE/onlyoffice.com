import { useTranslation, Trans } from "next-i18next";
import { StyledDocSpaceHeading } from "./DocSpaceApp.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { FeatureSwitcher } from "@src/components/widgets/FeatureSwitcher";
import { websiteItems, accountItems } from "./data/items";

import { getAssetUrl } from "@utils/getAssetUrl";
const DocSpaceApp = () => {
  const { t } = useTranslation("office-for-drupal");

  return (
    <section>
      <Section
        as="div"
        tabletSpacing={["88px", "40px"]}
        tabletSmallSpacing={["80px", "40px"]}
      >
        <Container>
          <StyledDocSpaceHeading level={2} textAlign="center">
            <Trans
              t={t}
              i18nKey="WorkWithinConnector"
              components={[<Text as="span" color="#FF6F3D" key="0" />]}
            />
          </StyledDocSpaceHeading>

          <FeatureSwitcher
            heading={t("DocumentsScreen1Header")}
            items={websiteItems.map(({ label, badge, image }) => ({
              label: (
                <>
                  {t(String(label))}{" "}
                  {badge && (
                    <Text
                      as="span"
                      fontSize="11px"
                      lineHeight="1"
                      color="main"
                      verticalAlign="super"
                      label={t("soon")}
                    />
                  )}
                </>
              ),
              image: {
                url: getAssetUrl(t(image.url)),
                url2x: image.url2x ? getAssetUrl(t(image.url2x)) : undefined,
              },
            }))}
          />
        </Container>
      </Section>

      <Section
        as="div"
        desktopSpacing={["40px", "112px"]}
        tabletSpacing={["40px", "88px"]}
        tabletSmallSpacing={["40px", "80px"]}
        mobileSpacing={["0px", "48px"]}
      >
        <Container>
          <FeatureSwitcher
            heading={t("DocumentsScreen2Header")}
            position="right"
            items={accountItems.map(({ label, image }) => ({
              label: t(String(label)),
              image: {
                url: getAssetUrl(t(image.url)),
                url2x: image.url2x ? getAssetUrl(t(image.url2x)) : undefined,
              },
            }))}
          />
        </Container>
      </Section>
    </section>
  );
};

export { DocSpaceApp };
