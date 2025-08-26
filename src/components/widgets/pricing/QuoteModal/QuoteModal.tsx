import { useState, useRef } from "react";
import { useTranslation } from "next-i18next";
import ReactCaptcha from "@hcaptcha/react-hcaptcha";
import {
  StyledQuoteModal,
  StyledQuoteModalWrapper,
  StyledQuoteModalGetItNow,
  StyledQuoteModalText,
} from "./QuoteModal.styled";
import { IQuoteModal, IApiResponse } from "./QuoteModal.types";
import { getFromParam } from "@src/utils/getParams";
import { useIPGeolocationStore } from "@src/store/useIPGeolocationStore";
import { countries } from "@src/config/data/countries";
import { Modal } from "@src/components/ui/Modal";
import { Heading } from "@src/components/ui/Heading";
import { Input } from "@src/components/ui/Input";
import { LoaderButton, ILoaderButton } from "@src/components/ui/LoaderButton";
import { Text } from "@src/components/ui/Text";
import { IPhoneInputRef } from "@src/components/widgets/PhoneInput";
import { PhoneInput } from "@src/components/widgets/PhoneInput";
import { HCaptcha } from "@src/components/ui/HCaptcha";
import { validateFullName, validateEmail } from "@src/utils/validators";

const QuoteModal = <T,>({
  apiRequest,
  sendEmailRequest,
  pipedriveRequest,
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
}: IQuoteModal<T> & {
  apiRequest?: (params: IQuoteModalApiRequest) => Promise<IApiResponse>;
  sendEmailRequest?: (params: IQuoteModalSendEmailRequest) => Promise<IApiResponse>;
  pipedriveRequest?: (params: IQuoteModalPipedriveRequest) => Promise<IApiResponse>;
}) => {
  const { t } = useTranslation("PricingQuoteModal");
  const from = getFromParam();

  const selectedCountry = useIPGeolocationStore(
    (state) => state.IPGeolocationInfo.country,
  );

  const hCaptchaRef = useRef<ReactCaptcha | null>(null);
  const phoneInputRef = useRef<IPhoneInputRef | null>(null);

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
      const hCaptchaResponse = await fetch("/api/hcaptcha-verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: quoteFormData.hCaptcha }),
      });

      const hCaptchaData = await hCaptchaResponse.json();

      if (hCaptchaData.status === "errorHCaptchaInvalid") {
        setFormStatus("error");
        setTimeout(() => {
          setFormStatus("default");
        }, 5000);
        return;
      }

      const countryInfo = Object.values(countries).find(
        (item) => item.country === selectedCountry,
      );
      const country = countryInfo?.title?.split(" (")[0] || "";
      const region = countryInfo?.salesRegion || "";

      let requestData;
      
      if (apiRequest) {
        requestData = await apiRequest({
          from: from || '',
          country,
          region,
          utmSource: quoteFormData.utmSource,
          utmCampaign: quoteFormData.utmCampaign,
          utmContent: quoteFormData.utmContent,
          utmTerm: quoteFormData.utmTerm
        });
      } else if (sendEmailRequest) {
        requestData = await sendEmailRequest({
          ...quoteFormData,
          from: from || '',
          country,
          region
        });
      } else if (pipedriveRequest) {
        requestData = await pipedriveRequest({
          ...quoteFormData,
          from: from || '',
          country,
          region
        });
      } else if (onSubmitRequest) {
        requestData = await onSubmitRequest({
          from,
          country,
          region
        });
      } else {
        throw new Error('No request handler provided');
      }

      if (requestData.status === "success") {
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
              status={
                isEmpty.phone
                  ? "error"
                  : quoteFormData.phone
                    ? "success"
                    : "default"
              }
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

export interface IQuoteModalApiRequest {
  from: string;
  country: string;
  region: string;
  utmSource?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
}

export interface IQuoteModalFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  hCaptcha: string | null;
}

export interface IQuoteModalPipedriveRequest extends IQuoteModalFormData {
  from: string;
  country: string;
  region: string;
  _ga?: string;
  utmSource?: string;
  utmCampaign?: string;
  title?: string;
}

export interface IQuoteModalSendEmailRequest extends IQuoteModalFormData {
  from: string;
  country: string;
  region: string;
  errorFlag?: boolean;
  utmCampaignFlag?: boolean;
  errorText?: string;
}

export { QuoteModal };
