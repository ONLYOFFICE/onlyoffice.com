import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import {
  StyledButtonWrapper,
  StyledDocsFeatures,
  StyledDocsHeading,
  StyledDocsText,
} from "./Docs.styled";
import { Text } from "@src/components/ui/Text";
import { Trans, useTranslation } from "next-i18next";
import { FeatureImageItem } from "@src/components/widgets/FeatureImageItem";
import { items } from "./data/items";
import { Link } from "@src/components/ui/Link";
import { Button } from "@src/components/ui/Button";
import { Fit } from "./sub-components/Fit/Fit";
import React from "react";

const Docs = () => {
  const { t } = useTranslation("office-for-educators");

  return (
    <Section
      desktopSpacing={["124px", "124px"]}
      tabletSmallSpacing={["72px", "72px"]}
    >
      <Container>
        <StyledDocsHeading
          level={2}
          label={
            <Trans
              t={t}
              i18nKey={"OODocsTitle"}
              components={[<Text as="span" color="#FF6F3D" key="0" />]}
            />
          }
        />
        <StyledDocsText label={t("OODocsDesc")} />
        <Fit />
        <StyledDocsFeatures>
          {items.map(({ title, text, links, image, ...props }, index) => (
            <FeatureImageItem
              key={index}
              {...props}
              title={t(title)}
              position={index % 2 === 1 ? "left" : "right"}
              isTextHtml={index === items.length - 1}
              text={
                Array.isArray(text) ? (
                  text.map((item, index) => (
                    <span key={index}>
                      {
                        <Trans
                          key={index}
                          t={t}
                          i18nKey={String(item)}
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
                    </span>
                  ))
                ) : (
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
                )
              }
              image={{
                url: t(image.url),
                url2x: image.url2x && t(image.url2x),
                height: image.height,
              }}
            />
          ))}
        </StyledDocsFeatures>
        <StyledButtonWrapper>
          <Button
            id="docs-start-free-trial"
            as="a"
            href="/download#docs-enterprise"
            label={t("StartFreeTrial")}
          />
          <Button
            id="docs-request-free-demo"
            as="a"
            href="/demo-order"
            label={t("RequestFreeDemo")}
            variant="secondary"
          />
        </StyledButtonWrapper>
      </Container>
    </Section>
  );
};

export { Docs };
