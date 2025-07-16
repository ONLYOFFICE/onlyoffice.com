import { Trans, useTranslation } from "next-i18next";
import {
  StyledCanceledFormCheckboxWrapper,
  StyledCanceledFormText,
  StyledCanceledFormTextarea,
  StyledCanceledFormWrapper,
  StyledCanceledHCaptchaWrapper,
} from "./CanceledForm.styled";
import { Checkbox } from "@src/components/ui/Checkbox";
import { useState, useCallback, useRef, useEffect } from "react";
import { TextArea } from "@src/components/ui/TextArea";
import { HCaptcha } from "@src/components/widgets/HCaptcha";
import ReactCaptcha from "@hcaptcha/react-hcaptcha";
import { ILoaderButton, LoaderButton } from "@src/components/ui/LoaderButton";
import { validateEmail } from "@src/utils/validators";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { Input } from "@src/components/ui/Input";
import { useRouter } from "next/router";
import {
  ICanceledFormData,
  TMarkKeys,
  CanceledFormProps,
} from "./CanceledForm.types";
import { Heading } from "@src/components/ui/Heading";

const CanceledForm = ({
  tableName,
  checkboxeItems,
  textareaHeading,
  onShowCoupons,
  isEmailOnPage = true,
  locale,
}: CanceledFormProps) => {
  const { t } = useTranslation("canceled");
  const router = useRouter();
  const hCaptchaRef = useRef<ReactCaptcha | null>(null);
  const [formStatus, setFormStatus] =
    useState<ILoaderButton["status"]>("default");

  const initialFormData = {
    checkboxes: "Other",
    mark1: 0,
    mark2: 0,
    mark3: 0,
    mark4: 0,
    mark5: 0,
    mark6: 1,
    message: "",
    email: "",
    from: "",
    spam: 0,
    calls: 1,
    recaptchaResponse: null,
    table_name: tableName,
    locale,
    referer: "",
  };
  const [formData, setFormData] = useState<ICanceledFormData>(initialFormData);
  const [isEmpty, setIsEmpty] = useState({
    email: false,
    message: false,
  });

  const handleCheckboxChange = useCallback((itemId: string, mark: string) => {
    setFormData((prev) => {
      const selected = prev.checkboxes ? prev.checkboxes.split(", ") : [];
      const isChecked = selected.includes(itemId);
      let newCheckboxesArr: string[];
      if (isChecked) {
        newCheckboxesArr = selected.filter((id) => id !== itemId);
      } else {
        newCheckboxesArr = [...selected, itemId];
      }
      return {
        ...prev,
        checkboxes: newCheckboxesArr.filter(Boolean).join(", "),
        [mark]: isChecked ? 0 : 1,
      };
    });
  }, []);

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
    setFormData((prev) => ({
      ...prev,
      recaptchaResponse: token,
    }));
  };

  const clearData = () => {
    setFormData(initialFormData);
    setFormStatus("default");
    hCaptchaRef.current?.resetCaptcha();
  };

  const isAnyMarkChecked = (
    ["mark1", "mark2", "mark3", "mark4", "mark5", "mark6"] as TMarkKeys[]
  ).some((key) => formData[key] === 1);

  const isOtherChecked = formData.mark6 === 1;

  const isEmailValid = isEmailOnPage
    ? formData.email.length > 0 && validateEmail(formData.email)
    : true;

  const isHCaptchaPassed = Boolean(formData.recaptchaResponse);

  const isFormValid =
    isAnyMarkChecked &&
    (isOtherChecked
      ? formData.message.length > 0 && isEmailValid && isHCaptchaPassed
      : isEmailValid && isHCaptchaPassed);

  useEffect(() => {
    if (router.isReady) {
      let fromParam =
        typeof router.query.from === "string" ? router.query.from : "";
      if (!fromParam) {
        const path =
          typeof window !== "undefined" ? window.location.pathname : "";
        fromParam =
          path.split("/").splice(1, 2).join("/").split(".").shift() || "";
      }
      setFormData((prev) => ({ ...prev, from: fromParam }));
    }
  }, [router.isReady, router.query.from]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setFormData((prev) => ({
        ...prev,
        referer: document.referrer,
      }));
    }
  }, []);

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
      const hCaptchaResponse = await fetch("/api/hcaptcha-verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: formData.recaptchaResponse }),
      });

      const hCaptchaData = await hCaptchaResponse.json();

      if (hCaptchaData.status === "errorhCaptchaInvalid") {
        setFormStatus("error");
        setTimeout(() => {
          setFormStatus("default");
        }, 5000);
        return;
      }

      const canceledFormResponse = await fetch("/api/canceled-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const canceledFormData = await canceledFormResponse.json();
      if (canceledFormResponse.ok && canceledFormData.status === "success") {
        setFormStatus("success");
        onShowCoupons();

        if (formData.table_name === "account_cancelled_request") {
          setTimeout(() => {
            window.location.href = "/";
          }, 1500);
        } else {
          setTimeout(() => {
            clearData();
          }, 5000);
        }
      } else {
        setFormStatus("error");
        setTimeout(() => {
          setFormStatus("default");
          clearData();
        }, 5000);
      }
    } catch (error) {
      console.error(error);
      setFormStatus("error");
    }
  };

  return (
    <StyledCanceledFormWrapper>
      <Heading level={3} label={t("WhyDidYouDecideToUninstallOnlyoffice")} />
      <StyledCanceledFormText
        size={2}
        color="#666666"
        label={t("SelectAllThatApply")}
      />
      <StyledCanceledFormCheckboxWrapper>
        {checkboxeItems.map((item) => (
          <Checkbox
            key={item.id}
            label={t(item.label)}
            checked={formData.checkboxes.split(", ").includes(item.id)}
            onChange={() => handleCheckboxChange(item.id, item.mark)}
          />
        ))}
      </StyledCanceledFormCheckboxWrapper>

      {/* <Heading level={3} label={t("WhatShouldWeImproveInOnlyofficePersonal")} /> */}
      <Heading level={3} label={textareaHeading} />

      <StyledCanceledFormTextarea>
        <TextArea
          onChange={(e) => handleInputChange("message", e.target.value)}
          onBlur={() => {
            setIsEmpty((prev) => ({
              ...prev,
              message: formData.message.length === 0,
            }));
          }}
          value={formData.message}
          label={t("YourMessageHere")}
          rows={4}
          fullWidth
          required={!!formData.mark6}
          status={formData.message ? "success" : "default"}
        />
      </StyledCanceledFormTextarea>

      {isEmailOnPage && (
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
      )}

      <StyledCanceledHCaptchaWrapper>
        <HCaptcha
          ref={hCaptchaRef}
          onVerify={handleHCaptchaChange}
          onExpire={() => handleHCaptchaChange(null)}
        />

        <Text fontSize="12px" lineHeight="20px" color="#808080">
          <Trans
            t={t}
            i18nKey="ByClickingSendFeedback"
            components={[
              <Link
                href="https://help.onlyoffice.co/Products/Files/doceditor.aspx?fileid=6615734&doc=cy9XcGc5TXNONjVTMkNrR2NZUEVTT2E1Y1FDZGVRQ1YvOTJYTnpkZ3JEWT0_IjY2MTU3MzQi0"
                target="_blank"
                color="main"
                textUnderline
                hover="underline-none"
                key="0"
              />,
              <Link
                href="https://help.onlyoffice.co/products/files/doceditor.aspx?fileid=5048502&doc=SXhWMEVzSEYxNlVVaXJJeUVtS0kyYk14YWdXTEFUQmRWL250NllHNUFGbz0_IjUwNDg1MDIi0&_ga=2.101739969.1105072466.1587625676-1002786878.1584771261"
                target="_blank"
                color="main"
                textUnderline
                hover="underline-none"
                key="1"
              />,
            ]}
          />
        </Text>
      </StyledCanceledHCaptchaWrapper>

      <LoaderButton
        onClick={onSubmit}
        status={formStatus}
        label={t("SendFeedback")}
        disabled={!isFormValid}
        fullWidth
      />
    </StyledCanceledFormWrapper>
  );
};

export { CanceledForm };
