import { useTranslation } from "next-i18next";
import {
  StyledCancelConvertModal,
  StyledCancelConvertModalBtns,
} from "./CancelConvertModal.styled";
import { ICancelConvertModal } from "./CancelConvertModal.types";
import { Modal } from "@src/components/ui/Modal";
import { Button } from "@src/components/ui/Button";
import { Text } from "@src/components/ui/Text";
import { themeColors } from "@src/components/modules/converter/Hero/config/theme";

const CancelConvertModal = ({
  isOpen,
  setIsOpenCancelConvertModal,
  setSelectedFile,
  setStep,
  theme,
  currentUUIDRef,
}: ICancelConvertModal) => {
  const { t } = useTranslation("converter");

  const handleCancelConvert = async () => {
    if (currentUUIDRef.current) {
      try {
        const formData = new FormData();
        formData.append("action", "cancel");
        formData.append("uuid", currentUUIDRef.current);

        await fetch("/api/converter", {
          method: "POST",
          body: formData,
        });
      } catch (error) {
        console.error(error);
      }
    }

    setSelectedFile(null);
    setStep("select");
    setIsOpenCancelConvertModal(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpenCancelConvertModal(false)}
      maxWidth="462px"
    >
      <StyledCancelConvertModal $theme={theme}>
        <Text
          size={2}
          textAlign="center"
          label={t("LeaveThePageAndConvertNewFile")}
        />

        <StyledCancelConvertModalBtns>
          <Button
            onClick={handleCancelConvert}
            backgroundColor={theme ? themeColors[theme] : undefined}
            label={t("Yes")}
          />
          <Button
            onClick={() => setIsOpenCancelConvertModal(false)}
            variant="tertiary"
            label={t("No")}
          />
        </StyledCancelConvertModalBtns>
      </StyledCancelConvertModal>
    </Modal>
  );
};

export { CancelConvertModal };
