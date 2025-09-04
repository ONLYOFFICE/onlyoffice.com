import { useTranslation } from "next-i18next";
import {
  StyledPRModal,
  StyledPRModalButton,
} from "./SuccessModal.styled";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

import { Modal } from "@src/components/ui/Modal";

interface SuccessModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SuccessModal = ({ isOpen, setIsOpen }: SuccessModalProps) => {
  const { t } = useTranslation("partnership-request");

  const onClose = () => setIsOpen(false);

  return (
    <Modal
      withCloseBtn
      positionCloseBtn="inside"
      maxWidth="544px"
      isOpen={isOpen}
      onClose={onClose}>
      <StyledPRModal>
        <Heading
          level={3}
          size={4}
          label={t("ThankYouForYourRequest")}
          textAlign="center"
        >
        </Heading>
        <Text
          size={2}
          textAlign="center"
          label={t("OurManagerWillContactYou")}
        />
        <StyledPRModalButton
          onClick={onClose}
          label={t("OK")}
        />
      </StyledPRModal>
    </Modal>
  )
};

export { SuccessModal };
