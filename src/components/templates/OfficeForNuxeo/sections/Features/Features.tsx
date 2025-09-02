import { useTranslation, Trans } from "next-i18next";
import { StyledFeaturesWrapper, StyledFeaturesItems } from "./Features.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { FeatureItem } from "@src/components/widgets/FeatureItem";
import { Button } from "@src/components/ui/Button";
import { items } from "./data/items";
import { Link } from "@src/components/ui/Link";
import { ILocale } from "@src/types/locale";
import { getLink } from "@src/utils/getLink";

const Features = ({ locale }: ILocale) => {
  const { t } = useTranslation("office-for-nuxeo");

  const scrollToBlock = () => {
    const element = document.getElementById("how-to-start");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section>
      <Container>
        <StyledFeaturesWrapper>
          <Heading level={2} textAlign="center" label={t("WhyOO")} />

          <StyledFeaturesItems>
            {items.map((item, index) => (
              <FeatureItem
                key={index}
                mobileVariant="vertical"
                icon={{
                  url: item.icon.url,
                  positionX: item.icon.positionX,
                  isSprite: true,
                }}
                text={
                  <Trans
                    t={t}
                    i18nKey={String(item.text)}
                    components={item.textLinks?.map((link, index) => (
                      <Link
                        key={index}
                        href={
                          link.href === "/app-directory"
                            ? getLink("marketplace", locale)
                            : link.href
                        }
                        target={link.isExternal ? "_blank" : undefined}
                        color="main"
                        textUnderline
                        hover="underline-none"
                      />
                    ))}
                  />
                }
                heading={t(String(item.heading))}
                variant="horizontal"
              />
            ))}
          </StyledFeaturesItems>

          <Button
            variant="secondary"
            onClick={scrollToBlock}
            id="features-get-started"
            label={t("GetStarted")}
          />
        </StyledFeaturesWrapper>
      </Container>
    </Section>
  );
};

export { Features };
