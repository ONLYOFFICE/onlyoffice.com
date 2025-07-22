import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { Modal } from "@src/components/ui/Modal";
import {
  StyledCollaborationFeatureModal,
  StyledCollaborationFeatureModalArrow,
  StyledCollaborationFeatureModalClose,
  StyledCollaborationFeatureModalPage,
  StyledCollaborationFeatureModalPages,
} from "./CollaborationFeatureModal.styled";
import { ICollaborationFeatureModal } from "./CollaborationFeatureModal.types";
import { ChevronLeftIcon, ChevronRightIcon } from "@src/components/icons";

const CollaborationFeatureModal = ({
  isOpen,
  onClose,
  images,
  currentImageIndex,
}: ICollaborationFeatureModal) => {
  const [currentImage, setCurrentImage] = useState<number>(currentImageIndex);
  const { t } = useTranslation("CollaborationsFeatures");

  useEffect(() => {
    if (isOpen) {
      setCurrentImage(currentImageIndex);
    }
  }, [isOpen, currentImageIndex]);

  const handlePageChange = (direction: "prev" | "next") => {
    setCurrentImage((prev) =>
      direction === "next"
        ? (prev + 1) % images.length
        : (prev - 1 + images.length) % images.length,
    );
  };

  return (
    <Modal maxWidth="1240px" isOpen={isOpen} onClose={onClose}>
      <StyledCollaborationFeatureModal>
        <StyledCollaborationFeatureModalArrow
          $type="prev"
          onClick={() => handlePageChange("prev")}
        >
          <ChevronLeftIcon />
        </StyledCollaborationFeatureModalArrow>
        <img
          width="100%"
          height="100%"
          src={images[currentImage].src}
          alt={images[currentImage].alt}
        />
        <StyledCollaborationFeatureModalPages>
          {images.map((_, index) => (
            <StyledCollaborationFeatureModalPage
              key={index}
              $isActive={index === currentImage}
              onClick={() => setCurrentImage(index)}
            >
              {index + 1}
            </StyledCollaborationFeatureModalPage>
          ))}
          <StyledCollaborationFeatureModalClose onClick={onClose}>
            {t("Close")}
          </StyledCollaborationFeatureModalClose>
        </StyledCollaborationFeatureModalPages>
        <StyledCollaborationFeatureModalArrow
          $type="next"
          onClick={() => handlePageChange("next")}
        >
          <ChevronRightIcon />
        </StyledCollaborationFeatureModalArrow>
      </StyledCollaborationFeatureModal>
    </Modal>
  );
};

export { CollaborationFeatureModal };
