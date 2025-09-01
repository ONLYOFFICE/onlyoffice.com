import { useState, useEffect, useCallback, useRef } from "react";
import { useTranslation, Trans } from "next-i18next";
import ReactCaptcha from "@hcaptcha/react-hcaptcha";
import {
  StyledLogInAccount,
  StyledLogInAccountLink,
  StyledLogInWrapper,
  StyledLogInHeading,
  StyledLogInContainer,
  StyledLogInForm,
  StyledSignUpCaption,
} from "./LogIn.styled";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { Input } from "@src/components/ui/Input";
import { HCaptcha } from "@src/components/ui/HCaptcha";
import { LoaderButton, ILoaderButton } from "@src/components/ui/LoaderButton";
import { validateEmail } from "@src/utils/validators";

interface ILogInProps {
  recaptchaLang: string;
}

const LogIn = ({ recaptchaLang }: ILogInProps) => {
  const { t } = useTranslation("docs-registration");

  const [formData, setFormData] = useState({
    email: "",
  });
  const [isEmpty, setIsEmpty] = useState({
    email: false,
  });
  const [isError, setIsError] = useState({
    email: false,
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [formStatus, setFormStatus] = useState<ILoaderButton["status"]>("default");

  const emailIsValid = formData.email.trim().length > 0 && validateEmail(formData.email);
  const [mailError, setMailError] = useState("");
  
  const [token, setToken] = useState("");
  const refHcaptcha = useRef<ReactCaptcha | null>(null);
  const [isCaptchaInvalid, setIsCaptchaInvalid] = useState(false);

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

  const checkFormValid = useCallback(() => {
    setIsFormValid(emailIsValid && !!token.length);
  }, [emailIsValid, token]);

  const handleHCaptchaChange = (token: string | null) => {
    setToken(token || "");
  };

  const _onComplete = (response: any) => {
    setFormStatus("default");

    if (response.status === 403) {
      setFormStatus("error");
      setIsCaptchaInvalid(true);
      setTimeout(() => {
        setIsCaptchaInvalid(false);
      }, 5000);

    } else if (response.status === 200 && !response.error) {
      setIsFormValid(true);
      setFormStatus("success");
      //TODO: Open modal
    } else {
      setFormStatus("error");
      const respMsg = response.message;
      if (respMsg == "emailEmpty") setMailError("EmailIsEmpty");
      if (respMsg == "emailIncorrect") setMailError("EmailIsIncorrect");
      if (respMsg == "emailEmpty" || respMsg == "emailIncorrect") {
        setIsError({ email: true });

        setTimeout(() => {
          setMailError("");
        }, 5000);
      }
    }

    refHcaptcha.current?.resetCaptcha();

    setTimeout(() => {
      setFormStatus("default");
      checkFormValid();
      setToken("");
    }, 5000);
  }

  const onSubmit = async () => {
    if (!isFormValid) {
      return;
    }

    setIsFormValid(false);
    setFormStatus("loading");

    const data = {
      email: formData.email,
      captcha: {
        type: "hcaptcha",
        token
      }
    };

    const docscloudsigninRes = await fetch("/api/thirdparty/docscloudsignin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data, recaptchaLang }),
    });

    let docscloudsigninData: any;
    try {
      docscloudsigninData = await docscloudsigninRes.json();
    } catch (ex) {
      docscloudsigninData = { error: "Invalid JSON response", message: {ex} };
    }
    
    _onComplete(docscloudsigninData);
  };
  
  useEffect(() => {
    checkFormValid();
  }, [checkFormValid]);

  return (
    <>
      <StyledLogInAccount>
        <Text size={2} label={t("DontHaveAnAccount")} />
        <StyledLogInAccountLink
          href="/docs-registration"
          color="main"
          textUnderline
          id="docs-registration-to-signup"
          data-testid="docs-registration-to-signup"
          label={t("Register")}
        />
      </StyledLogInAccount>

      <StyledLogInWrapper>
        <StyledLogInHeading level={1} size={4}>
          <Trans
            t={t}
            i18nKey="WelcomeBackToYourDocsCloud"
            components={[<Text key={0} as="span" color="main" />]}
          />
        </StyledLogInHeading>

        <StyledLogInContainer>
          <StyledLogInForm>
            <Input
              onChange={(e) => handleInputChange("email", e.target.value)}
              onBlur={() => {
                setIsEmpty((prevState) => ({
                  ...prevState,
                  email: formData.email.length === 0,
                }));
                setIsError((prevState) => ({
                  ...prevState,
                  email: false,
                }));
              }}
              data-testid="docs-log-in-email-input"
              value={formData.email}
              label={t("Email")}
              placeholder="name@domain.com"
              required
              caption={
                formData.email.length === 0
                  ? t("EmailIsEmpty")
                  : !validateEmail(formData.email)
                    ? t("EmailIsIncorrect")
                    : ""
              }
              status={
                isError.email
                  ? "error"
                  : isEmpty.email
                    ? "error"
                    : formData.email.length > 0
                      ? validateEmail(formData.email)
                        ? "success"
                        : "error"
                      : "default"
              }
            />

            <HCaptcha
              ref={refHcaptcha}
              onVerify={handleHCaptchaChange}
              onExpire={() => handleHCaptchaChange(null)}
            />
          </StyledLogInForm>

          <div>
          {isCaptchaInvalid && <StyledSignUpCaption $error className="wrongcaptcha">{t("WrongCaptcha")}</StyledSignUpCaption>}
          <Text fontSize="12px" lineHeight="1.4em" color="#808080">
            <Trans
              t={t}
              i18nKey="ByClickingContinue"
              components={[
                <Link
                  key={0}
                  href="https://help.onlyoffice.co/Products/Files/doceditor.aspx?fileid=6615734&doc=cy9XcGc5TXNONjVTMkNrR2NZUEVTT2E1Y1FDZGVRQ1YvOTJYTnpkZ3JEWT0_IjY2MTU3MzQi0"
                  target="_blank"
                  color="main"
                  textUnderline
                />,
                <Link
                  key={1}
                  href="https://help.onlyoffice.co/products/files/doceditor.aspx?fileid=5048502&doc=SXhWMEVzSEYxNlVVaXJJeUVtS0kyYk14YWdXTEFUQmRWL250NllHNUFGbz0_IjUwNDg1MDIi0&_ga=2.101739969.1105072466.1587625676-1002786878.1584771261"
                  target="_blank"
                  color="main"
                  textUnderline
                />,
              ]}
            />
          </Text>
          {mailError && <StyledSignUpCaption $error className="mailerror">{t(mailError)}</StyledSignUpCaption>}
          </div>
        </StyledLogInContainer>
        
        <LoaderButton
          onClick={onSubmit}
          status={formStatus}
          disabled={!isFormValid}
          fullWidth
          label={t("Continue")}
          data-testid="docs-log-in-button"
        />

        {formStatus === "loading" && (<StyledSignUpCaption>{t("PleaseWait")}</StyledSignUpCaption>)}
        {formStatus === "error" && (<StyledSignUpCaption $error>{t("WeAreSorryButAnErrorOccurred")}</StyledSignUpCaption>)}
        {formStatus === "success" && (<StyledSignUpCaption className="success">{t("YourRequestHasBeenSentSuccessfully")}</StyledSignUpCaption>)}
      </StyledLogInWrapper>
    </>
  );
};

export { LogIn };
