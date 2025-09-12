import React, { useRef, useState, useEffect } from "react";
import ReactCaptcha from "@hcaptcha/react-hcaptcha";
import DateTimePicker from "@src/components/ui/DateTimePicker/DateTimePicker";
import { useRouter } from "next/router";
import { Trans, useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { ISelectOption, Select } from "@src/components/ui/Select";
import { Input } from "@src/components/ui/Input";
import { HCaptcha } from "@src/components/ui/HCaptcha";
import { IPhoneInputRef } from "@src/components/widgets/PhoneInput";
import { PhoneInput } from "@src/components/widgets/PhoneInput";
import { Link } from "@src/components/ui/Link";
import { ILoaderButton, LoaderButton } from "@src/components/ui/LoaderButton";
import { validateFullName, validateEmail } from "@src/utils/validators";
import {
  StyledHeroAgreeText,
  StyledHeroForm,
  StyledHeroHCaptchaWrapper,
  StyledHeroLoaderButtonWrapper,
  StyledHeroLoadText,
  StyledHeroRequestStatusText,
  StyledTwoInputsContainer,
  StyledHeroText,
} from "./Hero.styled";
import {
  selectLangItems,
  selectProductItems,
  selectCallTopicItems,
} from "./data/selectItems";

interface IFormData {
  fullName: string;
  email: string;
  phone: string;
  lang: string;
  product: string;
  date: string;
  time: string;
  timeZoneOffset: string;
  topic: string;
  hcaptcha: string | null;
}

const Hero = () => {
  const { t } = useTranslation("call-back-form");
  const { locale } = useRouter();
  const phoneInputRef = useRef<IPhoneInputRef | null>(null);
  const hCaptchaRef = useRef<ReactCaptcha | null>(null);
  const [selectedLang, setSelectedLang] = useState<ISelectOption[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ISelectOption[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<ISelectOption[]>([]);
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
    lang: false,
    product: false,
    date: false,
    time: false,
    timeZoneOffset: false,
    topic: false,
    hcaptcha: false,
  });
  const initialFormData: IFormData = {
    fullName: "",
    email: "",
    phone: "",
    lang: "",
    product: "",
    date: "",
    time: "",
    timeZoneOffset: "",
    topic: "",
    hcaptcha: null,
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
  const isLanguageValid = formData.lang.length > 0;
  const isHCaptchaValid = formData.hcaptcha !== null;
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
    setSelectedTopic([]);
    handleDateChange(null, "", "");
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
      clearData();
      setFormStatus("default");
      return;
    }

    setFormStatus("loading");

    try {
      const d = new Date(formData.date);
      const formattedDate = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
      const responseCallBack = await fetch("/api/call-back-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName ?? "",
          email: formData.email ?? "",
          phone: formData.phone ?? "",
          language: formData.lang ?? "",
          product: formData.product ?? "",
          desireddatetime: formattedDate + " " + formData.time,
          timezone: formData.timeZoneOffset,
          calltheme: formData.topic ?? "",
          hCaptchaResponse: formData.hcaptcha,
        }),
      });

      const dataCallBack = await responseCallBack.json();

      if (dataCallBack.status === "errorHCaptchaInvalid") {
        setFormStatus("error");
        setTimeout(() => {
          setFormStatus("default");
        }, 5000);
        return;
      } else if (dataCallBack.status === "success") {
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
        isLanguageValid &&
        isHCaptchaValid &&
        isPhoneValid,
    );
  }, [
    isFullNameValid,
    isEmailValid,
    isDateValid,
    isLanguageValid,
    isHCaptchaValid,
    isPhoneValid,
    formData,
  ]);

  return (
    <Section>
      <Container maxWidth="680px">
        <Heading textAlign="center" size={3} level={1} label={t("HeroTitle")} />
        <StyledHeroText
          textAlign="center"
          label={t("PleaseCompleteAllTheFields")}
        />
        <StyledHeroForm>
          <Input
            label={t("FullName")}
            placeholder={t("FullName")}
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
            <PhoneInput
              ref={phoneInputRef}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              onBlur={() => {
                setIsEmpty((prev) => ({
                  ...prev,
                  phone: formData.phone.length === 0,
                }));
              }}
              status={
                isEmpty.phone ? "error" : formData.phone ? "success" : "default"
              }
              required
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
              options={selectLangItems}
              label={t("Language")}
              maxWidth="100%"
              status={selectedLang.length > 0 ? "success" : "default"}
            />
          </StyledTwoInputsContainer>
          <Select
            selected={selectedProduct}
            setSelected={(newValue) => {
              setSelectedProduct(newValue);
              const actualValue =
                Array.isArray(newValue) && newValue.length > 0
                  ? newValue[0]
                  : null;
              handleSelectChange("product", actualValue);
            }}
            options={selectProductItems.map((item) => ({
              ...item,
              label: t(item.label),
            }))}
            label={t("Product")}
            maxWidth="100%"
            status={selectedProduct.length > 0 ? "success" : "default"}
          />
          <DateTimePicker
            supportMinUTC="06:00"
            supportMaxUTC="19:00"
            label={t("Date")}
            minDayDate={1}
            placeholder={t("Date")}
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
            selected={selectedTopic}
            setSelected={(newValue) => {
              setSelectedTopic(newValue);
              const actualValue =
                Array.isArray(newValue) && newValue.length > 0
                  ? newValue[0]
                  : null;
              handleSelectChange("topic", actualValue);
            }}
            options={selectCallTopicItems.map((item) => ({
              ...item,
              label: t(item.label),
            }))}
            label={t("CallTopic")}
            maxWidth="100%"
            status={selectedTopic.length > 0 ? "success" : "default"}
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
      </Container>
    </Section>
  );
};

export { Hero };
