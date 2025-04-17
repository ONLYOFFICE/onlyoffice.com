import { useTranslation, Trans } from "next-i18next";
import { StyledHowToStart, StyledHowToStartInfo } from "./HowToStart.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { StepCarousel } from "@src/components/widgets/StepCarousel";
import { WatchVideo } from "@src/components/widgets/WatchVideo";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { items } from "./data/items";

const HowToStart = () => {
  const { t } = useTranslation("office-for-chamilo");

  return (
    <StyledHowToStart id="how-to-start" background="#ffffff">
      <Container>
        <Heading level={2} textAlign="center" label={t("HowToStart")} />

        <StepCarousel
          id="how-to-start-carousel"
          className="how-to-start-carousel"
          namespace="office-for-chamilo"
          items={items}
        />

        <StyledHowToStartInfo>
          <WatchVideo
            heading={t("HowToConnect")}
            videoImgUrl="/images/templates/office-for-chamilo/how-to-start/watch-video.png"
            videoUrl="https://www.youtube.com/embed/gl3gmhOKFk8?si=r2wab79sxUZokG2i"
          />
          <Text size={2} textAlign="center">
            <Trans
              t={t}
              i18nKey="ReadDetailedInstructions"
              components={[
                <Link
                  key={0}
                  id="how-to-start-instructions-git"
                  href="https://github.com/ONLYOFFICE/onlyoffice-chamilo?tab=readme-ov-file#installing-onlyoffice-docs"
                  target="_blank"
                  color="main"
                  textUnderline
                  hover="underline-none"
                />,
                <Link
                  key={0}
                  id="how-to-start-instructions-help"
                  href="https://helpcenter.onlyoffice.com/integration/chamilo.aspx"
                  target="_blank"
                  color="main"
                  textUnderline
                  hover="underline-none"
                />,
              ]}
            />
          </Text>
        </StyledHowToStartInfo>
      </Container>
    </StyledHowToStart>
  );
};

export { HowToStart };
