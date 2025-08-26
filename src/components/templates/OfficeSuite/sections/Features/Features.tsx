import { useTranslation, Trans } from "next-i18next";
import { items } from "./data/items";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { StyledFeaturesWrapper, StyledSubHeading } from "./Features.styled";
import { FeatureImageItem } from "@src/components/widgets/FeatureImageItem";
import { useRouter } from "next/router";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";

const Features = () => {
  const { t } = useTranslation("office-suite");
  const { locale } = useRouter();

  return (
    <Section
      desktopSpacing={["112px", "124px"]}
      tabletSmallSpacing={["88px", "88px"]}
    >
      <Container>
        <Heading level={1} color="#333333" textAlign="center">
          <Trans t={t} i18nKey="NumberOne" />
        </Heading>
        <StyledSubHeading size={2} textAlign="center">
          <Trans
            t={t}
            i18nKey="Designed"
            components={[
              <Link
                key={0}
                href="/accessibility"
                target="_blank"
                color="main"
                textUnderline
                hover="underline-none"
              />,
            ]}
          />
        </StyledSubHeading>
        <StyledFeaturesWrapper>
          {items.map((item, index) => (
            <FeatureImageItem
              fontSize="14px"
              key={index}
              contentWidth={item.contentWidth}
              heading={t(String(item.heading))}
              rowGap={16}
              gap={item.gap}
              marginTop={item.marginTop}
              text={
                item.heading === "Create" ? (
                  <Trans
                    t={t}
                    i18nKey="CreateText"
                    components={[
                      <Link
                        key={0}
                        href="/document-editor"
                        color="main"
                        textUnderline
                        hover="underline-none"
                      />,
                      <Link
                        key={1}
                        href="/spreadsheet-editor"
                        color="main"
                        textUnderline
                        hover="underline-none"
                      />,
                      <Link
                        key={2}
                        href="/presentation-editor"
                        color="main"
                        textUnderline
                        hover="underline-none"
                      />,
                      <Link
                        key={3}
                        href="/form-creator"
                        color="main"
                        textUnderline
                        hover="underline-none"
                      />,
                      <Link
                        key={4}
                        href="/pdf-editor"
                        color="main"
                        textUnderline
                        hover="underline-none"
                      />,
                      <Link
                        key={5}
                        href="/e-book"
                        color="main"
                        textUnderline
                        hover="underline-none"
                      />,
                      <Link
                        key={6}
                        href="/diagram-viewer"
                        color="main"
                        textUnderline
                        hover="underline-none"
                      />,
                    ]}
                  />
                ) : (
                  <>
                    {t(String(item.text))}
                    {item.heading === "Customize" && (
                      <>
                        <br />
                        <br />
                        {t("SwitchToDark")}
                      </>
                    )}
                  </>
                )
              }
              position={{ desktop: index % 2 === 1 ? "right" : "left" }}
              links={item.links?.map((link) => ({
                ...link,
                href: `${locale === "en" ? "" : `/${locale}`}${link.href}`,
                label: t(String(link.label)),
              }))}
              image={{
                url: t(String(item.image.url)),
                url2x: t(String(item.image.url2x)),
                height: item.image.height,
                width: item.image.width,
              }}
            />
          ))}
        </StyledFeaturesWrapper>
      </Container>
    </Section>
  );
};

export { Features };
