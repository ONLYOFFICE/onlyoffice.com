import {
  StyledCollaborationsHeroSection,
  StyledCollaborationsHeroWrapper,
  StyledCollaborationsHeroContent,
  StyledCollaborationsHeroImage,
  StyledCollaborationsHeroHeading,
  StyledCollaborationsHeroText,
  StyledCollaborationsHeroMedalsWrapper,
  StyledCollaborationsHeroMedal,
  // StyledCollaborationsHeroVideoImage,
  StyledWatchVideoModal,
} from "./CollaborationsHero.styled";
import { Button } from "@src/components/ui/Button";
import { Container } from "@src/components/ui/Container";
import { ICollaborationsHero } from "./CollaborationsHero.types";
import { useState } from "react";
import { Modal } from "@src/components/ui/Modal";
import { getAssetUrl } from "@utils/getAssetUrl";

const CollaborationsHero = ({
  heading,
  text,
  button,
  image,
  medals,
}: ICollaborationsHero) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledCollaborationsHeroSection
      desktopSpacing={["152px", "133px"]}
      tabletSpacing={["152px", "133px"]}
      tabletSmallSpacing={["137px", "115px"]}
      mobileSpacing={["96px", "49px"]}
    >
      <Container maxWidth="1295px">
        <StyledCollaborationsHeroWrapper>
          <StyledCollaborationsHeroContent>
            <StyledCollaborationsHeroHeading size={2} label={heading} />
            <StyledCollaborationsHeroText>{text}</StyledCollaborationsHeroText>
            <Button
              as="a"
              id={button.id}
              href={button.href}
              label={button.label}
            />
          </StyledCollaborationsHeroContent>
          <StyledCollaborationsHeroImage
            $image={getAssetUrl(image.url)}
            $image2x={getAssetUrl(image.url2x)}
            $type={image.type}
            onClick={() => image.type === "video" && setIsOpen(true)}
          />
          <StyledCollaborationsHeroMedalsWrapper>
            {medals?.map(
              (
                { image, href, width, height, mobileWidth, mobileHeight },
                index,
              ) => (
                <StyledCollaborationsHeroMedal
                  key={index}
                  href={href}
                  $hasHref={!!href}
                  target="_blank"
                  $logo={image}
                  $width={width}
                  $height={height}
                  $mobileWidth={mobileWidth}
                  $mobileHeight={mobileHeight}
                />
              ),
            )}
          </StyledCollaborationsHeroMedalsWrapper>
        </StyledCollaborationsHeroWrapper>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          maxWidth="1100px"
          withCloseBtn
        >
          <StyledWatchVideoModal>
            <iframe
              src={image.videoUrl}
              frameBorder={0}
              allow="encrypted-media"
              allowFullScreen={true}
            ></iframe>
          </StyledWatchVideoModal>
        </Modal>
      </Container>
    </StyledCollaborationsHeroSection>
  );
};

export { CollaborationsHero };
