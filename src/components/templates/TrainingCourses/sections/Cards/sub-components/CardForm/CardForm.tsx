import { useRef, useState } from "react";
import ReactCaptcha from "@hcaptcha/react-hcaptcha";
import { Trans, useTranslation } from "next-i18next";
import { Input } from "@src/components/ui/Input";
import { Text } from "@src/components/ui/Text";
import { HCaptcha } from "@src/components/ui/HCaptcha";
import { Link } from "@src/components/ui/Link";
import { validateFullName, validateEmail } from "@src/utils/validators";
import { getFromParam } from "@src/utils/getParams";
import { ILoaderButton } from "@src/components/ui/LoaderButton";
import { preferredLang } from "./data/preferredLang";
import { timeZone } from "./data/timeZone";

import { ILocale } from "@src/types/locale";
import {
  ICardFormProp,
  ICheckStatus,
  IFormData,
  IPreferredLang,
  ITimeZone}
from "@src/components/templates/TrainingCourses/TrainingCourses.types";

import {
  StyledCardFormAgreementWrapper,
  StyledCardFormButton,
  StyledCardFormCloseBtn,
  StyledCardFormForm,
  StyledCardFormHeading,
  StyledCardFormInputWrapper,
  StyledCardFormModal,
  StyledCardFormOption,
  StyledCardFormOptions,
  StyledCardFormOverlay,
  StyledCardFormSelect,
  StyledCardFormSelectText,
  StyledCardFormSelectWrapper,
  StyledCardFormStatusText,
  StyledCardFormTextAgree,
  StyledCardFormTextArea,
} from "./CardForm.styled";

const CardForm = ({ openModal, setOpenModal, locale, course }: ICardFormProp & ILocale ) => {
  const { t } = useTranslation("training-courses");

  const [status, setStatus] = useState<ILoaderButton["status"]>("default");
  const [isPreferredOpen, setIsPreferredOpen] = useState<boolean>(false);
  const [isTimeZoneOpen, setIsTimeZoneOpen] = useState<boolean>(false);
  const refHCaptcha = useRef<ReactCaptcha | null>(null);

  const [formData, setFormData] = useState<IFormData>({
    fullName: "",
    companyName: "",
    email: "",
    preferredLang: "",
    timeZone: "",
    commentArea: "",
    hCaptcha: null,
  });

  console.log(formData.hCaptcha)

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

  const handleChangeSelectLang = (lang: IPreferredLang["lang"]) => {
    setFormData({
      ...formData,
      preferredLang: lang,
    })
    setIsPreferredOpen(false);
  }

  const handleChangeSelectTime = (time: ITimeZone["time"]) => {
    setFormData({
      ...formData,
      timeZone: time,
    })
    setIsTimeZoneOpen(false);
  }

  const handleChangeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      preferredLang: "",
      timeZone: "",
      commentArea: "",
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
        const responseWhitepapers = await fetch("/api/training-courses", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: formData.fullName ?? "",
            company: formData.companyName ?? "",
            email: formData.email ?? "",
            lang: formData.preferredLang ?? "",
            timezone: formData.timeZone ?? "",
            message: formData.commentArea ?? "",
            course: course ?? "",
            from: from ?? "",
            languageCode: locale ?? "",
          }),
        })
        const dataWhitepapers = await responseWhitepapers.json();

        if (dataWhitepapers.status === "success") {
          setStatus("success");
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
      isOpen={openModal}
      onClose={() => setOpenModal(false)}
    >
      <StyledCardFormModal>
        <StyledCardFormCloseBtn
          onClick={() => setOpenModal(false)}
        />
        <StyledCardFormHeading
          level={3}
          size={5}
          label={t("FillOutThisForm")}
        />
        <StyledCardFormForm>
          <StyledCardFormInputWrapper>
            <Input
              label={t("FullName")}
              type="text"
              placeholder={t("FullNamePlaceholder")}
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
              <Text size={4} label={t("FullNameEmpty")} color="#CB0000" />
            )}
            {checkStatus.fullName === "error" && formData.fullName.length > 0 && (
              <Text size={4} label={t("CardFormFullNameIsIncorrect")} color="#CB0000" />
            )}
          </StyledCardFormInputWrapper>
          <StyledCardFormInputWrapper>
            <Input
              label={t("CompanyName")}
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
              <Text size={4} label={t("CompanyNameEmpty")} color="#CB0000" />
            )}
          </StyledCardFormInputWrapper>
          <StyledCardFormInputWrapper>
            <Input
              label={t("Email")}
              type="email"
              placeholder={t("EmailPlaceholder")}
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
              <Text size={4} label={t("EmailIsEmpty")} color="#CB0000" />
            )}
            {checkStatus.email === "error" && formData.email.length > 0 && (
              <Text size={4} label={t("EmailIsIncorrect")} color="#CB0000" />
            )}
          </StyledCardFormInputWrapper>
          <StyledCardFormSelectWrapper>
            <StyledCardFormSelect
              onClick={() => setIsPreferredOpen(!isPreferredOpen)}
              $isOptionChoosed={formData.preferredLang.length > 0}
            >
              <StyledCardFormSelectText
                size={4}
                label={t("PreferredLanguage")}
                $isActive={isPreferredOpen || formData.preferredLang.length > 0}
              />
              <Text size={4} label={t(formData.preferredLang)} />
            </StyledCardFormSelect>
            <StyledCardFormOptions $isOpen={isPreferredOpen}>
              <StyledCardFormOption title={t("PreferredLanguage")}>
                {t("PreferredLanguage")}
              </StyledCardFormOption>
              {preferredLang.map((item) => (
                <StyledCardFormOption
                  key={item.id}
                  title={t(item.lang)}
                  onClick={() => handleChangeSelectLang(item.lang)}
                >
                  {t(item.lang)}
                </StyledCardFormOption>
              ))}
            </StyledCardFormOptions>
          </StyledCardFormSelectWrapper>

          <StyledCardFormSelectWrapper>
            <StyledCardFormSelect
              onClick={() => setIsTimeZoneOpen(!isTimeZoneOpen)}
              $isOptionChoosed={formData.timeZone.length > 0}
            >
              <StyledCardFormSelectText
                size={4}
                label={t("TimeZone")}
                $isActive={isTimeZoneOpen || formData.timeZone.length > 0}
              />
              <Text size={4} label={formData.timeZone} />
            </StyledCardFormSelect>
            <StyledCardFormOptions $isOpen={isTimeZoneOpen}>
              <StyledCardFormOption title={t("TimeZone")}>
                {t("TimeZone")}
              </StyledCardFormOption>
              {timeZone.map((item) => (
                <StyledCardFormOption
                  key={item.id}
                  title={item.time}
                  onClick={() => handleChangeSelectTime(item.time)}
                >
                  {item.time}
                </StyledCardFormOption>
              ))}
            </StyledCardFormOptions>
          </StyledCardFormSelectWrapper>

          <StyledCardFormTextArea
            fullWidth={true}
            label={t("Comment")}
            name="commentArea"
            value={formData.commentArea}
            onChange={(event) => handleChangeTextArea(event)}
          />

          <StyledCardFormAgreementWrapper>
            <HCaptcha
              ref={refHCaptcha}
              onVerify={handleHCaptchaChange}
              onExpire={() => handleHCaptchaChange(null)}
            />
            <StyledCardFormTextAgree color="#808080" fontSize="12px">
              <Trans
                t={t}
                i18nKey={"ByClickingSubmit"}
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
            </StyledCardFormTextAgree>
          </StyledCardFormAgreementWrapper>
          <StyledCardFormButton
            label={t("SubmitRequest")}
            disabled={
              checkStatus.fullName !== "success" ||
              checkStatus.companyName !== "success" ||
              checkStatus.email !== "success" ||
              formData.hCaptcha === null ||
              formData.preferredLang.length === 0 ||
              formData.timeZone.length === 0
            }
            onClick={handleSubmit}
            status={status}
          />
          <StyledCardFormStatusText
            label={status === "success" ? t("RequestSuccessfully") : t("RequestError")}
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