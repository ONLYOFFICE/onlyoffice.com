import { useTranslation, Trans } from "next-i18next";
import { useRouter } from "next/router";
import { StyledFeaturesWrapper, StyledFeaturesItems, StyledFeaturesBtn } from "./Features.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { FeatureItem } from "@src/components/widgets/FeatureItem";
import { Button } from "@src/components/ui/Button";
import { items } from "./data/items";

const Features = () => {
  const { t } = useTranslation("office-for-zoom");
  const { locale } = useRouter();
  
    const imageSrc1 = '/images/templates/office-for-zoom/button.svg'; 
    const imageSrc2 = '/images/templates/office-for-zoom/icon.svg'; 

  return (
    <Section>
      <Container>
        <StyledFeaturesWrapper>
          <Heading level={2} textAlign="center" label={t("WhyOO")} />

          <StyledFeaturesItems>
            {items.map((item, index) => (
              <FeatureItem
                key={index}
                maxWidth="288px"
                icon={{
                  url: item.icon.url,
                  positionY: item.icon.positionY,
                  isSprite: true,
                }}
                text={
                  <Trans
                    t={t}
                    i18nKey={String(item.text)}
                    components={[<b key="0" />]}
                  />
                }
              />
            ))}
          </StyledFeaturesItems>

          <StyledFeaturesBtn>
            <Button
              as="a"
              id="features-add-to-zoom"
              href="https://marketplace.zoom.us/apps/OW6rOq-nRgCihG5eps_p-g"
              >
              <img src={imageSrc1} alt="Icon" style={{ marginRight: '4px' }} />
              {t("AddToZoom")}
              {locale !== 'zh' ? (
              <img src={imageSrc2} alt="Icon" style={{ marginRight: '4px', marginLeft: '4px', marginTop: '2px' }} />
              ) : (
              <div></div>
              )}
              {t("AddToZoomAfter")}
            </Button>
          </StyledFeaturesBtn>
        </StyledFeaturesWrapper>
      </Container>
    </Section>
  );
};

export { Features };
