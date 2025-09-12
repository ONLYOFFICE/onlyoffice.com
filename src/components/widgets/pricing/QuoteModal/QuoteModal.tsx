import { useState, useRef } from "react";
import { useTranslation } from "next-i18next";
import ReactCaptcha from "@hcaptcha/react-hcaptcha";
import {
  StyledQuoteModal,
  StyledQuoteModalWrapper,
  StyledQuoteModalGetItNow,
  StyledQuoteModalText,
} from "./QuoteModal.styled";
import { IQuoteModal } from "./QuoteModal.types";
import { getFromParam } from "@src/utils/getParams";
import { useIPGeolocationStore } from "@src/store/useIPGeolocationStore";
import { countries } from "@src/config/data/countries";
import { Modal } from "@src/components/ui/Modal";
import { Heading } from "@src/components/ui/Heading";
import { Input } from "@src/components/ui/Input";
import { Text } from "@src/components/ui/Text";
import { HCaptcha } from "@src/components/ui/HCaptcha";
import { LoaderButton, ILoaderButton } from "@src/components/ui/LoaderButton";
import { IPhoneInputRef } from "@src/components/widgets/PhoneInput";
import { PhoneInput } from "@src/components/widgets/PhoneInput";
import { validateFullName, validateEmail } from "@src/utils/validators";
import { usePageTrack } from "@src/lib/hooks/useGA";

const QuoteModal = <T,>({
  locale,
  isOpen,
  heading,
  byClickedText,
  initialFormData,
  initialQuoteFormData,
  setFormData,
  quoteFormData,
  setQuoteFormData,
  buttonLabel,
  onSubmitRequest,
  onClose,
  pageTrackName,
}: IQuoteModal<T>) => {
  const { t } = useTranslation("PricingQuoteModal");
  const from = getFromParam();

  const IPGeolocationCountry = useIPGeolocationStore(
    (state) => state.IPGeolocationInfo.country,
  );

  const hCaptchaRef = useRef<ReactCaptcha | null>(null);
  const phoneInputRef = useRef<IPhoneInputRef | null>(null);

  const pageTrack = usePageTrack();

  const [isEmpty, setIsEmpty] = useState({
    fullName: false,
    email: false,
    phone: false,
    companyName: false,
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [formStatus, setFormStatus] =
    useState<ILoaderButton["status"]>("default");

  const isFullNameValid =
    quoteFormData.fullName.length > 0 &&
    validateFullName(quoteFormData.fullName);
  const isEmailValid =
    quoteFormData.email.length > 0 && validateEmail(quoteFormData.email);
  const isCompanyValid = quoteFormData.companyName.length > 0;
  const isPhoneValid = quoteFormData.phone.length > 0;

  const checkFormValid = () => {
    setIsFormValid(
      isFullNameValid &&
        isEmailValid &&
        (locale === "zh" ? true : isPhoneValid) &&
        isCompanyValid &&
        !!quoteFormData.hCaptcha,
    );
  };

  const handleRecaptchaChange = (token: string | null) => {
    setQuoteFormData((prevData) => ({
      ...prevData,
      hCaptcha: token,
    }));
    setIsFormValid(
      isFullNameValid &&
        isEmailValid &&
        (locale === "zh" ? true : isPhoneValid) &&
        isCompanyValid &&
        !!token,
    );
    setFormStatus("default");
  };

  const handleInputChange = (field: string, value: string) => {
    setQuoteFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
    setIsEmpty((prevState) => ({
      ...prevState,
      [field]: value.length === 0,
    }));
  };

  const clearData = () => {
    setFormData(initialFormData);
    setQuoteFormData(initialQuoteFormData);
    setFormStatus("default");
    setIsFormValid(false);
    hCaptchaRef.current?.resetCaptcha();
    phoneInputRef.current?.reset();
  };

  const onSubmit = async () => {
    if (formStatus === "loading") return;

    if (formStatus === "error") {
      setFormStatus("default");
      return;
    }

    if (formStatus === "success") {
      onClose();
      clearData();
      setFormStatus("default");
      return;
    }

    setFormStatus("loading");

    try {
      const countryInfo = Object.values(countries).find(
        (item) => item.country === IPGeolocationCountry,
      );
      const country = countryInfo?.title?.split(" (")[0] || "";
      const region = countryInfo?.salesRegion || "";

      const onSubmitRequestData = await onSubmitRequest({
        from,
        country,
        region,
        hCaptchaResponse: quoteFormData.hCaptcha,
      });

      if (onSubmitRequestData.status === "errorHCaptchaInvalid") {
        setFormStatus("error");
        setTimeout(() => {
          setFormStatus("default");
        }, 5000);
        return;
      } else if (onSubmitRequestData.status === "success") {
        pageTrack(pageTrackName);
        setFormStatus("success");

        setTimeout(() => {
          onClose();
          setFormStatus("default");
          clearData();
        }, 5000);
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onCloseModal = () => {
    onClose();
    setQuoteFormData((prev) => ({ ...prev, hCaptcha: null }));
    hCaptchaRef.current?.resetCaptcha();
    setIsFormValid(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onCloseModal}
      withCloseBtn
      positionCloseBtn="inside"
    >
      <StyledQuoteModal data-testid="pricing-modal-form">
        <StyledQuoteModalWrapper>
          <Heading level={4} textAlign="center" label={heading} />

          <Input
            onChange={(e) => handleInputChange("fullName", e.target.value)}
            onBlur={() => {
              setIsEmpty((prev) => ({
                ...prev,
                fullName: quoteFormData.fullName.length === 0,
              }));
              checkFormValid();
            }}
            value={quoteFormData.fullName}
            label={t("FullName")}
            placeholder={t("NameSurname")}
            caption={
              quoteFormData.fullName.length === 0
                ? t("FullNameIsEmpty")
                : !validateFullName(quoteFormData.fullName)
                  ? t("FullNameIsIncorrect")
                  : ""
            }
            required
            status={
              isEmpty.fullName
                ? "error"
                : quoteFormData.fullName.length > 0
                  ? validateFullName(quoteFormData.fullName)
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
                email: quoteFormData.email.length === 0,
              }));
              checkFormValid();
            }}
            value={quoteFormData.email}
            label={t("Email")}
            placeholder="name@domain.com"
            caption={
              quoteFormData.email.length === 0
                ? t("EmailIsEmpty")
                : !validateEmail(quoteFormData.email)
                  ? t("EmailIsIncorrect")
                  : ""
            }
            required
            status={
              isEmpty.email
                ? "error"
                : quoteFormData.email.length > 0
                  ? validateEmail(quoteFormData.email)
                    ? "success"
                    : "error"
                  : "default"
            }
          />

          {locale === "zh" ? (
            <Input
              onChange={(e) => handleInputChange("phone", e.target.value)}
              onBlur={() => {
                setIsEmpty((prev) => ({
                  ...prev,
                  phone: false,
                }));
                checkFormValid();
              }}
              value={quoteFormData.phone}
              label="微信号"
              status={
                isEmpty.phone
                  ? "error"
                  : quoteFormData.phone
                    ? "success"
                    : "default"
              }
            />
          ) : (
            <PhoneInput
              ref={phoneInputRef}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              onBlur={() => {
                setIsEmpty((prev) => ({
                  ...prev,
                  phone: quoteFormData.phone.length === 0,
                }));
                checkFormValid();
              }}
              required
            />
          )}

          <Input
            onChange={(e) => handleInputChange("companyName", e.target.value)}
            onBlur={() => {
              setIsEmpty((prev) => ({
                ...prev,
                companyName: quoteFormData.companyName.length === 0,
              }));
              checkFormValid();
            }}
            value={quoteFormData.companyName}
            label={t("CompanyName")}
            caption={t("CompanyNameIsEmpty")}
            required
            status={
              isEmpty.companyName
                ? "error"
                : quoteFormData.companyName
                  ? "success"
                  : "default"
            }
          />

          <StyledQuoteModalGetItNow>
            <HCaptcha
              ref={hCaptchaRef}
              onVerify={handleRecaptchaChange}
              onExpire={() => handleRecaptchaChange(null)}
            />

            <Text fontSize="12px" lineHeight="20px">
              {byClickedText}
            </Text>
          </StyledQuoteModalGetItNow>

          <LoaderButton
            onClick={onSubmit}
            data-testid="pricing-modal-get-a-quote-button"
            status={formStatus}
            label={buttonLabel}
            disabled={!isFormValid}
          />
        </StyledQuoteModalWrapper>

        {formStatus === "success" && (
          <StyledQuoteModalText
            textAlign="center"
            size={3}
            label={t("successfullyRequestText")}
          />
        )}
        {formStatus === "error" && (
          <StyledQuoteModalText
            textAlign="center"
            size={3}
            color="#cb0000"
            label={t("errorRequestText")}
          />
        )}
      </StyledQuoteModal>
    </Modal>
  );
};

export { QuoteModal };
