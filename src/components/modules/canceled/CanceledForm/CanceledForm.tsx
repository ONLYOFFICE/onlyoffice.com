import { Trans, useTranslation } from "next-i18next";
import {
  StyledCanceledFormCheckboxWrapper,
  StyledCanceledFormText,
  StyledCanceledFormTextarea,
  StyledCanceledFormWrapper,
  StyledCanceledHCaptchaWrapper,
} from "./CanceledForm.styled";
import { Checkbox } from "@src/components/ui/Checkbox";
import { useState, useRef } from "react";
import { TextArea } from "@src/components/ui/TextArea";
import { HCaptcha } from "@src/components/ui/HCaptcha";
import ReactCaptcha from "@hcaptcha/react-hcaptcha";
import { ILoaderButton, LoaderButton } from "@src/components/ui/LoaderButton";
import { validateEmail } from "@src/utils/validators";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { Input } from "@src/components/ui/Input";
import {
  ICanceledFormData,
  TMarkKeys,
  CanceledFormProps,
} from "./CanceledForm.types";
import { Heading } from "@src/components/ui/Heading";
import { validateTestEmail } from "@src/utils/IsTestEmail";
import { getFromParam } from "@src/utils/getParams";

const CanceledForm = ({
  apiUrl,
  checkboxeItems,
  textareaHeading,
  onShowCoupons,
  isEmailRequired = true,
  locale,
}: CanceledFormProps) => {
  const { t } = useTranslation("canceled");
  const hCaptchaRef = useRef<ReactCaptcha | null>(null);
  const [formStatus, setFormStatus] =
    useState<ILoaderButton["status"]>("default");
  const from = getFromParam();

  const initialFormData = {
    checkboxes: "Other",
    mark1: "0",
    mark2: "0",
    mark3: "0",
    mark4: "0",
    mark5: "0",
    mark6: "1",
    message: "",
    email: "",
    from: from ?? "",
    spam: 0,
    calls: 1,
    hCaptchaResponse: null,
    locale,
  };
  const [formData, setFormData] = useState<ICanceledFormData>(initialFormData);
  const [isEmpty, setIsEmpty] = useState({
    email: false,
    message: false,
  });
  const [isTestEmailValid, setIsTestEmailValid] = useState(false);

  const handleCheckboxChange = (mark: TMarkKeys) => {
    setFormData((prev) => {
      const isChecked = prev[mark] === "1";

      const updatedMarks = {
        ...prev,
        [mark]: isChecked ? "0" : "1",
      };

      const orderedIds = checkboxeItems
        .filter((item) => updatedMarks[item.mark as TMarkKeys] === "1")
        .map((item) => item.id);

      return {
        ...updatedMarks,
        checkboxes: orderedIds.join(", "),
      };
    });
  };

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
      hCaptchaResponse: token,
    }));
  };

  const clearData = () => {
    setFormData(initialFormData);
    setFormStatus("default");
    hCaptchaRef.current?.resetCaptcha();
  };

  const isAnyMarkChecked = (
    ["mark1", "mark2", "mark3", "mark4", "mark5", "mark6"] as TMarkKeys[]
  ).some((key) => formData[key] === "1");

  const isOtherChecked = formData.mark6 === "1";

  const isEmailValid = isEmailRequired
    ? formData.email.length > 0 && validateEmail(formData.email)
    : true;

  const isHCaptchaPassed = isTestEmailValid
    ? true
    : Boolean(formData.hCaptchaResponse);

  const isFormValid =
    isAnyMarkChecked &&
    (isOtherChecked
      ? formData.message.length > 0 && isEmailValid && isHCaptchaPassed
      : isEmailValid && isHCaptchaPassed);

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
      const canceledFormResponse = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const canceledFormData = await canceledFormResponse.json();

      if (canceledFormData.status === "hCaptchaInvalid") {
        setFormStatus("error");
        setTimeout(() => {
          setFormStatus("default");
        }, 5000);
        return;
      } else if (
        canceledFormResponse.ok &&
        canceledFormData.status === "success"
      ) {
        setFormStatus("success");
        onShowCoupons();

        if (apiUrl === "/api/account-canceled") {
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
            onChange={() => handleCheckboxChange(item.mark)}
          />
        ))}
      </StyledCanceledFormCheckboxWrapper>

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
          required={formData.mark6 === "1"}
          status={formData.message ? "success" : "default"}
        />
      </StyledCanceledFormTextarea>

      <Input
        onChange={(e) => handleInputChange("email", e.target.value)}
        onBlur={async () => {
          if (isEmailRequired) {
            setIsEmpty((prev) => ({
              ...prev,
              email: formData.email.length === 0,
            }));
          }
          const isTestEmail = await validateTestEmail(formData.email);
          setIsTestEmailValid(Boolean(isTestEmail));
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
        required={isEmailRequired}
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
