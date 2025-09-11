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
import { TextArea } from "@src/components/ui/TextArea";
import { HCaptcha } from "@src/components/ui/HCaptcha";
import { Link } from "@src/components/ui/Link";
import { ILoaderButton, LoaderButton } from "@src/components/ui/LoaderButton";
import { usePageTrack } from "@src/lib/hooks/useGA";

interface IInitialFormData {
  fullName: string;
  email: string;
  link: string;
  moreDetails: string;
  hCaptcha: string | null;
}

const Form = () => {
  const { t } = useTranslation("influencer-program");
  const hCaptchaRef = useRef<ReactCaptcha | null>(null);

  const pageTrack = usePageTrack();

  const initialFormData: IInitialFormData = {
    fullName: "",
    email: "",
    link: "",
    moreDetails: "",
    hCaptcha: null,
  };

  const [formStatus, setFormStatus] =
    useState<ILoaderButton["status"]>("default");
  const [quoteFormData, setQuoteFormData] = useState(initialFormData);
  const [isFormValid, setIsFormValid] = useState(false);

  const isFullNameValid =
    quoteFormData.fullName.length > 0 &&
    validateFullName(quoteFormData.fullName);
  const isEmailValid =
    quoteFormData.email.length > 0 && validateEmail(quoteFormData.email);
  const isLinkValid = quoteFormData.link.length > 0;
  const isMoreDetailsValid = quoteFormData.moreDetails.length > 0;

  const handleRecaptchaChange = (token: string | null) => {
    setQuoteFormData((prevData) => ({
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
    setQuoteFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
    setIsEmpty((prevState) => ({
      ...prevState,
      [field]: value.length === 0,
    }));
  };

  const checkFormValid = () => {
    setIsFormValid(
      isFullNameValid &&
        isEmailValid &&
        isLinkValid &&
        isMoreDetailsValid &&
        !!quoteFormData.hCaptcha,
    );
  };

  const clearData = () => {
    setQuoteFormData(initialFormData);
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

      setTimeout(() => {
        pageTrack("influencer-program-request");
        setFormStatus("success"); // change status after request
      }, 3000);

      setTimeout(() => {
        setFormStatus("default");
      }, 5000);
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
              placeholder={t("Name")}
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

            <Input
              onChange={(e) => handleInputChange("link", e.target.value)}
              onBlur={() => {
                setIsEmpty((prev) => ({
                  ...prev,
                  link: quoteFormData.link.length === 0,
                }));
                checkFormValid();
              }}
              value={quoteFormData.link}
              label={t("Link")}
              caption={t("SiteURL")}
              required
              status={
                isEmpty.link
                  ? "error"
                  : quoteFormData.link
                    ? "success"
                    : "default"
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
                    moreDetails: quoteFormData.moreDetails.length === 0,
                  }));
                  checkFormValid();
                }}
                value={quoteFormData.moreDetails}
                label={t("MoreDetails")}
                required
                status={
                  isEmpty.moreDetails
                    ? "default"
                    : quoteFormData.moreDetails
                      ? "success"
                      : "default"
                }
              />
              <Text fontSize="12px" lineHeight="18px" label={t("TellUs")} />
            </StyledTextareWrapper>

            <StyledHCaptchaWrapper>
              <HCaptcha
                ref={hCaptchaRef}
                onVerify={handleRecaptchaChange}
                onExpire={() => handleRecaptchaChange(null)}
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
                : t("ErrorRequestText")
            }
          />
        </StyledFormWrapper>
      </Container>
    </Section>
  );
};

export { Form };
