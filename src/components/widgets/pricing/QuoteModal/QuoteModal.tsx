import { useState } from "react";
import { useTranslation } from "next-i18next";
import {
  StyledQuoteModal,
  StyledQuoteModalGetItNow,
  StyledQuoteModalRecaptcha,
} from "./QuoteModal.styled";
import { IQuoteModal } from "./QuoteModal.types";
import { Modal } from "@src/components/ui/Modal";
import { Heading } from "@src/components/ui/Heading";
import { Input } from "@src/components/ui/Input";
import { Button } from "@src/components/ui/Button";
import { Text } from "@src/components/ui/Text";
import { PhoneInput } from "@src/components/widgets/PhoneInput";
import { validateFullName, validateEmail } from "@src/utils/validators";

const QuoteModal = ({
  locale,
  isOpen,
  onClose,
  heading,
  byClickedText,
  buttonLabel,
}: IQuoteModal) => {
  const { t } = useTranslation("PricingQuoteModal");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
  });

  const [isEmpty, setIsEmpty] = useState({
    fullName: false,
    email: false,
    phone: false,
    companyName: false,
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const isFullNameValid =
    formData.fullName.length > 0 && validateFullName(formData.fullName);
  const isEmailValid =
    formData.email.length > 0 && validateEmail(formData.email);
  const isCompanyValid = formData.companyName.length > 0;
  const isPhoneValid = formData.phone.length > 0;

  const checkFormValid = () => {
    setIsFormValid(
      isFullNameValid &&
        isEmailValid &&
        isPhoneValid &&
        isCompanyValid &&
        !!recaptchaToken,
    );
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);

    setIsFormValid(
      isFullNameValid &&
        isEmailValid &&
        isPhoneValid &&
        isCompanyValid &&
        !!token,
    );
  };

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

  const onCloseModal = () => {
    onClose();

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      companyName: "",
    });
    setIsEmpty({
      fullName: false,
      email: false,
      phone: false,
      companyName: false,
    });
    setIsFormValid(false);
    setRecaptchaToken(null);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onCloseModal}
      withCloseBtn
      positionCloseBtn="inside"
    >
      <StyledQuoteModal>
        <Heading level={4} textAlign="center" label={heading} />

        <Input
          onChange={(e) => handleInputChange("fullName", e.target.value)}
          onBlur={() => {
            setIsEmpty((prev) => ({
              ...prev,
              fullName: formData.fullName.length === 0,
            }));
            checkFormValid();
          }}
          value={formData.fullName}
          label={t("FullName")}
          placeholder={t("NameSurname")}
          caption={
            formData.fullName.length === 0
              ? t("FullNameIsEmpty")
              : !validateFullName(formData.fullName)
                ? t("FullNameIsIncorrect")
                : ""
          }
          required
          status={
            isEmpty.fullName
              ? "error"
              : formData.fullName.length > 0
                ? validateFullName(formData.fullName)
                  ? "success"
                  : "error"
                : "default"
          }
        />

        <Input
          onChange={(e) => handleInputChange("email", e.target.value)}
          onBlur={() => {
            setIsEmpty((prev) => ({
              ...prev,
              email: formData.email.length === 0,
            }));
            checkFormValid();
          }}
          value={formData.email}
          label="Email"
          placeholder="name@domain.com"
          caption={
            formData.email.length === 0
              ? t("EmailIsEmpty")
              : !validateEmail(formData.email)
                ? t("EmailIsIncorrect")
                : ""
          }
          required
          status={
            isEmpty.email
              ? "error"
              : formData.email.length > 0
                ? validateEmail(formData.email)
                  ? "success"
                  : "error"
                : "default"
          }
        />

        <PhoneInput
          onChange={(e) => handleInputChange("phone", e.target.value)}
          onBlur={() => {
            setIsEmpty((prev) => ({
              ...prev,
              phone: formData.phone.length === 0,
            }));
            checkFormValid();
          }}
          value={formData.phone}
          status={
            isEmpty.phone ? "error" : formData.phone ? "success" : "default"
          }
        />

        <Input
          onChange={(e) => handleInputChange("companyName", e.target.value)}
          onBlur={() => {
            setIsEmpty((prev) => ({
              ...prev,
              companyName: formData.companyName.length === 0,
            }));
            checkFormValid();
          }}
          value={formData.companyName}
          label={t("CompanyName")}
          caption={t("CompanyNameIsEmpty")}
          required
          status={
            isEmpty.companyName
              ? "error"
              : formData.companyName
                ? "success"
                : "default"
          }
        />

        <StyledQuoteModalGetItNow>
          <StyledQuoteModalRecaptcha
            hl={locale}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            onChange={handleRecaptchaChange}
            onExpired={() => handleRecaptchaChange(null)}
          />

          <Text fontSize="12px" lineHeight="20px">
            {byClickedText}
          </Text>
        </StyledQuoteModalGetItNow>
        <Button label={buttonLabel} disabled={!isFormValid} />
      </StyledQuoteModal>
    </Modal>
  );
};

export { QuoteModal };
