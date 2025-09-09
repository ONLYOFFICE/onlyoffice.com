import { useState } from "react";
import { useTranslation } from "next-i18next";
import { IMailModal } from "./SubscribeModal.types";
import {
  StyledMailModal,
  StyledMailModalWrapper,
  StyledMailModalHeader,
  StyledMailModalHeading,
  StyledMailModalCloseBtn,
  StyledMailModalText,
  StyledMailModalForm,
  StyledMailModalInput,
  StyledMailModalBtnWrapper,
  StyledMailModalConfirmText,
  StyledMailModalBtn,
} from "./SubscribeModal.styled";
import { Modal } from "@src/components/ui/Modal";
import { CrossIcon } from "@src/components/icons";
import { validateEmail } from "@src/utils/validators";
import { useRouter } from "next/router";
import { ISubscribeInput } from "@src/components/widgets/SubscribeInput";

const SubscribeModal = ({ isOpen, onClose }: IMailModal) => {
  const { t } = useTranslation("SubscribeModal");
  const { locale } = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isEmpty, setIsEmpty] = useState({
    name: false,
    email: false,
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [subscribeStatus, setSubscribeStatus] =
    useState<ISubscribeInput["status"]>("default");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
    setIsEmpty((prevState) => ({
      ...prevState,
      [`${field}`]: value.length === 0,
    }));
  };

  const checkFormValid = () => {
    const nameIsValid = formData.name.trim().length > 0;
    const emailIsValid =
      formData.email.trim().length > 0 && validateEmail(formData.email);
    setIsFormValid(nameIsValid && emailIsValid);
  };

  const onSubmit = async () => {
    const nameIsEmpty = formData.name.trim().length === 0;
    const emailIsEmpty = formData.email.trim().length === 0;
    const emailIsValid = validateEmail(formData.email);

    setIsEmpty({
      name: nameIsEmpty,
      email: emailIsEmpty,
    });

    const isValid = !nameIsEmpty && !emailIsEmpty && emailIsValid;
    setIsFormValid(isValid);

    if (!isValid || !isFormValid) return;

    setSubscribeStatus("loading");

    try {
      const res = await fetch("/api/sendsubscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language: locale === "en" ? "" : locale,
          firstName: formData.name,
          email: formData.email,
          type: "Common",
        }),
      });

      const data = await res.json();

      if (data.status === "success") {
        setIsSuccess(true);
        setSubscribeStatus("success");
      } else {
        console.log(data.message);
        setSubscribeStatus("error");
      }
    } catch {
      setIsSuccess(false);
      setSubscribeStatus("error");
    }
  };

  const onCloseModal = () => {
    onClose();
    setFormData({
      name: "",
      email: "",
    });
    setIsEmpty({
      name: false,
      email: false,
    });
    setIsFormValid(false);
    setSubscribeStatus("default");
    setIsSuccess(false);
  };

  return (
    <Modal
      maxWidth="649px"
      bgColor="rgba(255, 255, 255, 0.5)"
      isOpen={isOpen}
      onClose={onCloseModal}
    >
      <StyledMailModal>
        <StyledMailModalWrapper>
          <StyledMailModalHeader>
            <StyledMailModalHeading level={4} label={t("ModalTitle")} />

            <StyledMailModalCloseBtn onClick={onCloseModal}>
              <CrossIcon />
            </StyledMailModalCloseBtn>
          </StyledMailModalHeader>

          {isSuccess ? (
            <>
              <StyledMailModalConfirmText
                color="#666666"
                label={t("MessageWithConfirmation")}
              />
              <StyledMailModalBtn
                variant="secondary"
                label={t("OK")}
                onClick={onCloseModal}
              />
            </>
          ) : (
            <>
              <StyledMailModalText label={t("GetTheLatestOONews")} />
              <StyledMailModalForm>
                <StyledMailModalInput
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  onBlur={() => {
                    setIsEmpty((prev) => ({
                      ...prev,
                      name: formData.name.length === 0,
                    }));
                    checkFormValid();
                  }}
                  name="name"
                  placeholder={t("FirstName")}
                  caption={
                    formData.name.length === 0 ? t("FirstNameIsEmpty") : ""
                  }
                  status={isEmpty.name ? "error" : "default"}
                />

                <StyledMailModalInput
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  onBlur={() => {
                    setIsEmpty((prev) => ({
                      ...prev,
                      email: formData.email.length === 0,
                    }));
                    checkFormValid();
                  }}
                  name="email"
                  placeholder={t("YourEmail")}
                  caption={
                    formData.email.length === 0
                      ? t("EmailIsEmpty")
                      : !validateEmail(formData.email)
                        ? t("EmailIsIncorrect")
                        : ""
                  }
                  status={
                    isEmpty.email ||
                    (formData.email.length > 0 &&
                      !validateEmail(formData.email))
                      ? "error"
                      : "default"
                  }
                />

                <StyledMailModalBtnWrapper>
                  <StyledMailModalBtn
                    onClick={onSubmit}
                    disabled={subscribeStatus === "loading"}
                    label={t("Subscribe")}
                  />
                </StyledMailModalBtnWrapper>
              </StyledMailModalForm>
            </>
          )}
        </StyledMailModalWrapper>
      </StyledMailModal>
    </Modal>
  );
};

export { SubscribeModal };
