import { useState } from "react";
import { useTranslation } from "next-i18next";
import {
  StyledWatchVideo,
  StyledWatchVideoImg,
  StyledWatchVideoWrapper,
  StyledWatchVideoHeading,
  StyledWatchVideoLabel,
  StyledWatchVideoModal,
} from "./WatchVideo.styled";
import { IWatchVideo } from "./WatchVideo.types";
import { Modal } from "@src/components/ui/Modal";

const WatchVideo = ({
  id,
  className,
  videoImgUrl,
  videoUrl,
  heading,
  customLabel
}: IWatchVideo) => {
  const { t } = useTranslation("WatchVideo");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledWatchVideo id={id} className={className}>
      <StyledWatchVideoImg
        onClick={() => setIsOpen(true)}
        $videoImgUrl={videoImgUrl}
      />

      <StyledWatchVideoWrapper>
        <StyledWatchVideoHeading level={4} label={heading} />
        <StyledWatchVideoLabel onClick={() => setIsOpen(true)}>
           {customLabel || t("WatchOurVideo")}
        </StyledWatchVideoLabel>
      </StyledWatchVideoWrapper>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        maxWidth="1100px"
        withCloseBtn
      >
        <StyledWatchVideoModal>
          <iframe
            src={videoUrl}
            frameBorder={0}
            allow="encrypted-media"
            allowFullScreen={true}
          ></iframe>
        </StyledWatchVideoModal>
      </Modal>
    </StyledWatchVideo>
  );
};

export { WatchVideo };
