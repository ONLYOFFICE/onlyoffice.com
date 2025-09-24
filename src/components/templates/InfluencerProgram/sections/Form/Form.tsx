import { Trans, useTranslation } from "next-i18next";
import ReactCaptcha from "@hcaptcha/react-hcaptcha";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import {
  StyledForm,
  StyledFormStatusText,
  StyledFormWrapper,
  StyledHCaptchaWrapper,
  StyledTextareWrapper,
} from "./Form.styled";
import { Input } from "@src/components/ui/Input";
import { useRef, useState } from "react";
import { validateEmail, validateFullName } from "@src/utils/validators";
import { validateTestEmail } from "@src/utils/IsTestEmail";
import { getFromParam } from "@src/utils/getParams";
import { TextArea } from "@src/components/ui/TextArea";
import { HCaptcha } from "@src/components/ui/HCaptcha";
import { Link } from "@src/components/ui/Link";
import { ILoaderButton, LoaderButton } from "@src/components/ui/LoaderButton";
import { IInitialformData } from "./Form.types";

const Form = () => {
  const { t } = useTranslation("influencer-program");
  const hCaptchaRef = useRef<ReactCaptcha | null>(null);
  const from = getFromParam();

  const initialformData: IInitialformData = {
    fromPage: from ?? "",
    fullName: "",
    email: "",
    link: "",
    moreDetails: "",
    hCaptcha: null,
  };

  const [formStatus, setFormStatus] =
    useState<ILoaderButton["status"]>("default");
  const [formData, setFormData] = useState(initialformData);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isTestEmailValid, setIsTestEmailValid] = useState(false);

  const isFullNameValid =
    formData.fullName.length > 0 && validateFullName(formData.fullName);
  const isEmailValid =
    formData.email.length > 0 && validateEmail(formData.email);
  const isLinkValid = formData.link.length > 0;
  const isMoreDetailsValid = formData.moreDetails.length > 0;

  const handleHCaptchaChange = (token: string | null) => {
    setFormData((prevData) => ({
      ...prevData,
      hCaptcha: token,
    }));
    setIsFormValid(
      isFullNameValid &&
        isEmailValid &&
        isLinkValid &&
        isMoreDetailsValid &&
        !!token,
    );
    setFormStatus("default");
  };

  const [isEmpty, setIsEmpty] = useState({
    fullName: false,
    email: false,
    link: false,
    moreDetails: false,
  });

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

  const checkFormValid = (testEmailOverride?: boolean) => {
    setIsFormValid(
      isFullNameValid &&
        isEmailValid &&
        isLinkValid &&
        isMoreDetailsValid &&
        ((testEmailOverride ?? isTestEmailValid) ? true : !!formData.hCaptcha),
    );
  };

  const clearData = () => {
    setFormData(initialformData);
    setFormStatus("default");
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
      const formResponse = await fetch("/api/influencer-program", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const responseFormData = await formResponse.json();
      if (responseFormData.status === "success") {
        setFormStatus("success");

        setTimeout(() => {
          clearData();
        }, 5000);
      } else {
        setFormStatus("error");
        setTimeout(() => {
          setFormStatus("default");
          clearData();
        }, 5000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Section
      id="form"
      tabletSmallSpacing={["112px", "64px"]}
      mobileSpacing={["49px", "46px"]}
      background="#f5f5f5"
    >
      <Container>
        <Heading level={2} size={3} textAlign="center">
          <Trans
            t={t}
            i18nKey="JoinOOInfluencerProgram"
            components={[<Text as="span" color="main" key="0" />]}
          />
        </Heading>
        <StyledFormWrapper>
          <Text size={1} label={t("FillOutTheForm")} textAlign="center" />

          <StyledForm>
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
                const isTestEmail = await validateTestEmail(formData.email);
                setIsTestEmailValid(Boolean(isTestEmail));
                checkFormValid(isTestEmail);
              }}
              value={formData.email}
              label={t("Email")}
              placeholder={t("Name")}
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

            <Input
              onChange={(e) => handleInputChange("link", e.target.value)}
              onBlur={() => {
                setIsEmpty((prev) => ({
                  ...prev,
                  link: formData.link.length === 0,
                }));
                checkFormValid();
              }}
              value={formData.link}
              label={t("Link")}
              caption={t("SiteURL")}
              required
              status={
                isEmpty.link ? "error" : formData.link ? "success" : "default"
              }
            />

            <StyledTextareWrapper>
              <TextArea
                onChange={(e) =>
                  handleInputChange("moreDetails", e.target.value)
                }
                onBlur={() => {
                  setIsEmpty((prev) => ({
                    ...prev,
                    moreDetails: formData.moreDetails.length === 0,
                  }));
                  checkFormValid();
                }}
                value={formData.moreDetails}
                label={t("MoreDetails")}
                required
                status={
                  isEmpty.moreDetails
                    ? "default"
                    : formData.moreDetails
                      ? "success"
                      : "default"
                }
              />
              <Text fontSize="12px" lineHeight="18px" label={t("TellUs")} />
            </StyledTextareWrapper>

            <StyledHCaptchaWrapper>
              <HCaptcha
                ref={hCaptchaRef}
                onVerify={handleHCaptchaChange}
                onExpire={() => handleHCaptchaChange(null)}
              />

              <Text fontSize="12px" lineHeight="20px">
                <Trans
                  t={t}
                  i18nKey="ByClickingSubmit"
                  components={[
                    <Link
                      href="https://help.onlyoffice.co/Products/Files/doceditor.aspx?fileid=6615734&doc=cy9XcGc5TXNONjVTMkNrR2NZUEVTT2E1Y1FDZGVRQ1YvOTJYTnpkZ3JEWT0_IjY2MTU3MzQi0"
                      color="main"
                      textUnderline
                      hover="underline-none"
                      key="0"
                    />,
                    <Link
                      href="https://help.onlyoffice.co/products/files/doceditor.aspx?fileid=5048502&doc=SXhWMEVzSEYxNlVVaXJJeUVtS0kyYk14YWdXTEFUQmRWL250NllHNUFGbz0_IjUwNDg1MDIi0&_ga=2.101739969.1105072466.1587625676-1002786878.1584771261"
                      color="main"
                      textUnderline
                      hover="underline-none"
                      key="1"
                    />,
                  ]}
                />
              </Text>
            </StyledHCaptchaWrapper>

            <LoaderButton
              onClick={onSubmit}
              status={formStatus}
              label={t("SUBMIT")}
              disabled={!isFormValid}
            />
          </StyledForm>

          <StyledFormStatusText
            $isError={formStatus === "error"}
            $isDisabled={formStatus === "success" || formStatus === "error"}
            label={
              formStatus === "success"
                ? t("SuccessfullyRequestText")
                : formStatus === "error"
                  ? t("ErrorRequestText")
                  : ""
            }
          />
        </StyledFormWrapper>
      </Container>
    </Section>
  );
};

export { Form };
