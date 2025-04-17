import { useTranslation } from "next-i18next";
import { StyledHowToStart, StyledHowToStartInfo } from "./HowToStart.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { StepCarousel } from "@src/components/widgets/StepCarousel";
import { WatchVideo } from "@src/components/widgets/WatchVideo";
import { items } from "./data/items";

const HowToStart = () => {
  const { t } = useTranslation("office-for-alfresco");

  return (
    <StyledHowToStart id="how-to-start" background="#f9f9f9">
      <Container>
        <Heading level={2} textAlign="center" label={t("HowToStart")} />

        <StepCarousel
          id="how-to-start-carousel"
          className="how-to-start-carousel"
          namespace="office-for-alfresco"
          items={items}
        />

        <StyledHowToStartInfo>
          <WatchVideo
            heading={t("HowToConnect")}
            videoImgUrl="/images/templates/office-for-alfresco/how-to-start/watch-video.jpg"
            videoUrl="https://www.youtube.com/embed/RyQA4gYi6e4?si=cQvEq-0Kg4sF0Jb5"
          />
        </StyledHowToStartInfo>
      </Container>
    </StyledHowToStart>
  );
};

export { HowToStart };
