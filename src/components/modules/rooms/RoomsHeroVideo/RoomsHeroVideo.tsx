import {
  StyledRoomsHeroVideo,
  StyledRoomsHeroVideoWrapper,
  StyledRoomsHeroVideoContent,
  StyledRoomsHeroVideoList,
  StyledRoomsHeroVideoListItem,
  StyledYouTubeCard,
  StyledHeading,
} from "./RoomsHeroVideo.styled";
import { IRoomsHeroVideo } from "./RoomsHeroVideo.types";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";


const RoomsHeroVideo = ({
  heading,
  text,
  button,
  items,
  image: { url2x: imgUrl2x },
  videoUrl,
}: IRoomsHeroVideo) => {
  return (
    <StyledRoomsHeroVideo
      desktopSpacing={["120px", "126px"]}
      tabletSpacing={["120px", "80px"]}
      tabletSmallSpacing={["136px", "32px"]}
      mobileSpacing={["96px", "48px"]}
    >
      <Container>
        <StyledHeading level={1}>{heading}</StyledHeading>
        <StyledRoomsHeroVideoWrapper>
          <StyledRoomsHeroVideoContent>
            <Text size={1} label={text} />
            <StyledRoomsHeroVideoList>
              {items.map((item, index) => (
                <StyledRoomsHeroVideoListItem key={index}>
                  {item.label}
                </StyledRoomsHeroVideoListItem>
              ))}
            </StyledRoomsHeroVideoList>
            <Button
              id={button.id}
              as="a"
              href={button.href}
              label={button.label}
            />
          </StyledRoomsHeroVideoContent>
          <StyledYouTubeCard
            videoImgUrl={imgUrl2x}
            videoUrl={videoUrl}
          />
        </StyledRoomsHeroVideoWrapper>
      </Container>
    </StyledRoomsHeroVideo>
  );
};

export { RoomsHeroVideo };
