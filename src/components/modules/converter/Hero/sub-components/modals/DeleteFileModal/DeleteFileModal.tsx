import { useTranslation } from "next-i18next";
import {
  StyledDeleteFileModal,
  StyledDeleteFileModalBtns,
} from "./DeleteFileModal.styled";
import { IDeleteFileModal } from "./DeleteFileModal.types";
import { Modal } from "@src/components/ui/Modal";
import { Button } from "@src/components/ui/Button";
import { Text } from "@src/components/ui/Text";
import { themeColors } from "@src/components/modules/converter/Hero/config/theme";

const DeleteFileModal = ({
  isOpen,
  setIsOpenDeleteFileModal,
  setSelectedFile,
  setStep,
  theme,
}: IDeleteFileModal) => {
  const { t } = useTranslation("converter");

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpenDeleteFileModal(false)}
      maxWidth="462px"
    >
      <StyledDeleteFileModal $theme={theme}>
        <Text
          size={2}
          textAlign="center"
          label={t("AreYouSureYouWantToDeleteThisFile")}
        />

        <StyledDeleteFileModalBtns>
          <Button
            onClick={() => setIsOpenDeleteFileModal(false)}
            backgroundColor={theme ? themeColors[theme] : undefined}
            label={t("Cancel")}
          />
          <Button
            onClick={() => {
              setIsOpenDeleteFileModal(false);
              setSelectedFile(null);
              setStep("select");
            }}
            variant="tertiary"
            label={t("Delete")}
          />
        </StyledDeleteFileModalBtns>
      </StyledDeleteFileModal>
    </Modal>
  );
};

export { DeleteFileModal };
