import { useTranslation, Trans } from "next-i18next";
import { getAssetUrl } from "@utils/getAssetUrl";
import {
  StyledFillableFormHeader,
  StyledFillableFormHeading,
  StyledFillableFormButton,
} from "./FillableForm.styled";
import { FeatureSwitcher } from "@src/components/widgets/FeatureSwitcher";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { Badge } from "@src/components/ui/Badge";
import { items } from "./data/items";

const FillableForm = () => {
  const { t } = useTranslation("office-for-odoo");

  return (
    <Section
      background="#f9f9f9"
      desktopSpacing={["112px", "16px"]}
      tabletSpacing={["88px", "16px"]}
      tabletSmallSpacing={["80px", "16px"]}
      mobileSpacing={["48px", "16px"]}
    >
      <Container>
        <StyledFillableFormHeader>
          <StyledFillableFormHeading level={2}>
            <Trans
              t={t}
              i18nKey="WorkWithFillableFormTemplates"
              components={[<Text as="span" color="main" key="0" />]}
            />
          </StyledFillableFormHeading>
          <Badge label={t("New")} verticalAlign="super" />
        </StyledFillableFormHeader>

        <FeatureSwitcher
          items={items.map(({ label, image }) => ({
            label: t(String(label)),
            image: {
              url: getAssetUrl(t(image.url)),
              url2x: image.url2x ? getAssetUrl(t(image.url2x)) : undefined,
            },
          }))}
          customButton={
            <StyledFillableFormButton
              id="fillable-form-watch-now"
              forwardedAs="a"
              href="https://www.youtube.com/watch?v=hlc-XjGCSeQ"
              target="_blank"
              variant="secondary"
              label={t("WatchHowItWorks")}
            />
          }
        />
      </Container>
    </Section>
  );
};

export { FillableForm };
