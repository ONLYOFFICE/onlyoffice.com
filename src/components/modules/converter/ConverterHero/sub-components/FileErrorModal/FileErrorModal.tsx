import { Modal } from "@src/components/ui/Modal";
import {
  StyledFileErrorModal,
  StyledFileErrorModalBtns,
  StyledFileErrorModalContent,
  StyledFileErrorModalReason,
  StyledFileErrorModalTop,
} from "./FileErrorModal.styled";
import { Button } from "@src/components/ui/Button";
import { useTranslation } from "next-i18next";

const FileErrorModal = ({
  isOpen,
  onClose,
  error,
}: {
  isOpen: boolean;
  onClose: () => void;
  error: React.ReactNode;
}) => {
  const { t } = useTranslation("converter-common");

  return (
    <Modal maxWidth="600px" isOpen={isOpen} onClose={onClose}>
      <StyledFileErrorModal>
        <StyledFileErrorModalTop label={t("Error")} />
        <StyledFileErrorModalContent>
          <StyledFileErrorModalReason>{error}</StyledFileErrorModalReason>
          <StyledFileErrorModalBtns>
            <Button onClick={onClose} label="Close" variant="tertiary" />
            <Button label="Submit an issue" variant="tertiary" />
          </StyledFileErrorModalBtns>
        </StyledFileErrorModalContent>
      </StyledFileErrorModal>
    </Modal>
  );
};

export { FileErrorModal };
