import { useState, useRef } from "react";
import { useTranslation } from "next-i18next";
import ReactCaptcha from "@hcaptcha/react-hcaptcha";
import {
  StyledDownloadModal,
  StyledDownloadModalWrapper,
  StyledDownloadModalText,
} from "./DownloadModal.styled";
import { IDownloadModal } from "./DownloadModal.types";
import { getFromParam } from "@src/utils/getParams";
import { validateTestEmail } from "@src/utils/IsTestEmail";
import { useIPGeolocationStore } from "@src/store/useIPGeolocationStore";
import { countries } from "@src/config/data/countries";
import { Modal } from "@src/components/ui/Modal";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Input } from "@src/components/ui/Input";
import { TextArea } from "@src/components/ui/TextArea";
import { LoaderButton, ILoaderButton } from "@src/components/ui/LoaderButton";
import { HCaptcha } from "@src/components/ui/HCaptcha";
import { IPhoneInputRef } from "@src/components/widgets/PhoneInput";
import { PhoneInput } from "@src/components/widgets/PhoneInput";
import {
  validateFullName,
  validateEmail,
  validateWebsite,
} from "@src/utils/validators";
import { usePageTrack } from "@src/lib/hooks/useGA";

const DownloadModal = ({
  locale,
  heading,
  initialFormData,
  formData,
  setFormData,
  byClickedText,
  isOpen,
  onClose,
  onSubmitRequest,
  buttonAction,
  pageTrackName,
}: IDownloadModal) => {
  const { t } = useTranslation("DownloadModal");
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
    website: false,
    comment: false,
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [formStatus, setFormStatus] =
    useState<ILoaderButton["status"]>("default");
  const [isTestEmailValid, setIsTestEmailValid] = useState(false);

  const isFullNameValid =
    formData.fullName.length > 0 && validateFullName(formData.fullName);
  const isEmailValid =
    formData.email.length > 0 && validateEmail(formData.email);
  const isCompanyValid = formData.companyName.length > 0;
  const isPhoneValid = formData.phone.length > 0;

  const handleInputChange = (field: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
    setIsEmpty((prevState) => ({
      ...prevState,
      [field]: value.length === 0,
    }));
  };

  const handleHCaptchaChange = (token: string | null) => {
    if (
      token &&
      isFullNameValid &&
      isEmailValid &&
      (locale === "zh" ? true : isPhoneValid) &&
      isCompanyValid
    ) {
      onSubmit(token);
    } else {
      setFormStatus("default");
    }
  };

  const handleHCaptchaExecute = () => {
    hCaptchaRef.current?.execute();
  };

  const checkFormValid = () => {
    setIsFormValid(
      isFullNameValid &&
        isEmailValid &&
        (locale === "zh" ? true : isPhoneValid) &&
        isCompanyValid,
    );
  };

  const clearData = () => {
    setFormData(initialFormData);
    setFormStatus("default");
    setIsFormValid(false);
    hCaptchaRef.current?.resetCaptcha();
    phoneInputRef.current?.reset();
  };

  const onSubmit = async (token?: string) => {
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
        hCaptchaResponse: token || null,
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
        const endOfPartName = pageTrackName.indexOf("_for");
        const partBtnName =
          endOfPartName != -1
            ? pageTrackName.substring(0, endOfPartName)
            : pageTrackName;
        pageTrack(partBtnName);

        if (buttonAction?.href) {
          setTimeout(() => {
            const link = document.createElement("a");
            link.setAttribute("href", buttonAction.href!);

            if (buttonAction.isExternal) {
              link.setAttribute("target", "_blank");
              link.setAttribute("rel", "noopener noreferrer");
            } else if (buttonAction.download) {
              link.setAttribute("download", "");
            }
            link.click();
          }, 2000);
        }

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

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      withCloseBtn
      positionCloseBtn="inside"
    >
      <StyledDownloadModal>
        <StyledDownloadModalWrapper>
          <Heading level={4} textAlign="center">
            {heading}
          </Heading>

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
            onBlur={async () => {
              setIsEmpty((prev) => ({
                ...prev,
                email: formData.email.length === 0,
              }));
              const isTestEmailValid = await validateTestEmail(formData.email);
              setIsTestEmailValid(isTestEmailValid === true);
              checkFormValid();
            }}
            value={formData.email}
            label={t("Email")}
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
              value={formData.phone}
              label="微信号"
              status={
                isEmpty.phone ? "error" : formData.phone ? "success" : "default"
              }
            />
          ) : (
            <PhoneInput
              ref={phoneInputRef}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              onBlur={() => {
                setIsEmpty((prev) => ({
                  ...prev,
                  phone: formData.phone.length === 0,
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

          <Input
            onFocus={() => {
              if (formData.website.trim() === "") {
                handleInputChange("website", "https://");
              }
            }}
            onChange={(e) => handleInputChange("website", e.target.value)}
            onBlur={() => {
              setIsEmpty((prev) => ({
                ...prev,
                website:
                  formData.website.trim() === "" ||
                  formData.website === "https://",
              }));

              if (formData.website === "https://") {
                handleInputChange("website", "");
              }

              checkFormValid();
            }}
            value={formData.website}
            label={t("CompanyWebsite")}
            caption={
              !validateWebsite(formData.website) ? t("WebsiteIsIncorrect") : ""
            }
            status={
              formData.website.length > 0
                ? validateWebsite(formData.website)
                  ? "success"
                  : "error"
                : "default"
            }
          />

          <TextArea
            onChange={(e) => handleInputChange("comment", e.target.value)}
            onBlur={() => {
              setIsEmpty((prev) => ({
                ...prev,
                comment: formData.comment.length === 0,
              }));
            }}
            value={formData.comment}
            label={t("Comment")}
            rows={3}
            fullWidth
            status={formData.comment ? "success" : "default"}
          />

          <div>
            <HCaptcha
              ref={hCaptchaRef}
              size="invisible"
              onVerify={handleHCaptchaChange}
              onExpire={() => handleHCaptchaChange(null)}
            />

            <Text fontSize="12px" lineHeight="20px">
              {byClickedText}
            </Text>
          </div>

          <LoaderButton
            onClick={() => {
              if (isTestEmailValid) {
                onSubmit();
              } else {
                handleHCaptchaExecute();
              }
            }}
            status={formStatus}
            label={t("GetItNow")}
            disabled={!isFormValid}
          />
        </StyledDownloadModalWrapper>

        {formStatus === "success" && (
          <StyledDownloadModalText
            textAlign="center"
            size={3}
            label={t("successfullyRequestText")}
          />
        )}
        {formStatus === "error" && (
          <StyledDownloadModalText
            textAlign="center"
            size={3}
            color="#cb0000"
            label={t("errorRequestText")}
          />
        )}
      </StyledDownloadModal>
    </Modal>
  );
};

export { DownloadModal };
