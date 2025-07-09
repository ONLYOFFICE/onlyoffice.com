import { useRef, useState } from "react";
import { Trans, useTranslation } from "next-i18next";
import { Input } from "@src/components/ui/Input";
import { Text } from "@src/components/ui/Text";
import { HCaptcha } from "@src/components/widgets/HCaptcha";
import { Link } from "@src/components/ui/Link";
import { validateFullName, validateEmail } from "@src/utils/validators";
import { getFromParam } from "@src/utils/getParams";
import { downloadUrl } from "../../utils/downloadUrl";
import { ILoaderButton } from "@src/components/ui/LoaderButton";
import { ILocale } from "@src/types/locale";
import ReactCaptcha from "@hcaptcha/react-hcaptcha";
import {
  ICardFormProp,
  ICheckStatus,
  IFormData }
from "@src/components/templates/Whitepapers/Whitepapers.types";

import {
  StyledCardFormAgreementWrapper,
  StyledCardFormButton,
  StyledCardFormCloseBtn,
  StyledCardFormForm,
  StyledCardFormHeading,
  StyledCardFormInputWrapper,
  StyledCardFormModal,
  StyledCardFormOverlay,
  StyledCardFormStatusText,
} from "./CardForm.styled";

const CardForm = ({ download_url, openModal, setOpenModal, locale, product }: ICardFormProp & ILocale ) => {
  const { t } = useTranslation("whitepapers");
  const [status, setStatus] = useState<ILoaderButton["status"]>("default");
  const refHCaptcha = useRef<ReactCaptcha | null>(null);

  const [formData, setFormData] = useState<IFormData>({
    fullName: "",
    companyName: "",
    email: "",
    hCaptcha: null,
  });

  const [checkStatus, setCheckStatus] = useState<ICheckStatus>({
    fullName: "default",
    companyName: "default",
    email: "default",
    hCaptcha: "default",
  });

  const handleHCaptchaChange = (token: string | null) => {
    setFormData({
      ...formData,
      hCaptcha: token,
    })
  }

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleCheckStatusFullName = () => {
    if (validateFullName(formData.fullName)) {
      setCheckStatus((prev) => ({
        ...prev,
        fullName: "success",
      }));
    } else {
      setCheckStatus((prev) => ({
        ...prev,
        fullName: "error",
      }));
    }
  }

  const handleCheckStatusCompanyName = () => {
    if (formData.companyName.length > 0) {
      setCheckStatus((prev) => ({
        ...prev,
        companyName: "success",
      }));
    } else {
      setCheckStatus((prev) => ({
        ...prev,
        companyName: "error",
      }));
    }
  }

  const handleCheckStatusEmail = () => {
    if (validateEmail(formData.email)) {
      setCheckStatus((prev) => ({
        ...prev,
        email: "success",
      }));
    } else {
      setCheckStatus((prev) => ({
        ...prev,
        email: "error",
      }));
    }
  }

  const clearData = () => {
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      hCaptcha: null,
    })
    setCheckStatus({
      fullName: "default",
      companyName: "default",
      email: "default",
      hCaptcha: "default",
    })
    refHCaptcha.current?.resetCaptcha();
  }

  const handleSubmit = async () => {
    if (status === "loading") return;
    if (status === "success") {
      setStatus("default");
      clearData();
      setOpenModal(false);
      return;
    }
    if (status === "error") {
      setStatus("default");
      clearData();
      return;
    }

    const from = getFromParam();
    try {
      setStatus("loading");

      const responceHCaptcha = await fetch("/api/hcaptcha-verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          token: formData.hCaptcha ?? "",
        })
      })
      const dataHCaptcha = await responceHCaptcha.json();

      if (dataHCaptcha.status === "errorHCaptchaInvalid") {
        setStatus("error");
        return;
      }

      if (dataHCaptcha.status === "success") {
        const responseWhitepapers = await fetch("/api/whitepapers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: formData.fullName ?? "",
            company: formData.companyName ?? "",
            email: formData.email ?? "",
            from: from ?? "",
            product: product ?? "",
            languageCode: locale ?? "",
          }),
        })
        const dataWhitepapers = await responseWhitepapers.json();

        if (dataWhitepapers.status === "success") {
          setStatus("success");
          downloadUrl(t(download_url));
        }

        if (dataWhitepapers.status === "error") {
          setStatus("error");
        }

        if (openModal && dataWhitepapers.status === "success") {
          setTimeout(() => {
            setOpenModal(false);
          }, 5000);
        }
      }
    } catch (error) {
      setStatus("error")
      console.error(error);
    }
  };

  return (
    <StyledCardFormOverlay
      onClick={(event) => event.target === event.currentTarget && setOpenModal(false)}
    >
      <StyledCardFormModal>
        <StyledCardFormCloseBtn
          onClick={() => setOpenModal(false)}
        />
        <StyledCardFormHeading
          level={3}
          size={5}
          label={t("CardFormHeading")}
        />
        <StyledCardFormForm>
          <StyledCardFormInputWrapper>
            <Input
              label={t("CardFormFullName")}
              type="text"
              placeholder={t("CardFormPlaceholderName")}
              name="fullName"
              value={formData.fullName}
              onChange={(event) => handleChangeInput(event)}
              required
              maxLength={100}
              onBlur={handleCheckStatusFullName}
              status={checkStatus.fullName}
              onFocus={() => setCheckStatus((prev) => ({ ...prev, fullName: "default" }))}
            />
            {checkStatus.fullName === "error" && formData.fullName.length === 0 && (
              <Text size={4} label={t("CardFormFullNameIsEmpty")} color="#CB0000" />
            )}
            {checkStatus.fullName === "error" && formData.fullName.length > 0 && (
              <Text size={4} label={t("CardFormFullNameIsIncorrect")} color="#CB0000" />
            )}
          </StyledCardFormInputWrapper>
          <StyledCardFormInputWrapper>
            <Input
              label={t("CardFormCompanyName")}
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={(event) => handleChangeInput(event)}
              required
              maxLength={100}
              onBlur={handleCheckStatusCompanyName}
              status={checkStatus.companyName}
              onFocus={() => setCheckStatus((prev) => ({ ...prev, companyName: "default" }))}
            />
            {checkStatus.companyName === "error" && formData.companyName.length === 0 && (
              <Text size={4} label={t("CardFormCompanyNameIsEmpty")} color="#CB0000" />
            )}
          </StyledCardFormInputWrapper>
          <StyledCardFormInputWrapper>
            <Input
              label={t("CardFormEmail")}
              type="email"
              placeholder={t("CardFormPlaceholderEmail")}
              name="email"
              value={formData.email}
              onChange={(event) => handleChangeInput(event)}
              required
              maxLength={50}
              onBlur={handleCheckStatusEmail}
              status={checkStatus.email}
              onFocus={() => setCheckStatus((prev) => ({ ...prev, email: "default" }))}
            />
            {checkStatus.email === "error" && formData.email.length === 0 && (
              <Text size={4} label={t("CardFormEmailIsEmpty")} color="#CB0000" />
            )}
            {checkStatus.email === "error" && formData.email.length > 0 && (
              <Text size={4} label={t("CardFormEmailIsIncorrect")} color="#CB0000" />
            )}
          </StyledCardFormInputWrapper>
          <StyledCardFormAgreementWrapper>
            <HCaptcha
              ref={refHCaptcha}
              onVerify={handleHCaptchaChange}
              onExpire={() => handleHCaptchaChange(null)}
            />
            <Text color="#808080" fontSize="12px">
              <Trans
                t={t}
                i18nKey={"CardFormAgreement"}
                components={[
                  <Link
                    key="0"
                    color="main"
                    textUnderline={true}
                    hover="underline-none"
                    target="_blank"
                    href="https://help.onlyoffice.co/Products/Files/doceditor.aspx?fileid=6615734&doc=cy9XcGc5TXNONjVTMkNrR2NZUEVTT2E1Y1FDZGVRQ1YvOTJYTnpkZ3JEWT0_IjY2MTU3MzQi0" />,
                  <Link
                    key="1"
                    color="main"
                    textUnderline={true}
                    hover="underline-none"
                    target="_blank"
                    href="https://help.onlyoffice.co/products/files/doceditor.aspx?fileid=5048502&doc=SXhWMEVzSEYxNlVVaXJJeUVtS0kyYk14YWdXTEFUQmRWL250NllHNUFGbz0_IjUwNDg1MDIi0&_ga=2.101739969.1105072466.1587625676-1002786878.1584771261" />
                ]}
              />
            </Text>
          </StyledCardFormAgreementWrapper>
          <StyledCardFormButton
            label={t("CardsButtonDownload")}
            disabled={
              checkStatus.fullName !== "success" ||
              checkStatus.companyName !== "success" ||
              checkStatus.email !== "success" ||
              formData.hCaptcha === null
            }
            onClick={handleSubmit}
            status={status}
          />
          <StyledCardFormStatusText
            label={status === "success" ? t("CardsFormSuccess") : t("CardsFormError")}
            textAlign="center"
            $status={status}
            color={status === "error" ? "#CB0000" : "#333333"}
          />
        </StyledCardFormForm>
      </StyledCardFormModal>
    </StyledCardFormOverlay>
  );
};

export { CardForm };