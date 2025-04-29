import { useTranslation } from "next-i18next";
import { Modal } from "@src/components/ui/Modal";
import { IDemoPreviewModal } from "./DemoPreviewModal.types";
import {
  StyledDemoPreviewModal,
  StyledDemoPreviewModalContent,
  StyledDemoPreviewModalHeading,
  StyledDemoPreviewModalTop,
  StyledDemoPreviewModalTopButton,
} from "./DemoPreviewModal.styled";
import { Button } from "@src/components/ui/Button";

const DemoPreviewModal = ({
  isOpen,
  onClose,
  heading,
  content,
}: IDemoPreviewModal) => {
  const { t } = useTranslation("best-adobe-alternative");

  return (
    <Modal maxWidth="790px" isOpen={isOpen} onClose={onClose}>
      <StyledDemoPreviewModal>
        <StyledDemoPreviewModalTop>
          <StyledDemoPreviewModalHeading level={4} label={heading} />
          <StyledDemoPreviewModalTopButton onClick={onClose} />
        </StyledDemoPreviewModalTop>
        <StyledDemoPreviewModalContent>{content}</StyledDemoPreviewModalContent>
        <Button
          id="demo-preview-modal-close-button"
          label={t("Close")}
          onClick={onClose}
          variant="secondary"
        />
      </StyledDemoPreviewModal>
    </Modal>
  );
};

export { DemoPreviewModal };
