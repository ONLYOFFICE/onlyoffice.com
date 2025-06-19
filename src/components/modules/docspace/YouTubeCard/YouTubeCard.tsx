import { IYouTubeCard } from "./YouTubeCard.types";
import { useState } from "react";
import { Modal } from "@src/components/ui/Modal";
import {
  StyledYouTubeCard,
  StyledYouTubeCardImg,
  StyledYouTubeCardModal,
} from "./YouTubeCard.styled";

const YouTubeCard = ({
  id,
  className,
  videoImgUrl,
  videoUrl,
  borderRadius,
  border,
}: IYouTubeCard) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledYouTubeCard
      id={id}
      className={className}
      $borderRadius={borderRadius}
      $border={border}
    >
      <StyledYouTubeCardImg
        onClick={() => setIsOpen(true)}
        $videoImgUrl={videoImgUrl}
      />

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        maxWidth="1100px"
        withCloseBtn
      >
        <StyledYouTubeCardModal>
          <iframe
            src={videoUrl}
            frameBorder={0}
            allow="encrypted-media"
            allowFullScreen={true}
          ></iframe>
        </StyledYouTubeCardModal>
      </Modal>
    </StyledYouTubeCard>
  );
};

export { YouTubeCard };
