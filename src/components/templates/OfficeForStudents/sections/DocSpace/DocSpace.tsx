import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import {
  StyledDesktopEditorsHeading,
  StyledDesktopEditorsText,
  StyledDesktopEditorsFeatures,
  StyledButtonWrapper,
} from "./DocSpace.styled";
import { Text } from "@src/components/ui/Text";
import { items } from "./data/items";
import { Link } from "@src/components/ui/Link";
import { Button } from "@src/components/ui/Button";
import { FeatureImageItem } from "@src/components/widgets/FeatureImageItem";

const DocSpace = () => {
  const { t } = useTranslation("office-for-students");

  return (
    <Section
      desktopSpacing={["124px", "124px"]}
      tabletSpacing={["124px", "124px"]}
      tabletSmallSpacing={["72px", "72px"]}
      background="#F9F9F9"
    >
      <Container>
        <StyledDesktopEditorsHeading level={2} size={2}>
          <Trans
            t={t}
            i18nKey={"OODocSpaceTitle"}
            components={[<Text as="span" color="#FF6F3D" key="0" />]}
          />
        </StyledDesktopEditorsHeading>
        <StyledDesktopEditorsText label={t("OODocSpaceDesc")} />

        <StyledDesktopEditorsFeatures>
          {items.map(({ title, text, links, image }, index) => (
            <FeatureImageItem
              key={index}
              title={t(title)}
              position={index % 2 === 1 ? "right" : "left"}
              text={
                <Trans
                  t={t}
                  i18nKey={String(text)}
                  components={links?.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      target={link.isExternal ? "_blank" : undefined}
                      color="main"
                      textUnderline
                      hover="underline-none"
                    />
                  ))}
                />
              }
              image={{
                url: t(image.url),
                url2x: image.url2x && t(image.url2x),
              }}
            />
          ))}
        </StyledDesktopEditorsFeatures>

        <StyledButtonWrapper>
          <Button
            as="a"
            href="docspace-registration"
            label={t("CreateFreeAccount")}
          />
        </StyledButtonWrapper>
      </Container>
    </Section>
  );
};

export { DocSpace };
