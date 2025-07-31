import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { WatchVideo } from "@src/components/widgets/WatchVideo";

const VideoCard = () => {
  const { t } = useTranslation("office-for-ios");

  return (
    <Section background="#F2F2F2">
      <Container>
        <WatchVideo
          videoUrl="https://www.youtube.com/embed/0ZLg4PGRxOc"
          videoImgUrl="/images/templates/office-for-ios/videoCard/video_bg.png"
          heading={t("VideoCardHeading")}
        />
      </Container>
    </Section>
  );
};

export { VideoCard };
