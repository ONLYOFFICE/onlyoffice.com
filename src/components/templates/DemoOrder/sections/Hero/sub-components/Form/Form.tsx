import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Trans, useTranslation } from "next-i18next";
import { ISelectOption, Select } from "@src/components/ui/Select";
import { Input } from "@src/components/ui/Input";
import { TextArea } from "@src/components/ui/TextArea";
import { HCaptcha } from "@src/components/ui/HCaptcha";
import { Link } from "@src/components/ui/Link";
import { ILoaderButton, LoaderButton } from "@src/components/ui/LoaderButton";
import ReactCaptcha from "@hcaptcha/react-hcaptcha";
import {
  validateFullName,
  validateEmail,
  validateWebsite,
} from "@src/utils/validators";
import { IFormData } from "./Form.types";
import { Checkbox } from "@src/components/ui/Checkbox";

import {
  StyledHeroAgreeText,
  StyledHeroForm,
  StyledHeroHCaptchaWrapper,
  StyledHeroLoaderButtonWrapper,
  StyledHeroLoadText,
  StyledHeroRequestStatusText,
  StyledTwoInputsContainer,
} from "./Form.styled";
import { Heading } from "@src/components/ui/Heading";
import DateTimePicker from "@src/components/ui/DateTimePicker/DateTimePicker";

const Form = () => {
  const { t } = useTranslation("demo-order");
  const { locale } = useRouter();
  const hCaptchaRef = useRef<ReactCaptcha | null>(null);
  const [hCaptchaSize, setHCaptchaSize] = useState<"normal" | "compact">(
    "normal",
  );
  const [formStatus, setFormStatus] =
    useState<ILoaderButton["status"]>("default");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isEmpty, setIsEmpty] = useState({
    fullName: false,
    email: false,
    phone: false,
    companyName: false,
    website: false,
    note: false,
    spam: false,
  });
  const initialFormData: IFormData = {
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    website: "",
    note: "",
    hcaptcha: null,
    date: "",
    time: "",
    timeZoneOffset: "",
    lang: "",
    module: "",
    spam: false,
  };

  const [formData, setFormData] = useState<IFormData>(initialFormData);

  const isFullNameValid =
    formData.fullName.length > 0 && validateFullName(formData.fullName);
  const isEmailValid =
    formData.email.length > 0 && validateEmail(formData.email);
  const isDateValid =
    formData.date.length > 0 &&
    formData.time.length > 0 &&
    formData.timeZoneOffset.length > 0;
  const isProductValid = formData.module.length > 0;
  const isHCaptchaValid = formData.hcaptcha !== null;

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

  const handleSelectChange = (field: string, value: ISelectOption | null) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value ? value.value : "",
    }));
  };

  const handleDateChange = (date: Date | null, time: string, tz: string) => {
    setFormData((prev) => ({
      ...prev,
      date: date ? date.toISOString() : "",
      time,
      timeZoneOffset: tz,
    }));
  };

  const clearData = () => {
    setFormData(initialFormData);
    setFormStatus("default");
    setIsFormValid(false);
    setSelectedProduct([]);
    setSelectedLang([]);
    handleDateChange(null, "", "");
    hCaptchaRef.current?.resetCaptcha();
  };

  const onSubmit = async () => {
    if (formStatus === "loading") return;

    if (formStatus === "error") {
      setFormStatus("default");
      return;
    }

    if (formStatus === "success") {
      clearData();
      setFormStatus("default");
      return;
    }

    setFormStatus("loading");

    try {
      const d = new Date(formData.date);
      const formattedDate = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;

      const responseDemoOrder = await fetch("/api/demo-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName ?? "",
          email: formData.email ?? "",
          website: formData.website ?? "",
          companyName: formData.companyName ?? "",
          date: formattedDate,
          time: formData.time ?? "",
          timeZoneOffset: formData.timeZoneOffset ?? "",
          lang: formData.lang || String(locale),
          module: formData.module ?? "",
          note: formData.note ?? "",
          spam: formData.spam ?? false,
          hCaptchaResponse: formData.hcaptcha,
        }),
      });
      const dataDemoOrder = await responseDemoOrder.json();

      if (dataDemoOrder.status === "errorHCaptchaInvalid") {
        setFormStatus("error");
        setTimeout(() => {
          setFormStatus("default");
        }, 5000);
        return;
      } else if (dataDemoOrder.status === "success") {
        setFormStatus("success");

        setTimeout(() => {
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

  const [selectedProduct, setSelectedProduct] = useState<ISelectOption[]>([]);
  const options = [
    { value: "ONLYOFFICE_Docs", label: t("OODocs") },
    { value: "ONLYOFFICE_Docspace", label: t("OODocspace") },
    { value: "Odoo_integration", label: t("OdooIntegration") },
    { value: "Nextcloud_integration", label: t("NextcloudIntegration") },
    { value: "ownCloud_integration", label: t("ownCloudIntegration") },
    { value: "Wordpress_integration", label: t("WordpressIntegration") },
    { value: "Moodle_integration", label: t("MoodleIntegration") },
    { value: "Liferay_integration", label: t("LiferayIntegration") },
    { value: "Others", label: t("Others") },
  ];
  const [selectedLang, setSelectedLang] = useState<ISelectOption[]>([]);
  const langOptions = [
    { value: "en", label: "English" },
    { value: "de", label: "Deutsch" },
    { value: "fr", label: "Français" },
    { value: "es", label: "Español" },
    { value: "it", label: "Italiano" },
    { value: "pt", label: "Português" },
    { value: "zh", label: "中文" },
    { value: "ja", label: "日本語" },
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateSize = () => {
      setHCaptchaSize(window.innerWidth < 334 ? "compact" : "normal");
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    setIsFormValid(
      isFullNameValid &&
        isEmailValid &&
        isDateValid &&
        isProductValid &&
        isHCaptchaValid,
    );
  }, [
    isFullNameValid,
    isEmailValid,
    isDateValid,
    isProductValid,
    isHCaptchaValid,
    formData,
  ]);

  return (
    <>
      <Heading size={4} level={2} label={t("BookDemo")} />
      <StyledHeroForm>
        <Input
          label={t("FullName")}
          placeholder={t("NameSurname")}
          type="text"
          value={formData.fullName}
          onChange={(e) => handleInputChange("fullName", e.target.value)}
          required
          onBlur={() => {
            setIsEmpty((prev) => ({
              ...prev,
              fullName: formData.fullName.length === 0,
            }));
          }}
          status={
            isEmpty.fullName
              ? "error"
              : formData.fullName.length > 0
                ? validateFullName(formData.fullName)
                  ? "success"
                  : "error"
                : "default"
          }
          caption={
            formData.fullName.length === 0
              ? t("FullNameIsEmpty")
              : !validateFullName(formData.fullName)
                ? t("FullNameIsIncorrect")
                : ""
          }
        />
        <Input
          onChange={(e) => handleInputChange("email", e.target.value)}
          onBlur={() => {
            setIsEmpty((prev) => ({
              ...prev,
              email: formData.email.length === 0,
            }));
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
        <StyledTwoInputsContainer>
          <Input
            value={formData.website}
            placeholder="e.g. https://www.onlyoffice.com"
            label={t("WebsiteAddress")}
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
            }}
            status={
              formData.website.length > 0
                ? validateWebsite(formData.website)
                  ? "success"
                  : "error"
                : "default"
            }
            caption={
              !validateWebsite(formData.website) ? t("WebsiteIsIncorrect") : ""
            }
          />
          <Input
            onChange={(e) => handleInputChange("companyName", e.target.value)}
            onBlur={() => {
              setIsEmpty((prev) => ({
                ...prev,
                companyName: formData.companyName.length === 0,
              }));
            }}
            value={formData.companyName}
            label={t("CompanyName")}
            status={formData.companyName ? "success" : "default"}
          />
        </StyledTwoInputsContainer>
        <DateTimePicker
          supportMinUTC="07:00"
          supportMaxUTC="14:00"
          label={t("Date")}
          placeholder={t("ChooseTheDate")}
          sublabel={t("PleaseAllowNotLessThan48Hours")}
          minDayDate={2}
          locale={String(locale)}
          onChange={handleDateChange}
          selectedFromForm={
            formData.date
              ? {
                  date: new Date(formData.date),
                  time: formData.time,
                  tz: formData.timeZoneOffset,
                }
              : null
          }
        />
        <Select
          selected={selectedLang}
          setSelected={(newValue) => {
            setSelectedLang(newValue);
            const actualValue =
              Array.isArray(newValue) && newValue.length > 0
                ? newValue[0]
                : null;
            handleSelectChange("lang", actualValue);
          }}
          options={langOptions}
          label={t("Language")}
          maxWidth="100%"
          status={selectedLang.length > 0 ? "success" : "default"}
        />
        <Select
          selected={selectedProduct}
          setSelected={(newValue) => {
            setSelectedProduct(newValue);
            const actualValue =
              Array.isArray(newValue) && newValue.length > 0
                ? newValue[0]
                : null;
            handleSelectChange("module", actualValue);
          }}
          options={options}
          label={t("ProductInterest")}
          maxWidth="100%"
          status={selectedProduct.length > 0 ? "success" : "default"}
        />
        <TextArea
          label={t("Comment")}
          value={formData.note}
          onChange={(e) => handleInputChange("note", e.target.value)}
          fullWidth={true}
          onBlur={() => {
            setIsEmpty((prev) => ({
              ...prev,
              note: formData.note.length === 0,
            }));
          }}
          status={formData.note ? "success" : "default"}
        />
        <Checkbox
          data-testid="demo-order-spam-checkbox"
          checked={formData.spam}
          onChange={() =>
            setFormData((prev) => ({
              ...prev,
              spam: !prev.spam,
            }))
          }
          label={t("SendMeTipsUpdatesAndOffers")}
        />
        <StyledHeroHCaptchaWrapper>
          <HCaptcha
            ref={hCaptchaRef}
            size={hCaptchaSize}
            onVerify={(token) => {
              setFormData((prev) => ({ ...prev, hcaptcha: token }));
            }}
            onExpire={() => {
              setFormData((prev) => ({ ...prev, hcaptcha: null }));
            }}
          />
          <StyledHeroAgreeText color="#808080">
            <Trans
              t={t}
              i18nKey="ByClickingSubmit"
              components={[
                <Link
                  key="0"
                  href="https://help.onlyoffice.co/Products/Files/doceditor.aspx?fileid=6615734&doc=cy9XcGc5TXNONjVTMkNrR2NZUEVTT2E1Y1FDZGVRQ1YvOTJYTnpkZ3JEWT0_IjY2MTU3MzQi0"
                  target="_blank"
                  color="main"
                  textUnderline={true}
                />,
                <Link
                  key="1"
                  href="https://help.onlyoffice.co/products/files/doceditor.aspx?fileid=5048502&doc=SXhWMEVzSEYxNlVVaXJJeUVtS0kyYk14YWdXTEFUQmRWL250NllHNUFGbz0_IjUwNDg1MDIi0&_ga=2.101739969.1105072466.1587625676-1002786878.1584771261"
                  target="_blank"
                  color="main"
                  textUnderline={true}
                />,
              ]}
            />
          </StyledHeroAgreeText>
        </StyledHeroHCaptchaWrapper>
        <StyledHeroLoaderButtonWrapper>
          {formStatus === "loading" && (
            <StyledHeroLoadText
              size={4}
              label={t("PleaseWait")}
              color="#999999"
            />
          )}
          <LoaderButton
            onClick={() => onSubmit()}
            status={formStatus}
            label={t("Submit")}
            disabled={!isFormValid}
            fullWidth
          />
          {formStatus === "success" && (
            <StyledHeroRequestStatusText
              textAlign="center"
              size={3}
              label={t("YourRequestHasBeenSentSuccessfully")}
            />
          )}
          {formStatus === "error" && (
            <StyledHeroRequestStatusText
              textAlign="center"
              size={3}
              color="#cb0000"
              label={t("WeAreSorryButAnErrorOccurred")}
            />
          )}
        </StyledHeroLoaderButtonWrapper>
      </StyledHeroForm>
    </>
  );
};

export { Form };
