import { IVideoModal } from "./VideoModal.types";
import { Modal } from "@src/components/ui/Modal";
import { StyledWatchVideoModal } from "./VideoModal.styled";

const VideoModal = ({ isOpen, setIsOpen, videoUrl }: IVideoModal) => {
  return (
    <Modal
      key={videoUrl}
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
  );
};

export { VideoModal };
