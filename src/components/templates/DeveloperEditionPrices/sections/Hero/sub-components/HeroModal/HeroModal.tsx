import { useState } from "react";
import { Trans, useTranslation } from "next-i18next";
import {
  StyledHeroModal,
  StyledHeroGetItNow,
  StyledHeroRecaptcha,
} from "./HeroModal.styled";
import { IHeroModal } from "./HeroModal.types";
import { Modal } from "@src/components/ui/Modal";
import { Heading } from "@src/components/ui/Heading";
import { Input } from "@src/components/ui/Input";
import { Button } from "@src/components/ui/Button";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { PhoneInput } from "@src/components/widgets/PhoneInput";
import { validateFullName, validateEmail } from "@src/utils/validators";

const HeroModal = ({ locale, isOpen, onClose, isOrderNow }: IHeroModal) => {
  const { t } = useTranslation("developer-edition-prices");

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
      <StyledHeroModal>
        <Heading
          level={4}
          textAlign="center"
          label={
            isOrderNow
              ? t("FillInTheFormToReceive")
              : t("FillInTheFormToGetAQuote")
          }
        />

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

        <StyledHeroGetItNow>
          <StyledHeroRecaptcha
            hl={locale}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            onChange={handleRecaptchaChange}
            onExpired={() => handleRecaptchaChange(null)}
          />

          <Text fontSize="12px" lineHeight="20px">
            <Trans
              t={t}
              i18nKey="GetItNowText"
              components={[
                <Link
                  key="0"
                  href="https://help.onlyoffice.co/products/files/doceditor.aspx?fileid=5522566&doc=RVVQOEgvM2pOK0QvNzJ0Q25xSzRlVGZRUHdvYmgxUzIwNFRUUFhxbFpNWT0_IjU1MjI1NjYi0"
                  target="_blank"
                  color="main"
                  textUnderline
                  hover="underline-none"
                />,
                <Link
                  key="1"
                  href="https://help.onlyoffice.co/products/files/doceditor.aspx?fileid=5048502&doc=SXhWMEVzSEYxNlVVaXJJeUVtS0kyYk14YWdXTEFUQmRWL250NllHNUFGbz0_IjUwNDg1MDIi0&_ga=2.101739969.1105072466.1587625676-1002786878.1584771261"
                  target="_blank"
                  color="main"
                  textUnderline
                  hover="underline-none"
                />,
              ]}
            />
          </Text>
        </StyledHeroGetItNow>
        <Button
          label={isOrderNow ? t("OrderNow") : t("GetAQuote")}
          disabled={!isFormValid}
        />
      </StyledHeroModal>
    </Modal>
  );
};

export { HeroModal };
