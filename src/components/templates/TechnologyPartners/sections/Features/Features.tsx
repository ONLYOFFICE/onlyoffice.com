import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { Trans, useTranslation } from "next-i18next";
import { Text } from "@src/components/ui/Text";
import {
  ButtonGroup,
  StyledFeatureItem,
  StyledFeaturesHeader,
  StyledFeaturesHeading,
  StyledFeaturesList,
  StyledFeaturesText,
  StyledLink,
  StyledText,
} from "./Features.styled";
import { Heading } from "@src/components/ui/Heading";
import { Button } from "@src/components/ui/Button";
import { items } from "./data/items";
import { getLink } from "@src/utils/getLink";
import { ILocale } from "@src/types/locale";

const Features = ({ locale }: ILocale) => {
  const { t } = useTranslation("technology-partners");

  return (
    <Section
      background="#f5f5f5"
      desktopSpacing={["168px", "0px"]}
      tabletSpacing={["136px", "0px"]}
      tabletSmallSpacing={["136px", "0"]}
      mobileSpacing={["112px", "0"]}
      id="part-software"
    >
      <Container>
        <StyledFeaturesHeader>
          <Heading level={2} size={2}>
            <Trans
              t={t}
              i18nKey={"Software"}
              components={[<Text as="span" color="#FF6F3D" key="0" />]}
            />
          </Heading>
          <StyledFeaturesText size={1} label={t("BuildCreate")} />
        </StyledFeaturesHeader>
        <StyledFeaturesList>
          {items.map((item, idx) => (
            <StyledFeatureItem key={idx}>
              <StyledFeaturesHeading>{t(item.title)}</StyledFeaturesHeading>
              <StyledText>{t(item.description)}</StyledText>
              <StyledLink
                href={
                  item.linkUrl === "/app-directory"
                    ? getLink("marketplace", locale)
                    : item.linkUrl
                }
                label={t(item.linkText)}
                target={
                  item.target as
                    | "_blank"
                    | "_self"
                    | "_top"
                    | "_parent"
                    | undefined
                }
                color="main"
                textUnderline
                fontWeight={400}
                display="block"
              />
              <ButtonGroup>
                <Button
                  className="btn-primary"
                  as="a"
                  href={item.btnLinkPrimary}
                  variant="primary"
                >
                  {t(item.button1Text)}
                </Button>
                <Button
                  className="btn-tertiary"
                  as="a"
                  href={item.btnLinkTertiary}
                  variant="tertiary"
                >
                  {t(item.button2Text)}
                </Button>
              </ButtonGroup>
            </StyledFeatureItem>
          ))}
        </StyledFeaturesList>
      </Container>
    </Section>
  );
};

export { Features };
