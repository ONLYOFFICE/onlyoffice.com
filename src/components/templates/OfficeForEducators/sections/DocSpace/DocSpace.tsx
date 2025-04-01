import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import {
  StyledButtonWrapper,
  StyledDocSpaceFeatures,
  StyledDocSpaceHeading,
  StyledDocSpaceText,
} from "./DocSpace.styled";
import { Text } from "@src/components/ui/Text";
import { Trans, useTranslation } from "next-i18next";
import { FeatureImageItem } from "@src/components/widgets/FeatureImageItem";
import { items } from "./data/items";
import { Link } from "@src/components/ui/Link";
import { Button } from "@src/components/ui/Button";
import { FreeCloud } from "./sub-components/FreeCloud";

const DocSpace = () => {
  const { t } = useTranslation("office-for-educators");

  return (
    <Section
      background="#F9F9F9"
      desktopSpacing={["124px", "124px"]}
      tabletSmallSpacing={["72px", "72px"]}
    >
      <Container>
        <StyledDocSpaceHeading level={2}>
          <Trans
            t={t}
            i18nKey={"OODocSpaceTitle"}
            components={[<Text as="span" color="#FF6F3D" key="0" />]}
          />
        </StyledDocSpaceHeading>
        <StyledDocSpaceText label={t("OODocSpaceTitleDesc")} />
        <StyledDocSpaceFeatures>
          {items.map(({ title, text, links, image, ...props }, index) => (
            <FeatureImageItem
              key={index}
              {...props}
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
                height: image.height,
              }}
            />
          ))}
        </StyledDocSpaceFeatures>
        <StyledButtonWrapper>
          <Button
            id="docs-get-started"
            as="a"
            href="/docspace-registration"
            label={t("GetStarted")}
          />
        </StyledButtonWrapper>
        <FreeCloud />
      </Container>
    </Section>
  );
};

export { DocSpace };
