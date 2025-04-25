import { Trans, useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroLogo,
  StyledHeroHeader,
  StyledHeroHeaderBtns,
  StyledHeroVideo,
} from "./Hero.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";

const Hero = () => {
  const { t } = useTranslation("office-for-zoom");
  const { locale } = useRouter();

  const imageSrc1 = '/images/templates/office-for-zoom/button.svg'; 
  const imageSrc2 = '/images/templates/office-for-zoom/icon.svg'; 

  return (
    <StyledHero
      desktopSpacing={["126px", "112px"]}
      tabletSpacing={["126px", "80px"]}
      tabletSmallSpacing={["119px", "124px"]}
      mobileSpacing={["99px", "48px"]}
    >
      <Container>
        <StyledHeroWrapper>
          <StyledHeroLogo />

          <StyledHeroHeader>
            <Heading level={1} size={1}>
              <Trans
                t={t}
                i18nKey="OnlineOfficeForZoom"
                components={[<Text as="span" color="#0B5CFF" key="0" />]}
              />
            </Heading>
            <Text size={1} label={t("EnableCollaborativeDocumentEditing")} />
          </StyledHeroHeader>

          <StyledHeroHeaderBtns>
            <Button
              as="a"
              variant="secondary"
              id="hero-request-free-demo"
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
          </StyledHeroHeaderBtns>
        </StyledHeroWrapper>
        <StyledHeroVideo>
            <iframe
              width="100%"
              height="auto"
              src="https://www.youtube.com/embed/MHw2h8c-4lw?autoplay=1&mute=1"
              title="YouTube"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
        </StyledHeroVideo>
      </Container>
    </StyledHero>
  );
};

export { Hero };
