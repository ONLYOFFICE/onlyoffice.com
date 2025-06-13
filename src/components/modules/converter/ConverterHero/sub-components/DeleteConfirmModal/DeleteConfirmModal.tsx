import { Modal } from "@src/components/ui/Modal";
import {
  StyledChooseFileBtn,
  StyledDeleteConfirmModal,
  StyledDeleteConfirmModalBtnsWrapper,
} from "./DeleteConfirmModal.styled";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";

const DeleteConfirmModal = ({
  isOpen,
  onClose,
  onDelete,
  text,
  color,
  isDeleting,
}: {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  text: string;
  color: string;
  isDeleting: boolean;
}) => {
  return (
    <Modal maxWidth="499px" isOpen={isOpen} onClose={onClose}>
      <StyledDeleteConfirmModal $color={color}>
        <Text label={text} />
        {isDeleting ? (
          <StyledDeleteConfirmModalBtnsWrapper>
            <StyledChooseFileBtn
              $backgroundColor={color}
              label="Cancel"
              onClick={onClose}
            />
            <Button onClick={onDelete} label="Delete" variant="tertiary" />
          </StyledDeleteConfirmModalBtnsWrapper>
        ) : (
          <StyledDeleteConfirmModalBtnsWrapper>
            <StyledChooseFileBtn
              $backgroundColor={color}
              label="yes"
              onClick={onDelete}
            />
            <Button onClick={onClose} label="no" variant="tertiary" />
          </StyledDeleteConfirmModalBtnsWrapper>
        )}
      </StyledDeleteConfirmModal>
    </Modal>
  );
};

export { DeleteConfirmModal };
