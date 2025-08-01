import { useTranslation } from "next-i18next";
import {
  StyledFileErrorModal,
  StyledFileErrorModalHeading,
  StyledFileErrorModalTextWrapper,
  StyledFileErrorModalBody,
  StyledFileErrorModalBtns,
} from "./FileErrorModal.styled";
import { IFileErrorModal } from "./FileErrorModal.types";
import { Modal } from "@src/components/ui/Modal";
import { Button } from "@src/components/ui/Button";

const FileErrorModal = ({
  children,
  isOpen,
  setIsOpenFileErrorModal,
  theme,
}: IFileErrorModal) => {
  const { t } = useTranslation("converter");

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpenFileErrorModal(false)}
      maxWidth="600px"
    >
      <StyledFileErrorModal $theme={theme}>
        <StyledFileErrorModalHeading
          level={4}
          color="#ffffff"
          textAlign="center"
          label={t("Error")}
        />

        <StyledFileErrorModalBody>
          <StyledFileErrorModalTextWrapper>
            {children}
          </StyledFileErrorModalTextWrapper>

          <StyledFileErrorModalBtns>
            <Button
              onClick={() => setIsOpenFileErrorModal(false)}
              variant="tertiary"
              label={t("Close")}
            />
            <Button
              as="a"
              href="mailto:support@onlyoffice.com"
              variant="tertiary"
              label={t("SubmitAnIssue")}
            />
          </StyledFileErrorModalBtns>
        </StyledFileErrorModalBody>
      </StyledFileErrorModal>
    </Modal>
  );
};

export { FileErrorModal };
