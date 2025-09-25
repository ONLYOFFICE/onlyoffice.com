import { useTranslation, Trans } from "next-i18next";
import { getAssetUrl } from "@utils/getAssetUrl";
import {
  StyledDocSpaceHeading,
  StyledDocSpaceAppBtnWrapper,
} from "./DocSpaceApp.styled";
import { IDocSpaceApp } from "./DocSpaceApp.types";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";
import { FeatureSwitcher } from "@src/components/widgets/FeatureSwitcher";
import { websiteItems, accountItems } from "./data/items";

const DocSpaceApp = ({ setActiveTab }: IDocSpaceApp) => {
  const { t } = useTranslation("office-for-wordpress");

  const scrollToBlock = () => {
    const element = document.getElementById("how-to-start");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveTab(0);
    }
  };

  return (
    <section>
      <Section as="div">
        <Container>
          <StyledDocSpaceHeading level={2} textAlign="center">
            <Trans
              t={t}
              i18nKey="DocspaceAppTitle"
              components={[<Text as="span" color="#FF6F3D" key="0" />]}
            />
          </StyledDocSpaceHeading>

          <FeatureSwitcher
            heading={t("DocspaceAppHeader")}
            imageHeight={550}
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
        tabletSpacing={["40px", "112px"]}
        tabletSmallSpacing={["0px", "80px"]}
        mobileSpacing={["0px", "48px"]}
      >
        <Container>
          <FeatureSwitcher
            position="right"
            imageHeight={550}
            items={accountItems.map(({ label, image }) => ({
              label: t(String(label)),
              image: {
                url: getAssetUrl(t(image.url)),
                url2x: image.url2x ? getAssetUrl(t(image.url2x)) : undefined,
              },
            }))}
            heading={t("DocspaceAppScreen2Header")}
          />

          <StyledDocSpaceAppBtnWrapper>
            <Button onClick={scrollToBlock} label={t("GetStarted")} />
          </StyledDocSpaceAppBtnWrapper>
        </Container>
      </Section>
    </section>
  );
};

export { DocSpaceApp };
