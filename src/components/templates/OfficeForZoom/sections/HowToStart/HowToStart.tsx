import { useTranslation, Trans } from "next-i18next";
import { useRouter } from "next/router";
import { StyledHowToStart, StyledHowToStartText, StyledHeroHeaderBtns, StyledHowToStartInfo } from "./HowToStart.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { StepCarousel } from "@src/components/widgets/StepCarousel";
import { items } from "./data/items";
import { Link } from "@src/components/ui/Link";
import { Button } from "@src/components/ui/Button";

const HowToStart = () => {
  const { t } = useTranslation("office-for-zoom");
  const { locale } = useRouter();

  const imageSrc1 = '/images/templates/office-for-zoom/button.svg'; 
  const imageSrc2 = '/images/templates/office-for-zoom/icon.svg';

  return (
    <StyledHowToStart id="how-to-start" background="#f9f9f9">
      <Container>
        <Heading level={2} textAlign="center" label={t("HowToStart")} />

       <StepCarousel
          id="how-to-start-carousel"
          className="how-to-start-carousel"
          namespace="office-for-zoom"
          items={items}
        />
        <StyledHowToStartInfo>
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
          <StyledHowToStartText size={2}>
            <Trans
              t={t}
              i18nKey="ExploreMoreDetailsIn"
              components={[
                <Link
                  key={0}
                  href="https://helpcenter.onlyoffice.com/integration/gettingstarted-zoom.aspx"
                  target={"_blank"}
                  color="main"
                  textUnderline
                  hover="underline-none"
                />,
              ]}
            />
          </StyledHowToStartText>
        </StyledHowToStartInfo>
      </Container>
    </StyledHowToStart>
  );
};

export { HowToStart };
