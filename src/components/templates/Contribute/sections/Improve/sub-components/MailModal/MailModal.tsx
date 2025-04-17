import { useTranslation } from "next-i18next";
import { useState, useCallback, useRef } from "react";
import { Errors, IMailModal } from "./MailModal.types";
import {
  StyledMailModal,
  StyledMailModalButton,
  StyledMailModalCloseIcon,
  StyledMailModalHead,
  StyledMailModalHeading,
  StyledMailModalInput,
  StyledMailModalText,
  StyledMailModalWrapper,
  StyledModal,
} from "./MailModal.styled";
import { CrossIcon } from "@src/components/icons";

const MailModal = ({ isOpen, onClose }: IMailModal) => {
  const { t } = useTranslation("contribute");
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState<Errors>({ name: false, email: "" });
  const [subscribed, setSubscribed] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() ? "" : prevErrors[name],
    }));
  }, []);

  const validateForm = () => {
    let valid = true;
    let nameError: boolean = false;
    let emailError: "empty" | "invalid" | "" = "";

    if (!formData.name.trim()) {
      nameError = true;
      valid = false;
    }

    if (!formData.email.trim()) {
      emailError = "empty";
      valid = false;
    } else {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(formData.email)) {
        emailError = "invalid";
        valid = false;
      } else {
        emailError = "";
      }
    }

    setErrors({ name: nameError, email: emailError });
    return valid;
  };
  const handleSubscribe = () => {
    if (validateForm()) {
      setSubscribed(true);
      console.log("data => ", formData);
    }
  };

  const onCloseModal = () => {
    onClose();
    setFormData({ name: "", email: "" });
    setErrors({ name: false, email: "" });
    setSubscribed(false);
  };

  return (
    <StyledModal maxWidth="649px" isOpen={isOpen} onClose={onCloseModal}>
      <StyledMailModal>
        <StyledMailModalHead>
          <StyledMailModalHeading level={5} label={t("ModalTitle")} />
          <StyledMailModalCloseIcon onClick={onCloseModal}>
            <CrossIcon />
          </StyledMailModalCloseIcon>
        </StyledMailModalHead>
        {subscribed ? (
          <StyledMailModalWrapper>
            <StyledMailModalText label={t("GetTheLatestOONews")} />
            <StyledMailModalButton
              variant="secondary"
              className="secondary"
              label={t("OK")}
              onClick={onCloseModal}
            />
          </StyledMailModalWrapper>
        ) : (
          <StyledMailModalWrapper>
            <StyledMailModalText label={t("GetTheLatestOONews")} />
            <StyledMailModalInput
              ref={ref}
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t("FirstName")}
              autoFocus
              status={errors.name ? "error" : "default"}
              caption={errors.name ? t("FirstNameIsEmpty") : ""}
            />
            <StyledMailModalInput
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("YourEmail")}
              status={
                errors.email === "empty" || errors.email === "invalid"
                  ? "error"
                  : "default"
              }
              caption={
                errors.email === "empty"
                  ? t("EmailIsEmpty")
                  : errors.email === "invalid"
                  ? t("EmailIsIncorrect")
                  : ""
              }
            />
            <StyledMailModalButton
              label={t("Subscribe")}
              onClick={handleSubscribe}
            />
          </StyledMailModalWrapper>
        )}
      </StyledMailModal>
    </StyledModal>
  );
};

export { MailModal };
