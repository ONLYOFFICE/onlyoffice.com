import { useState } from "react";
import { useTranslation, Trans } from "next-i18next";
import {
  StyledLogInAccount,
  StyledLogInAccountLink,
  StyledLogInWrapper,
  StyledLogInHeading,
  StyledLogInContainer,
  StyledLogInForm,
} from "./LogIn.styled";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { Input } from "@src/components/ui/Input";
import { Button } from "@src/components/ui/Button";
import { validateEmail } from "@src/utils/validators";

const LogIn = () => {
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
  const [isFormLoading, setIsFormLoading] = useState(false);

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

  const checkFormValid = (data = formData) => {
    const emailIsValid = validateEmail(data.email);
    setIsFormValid(emailIsValid);
  };

  const onSubmit = async () => {
    if (!isFormValid) {
      return;
    }

    setIsFormValid(false);
    setIsFormLoading(true);

    const data = { email: formData.email };

    const docscloudsigninRes = await fetch("/api/thirdparty/docscloudsignin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }), //TODO: add recaptchaLang
    });
    const docscloudsigninData = await docscloudsigninRes.json();

    if (docscloudsigninData.data?.length === 0) {
      setIsError({ email: true });
      console.log("docscloudsigninData.data?.length === 0");
    } else {
      console.log(docscloudsigninData.data);
    }

    setIsFormLoading(false);
  };

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
                checkFormValid();
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

              {isFormLoading && (
                <Text
                  as="div"
                  fontSize="13px"
                  lineHeight="16px"
                  color="#999999"
                >
                  {t("PleaseWait")}
                </Text>
              )}

          </StyledLogInForm>

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
        </StyledLogInContainer>
        
        <Button
          onClick={onSubmit}
          data-testid="docs-log-in-button"
          disabled={!isFormValid}
          fullWidth
          label={t("Continue")}
        />
      </StyledLogInWrapper>
    </>
  );
};

export { LogIn };
