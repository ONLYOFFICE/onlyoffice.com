import { useState } from "react";
import { useTranslation, Trans } from "next-i18next";
import sjcl from "sjcl";
import {
  StyledLogInAccount,
  StyledLogInAccountLink,
  StyledLogInWrapper,
  StyledLogInHeading,
  StyledLogInContainer,
  StyledLogInSocialButtons,
  StyledLogInSocialButton,
  StyledLogInLabel,
  StyledLogInForm,
  StyledLogInInputWrapper,
  StyledLogInForgotPasswordButton,
} from "./LogIn.styled";
import { Text } from "@src/components/ui/Text";
import { Input } from "@src/components/ui/Input";
import { Button } from "@src/components/ui/Button";
import { validateEmail } from "@src/utils/validators";
import { PasswordInput } from "@src/components/widgets/PasswordInput";

const LogIn = () => {
  const { t } = useTranslation("docspace-registration");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isEmpty, setIsEmpty] = useState({
    email: false,
    password: false,
  });
  const [isFormValid, setIsFormValid] = useState(false);

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
    const passwordIsValid = data.password.length >= 8;
    setIsFormValid(emailIsValid && passwordIsValid);
  };

  const onSubmit = async () => {
    if (!isFormValid) {
      console.log(123);
      return;
    }

    setIsFormValid(false);

    const size = 256;
    const iterations = 100000;
    const salt =
      "1e912b1b2ce20b91bb9db717e214feb1771045bd9fea31727e59f514964b944f";

    const bits = sjcl.misc.pbkdf2(formData.password, salt, iterations);
    const sliced = bits.slice(0, size / 32);
    const passwordHash = sjcl.codec.hex.fromBits(sliced);

    const response = await fetch("/api/thirdparty/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        passwordHash,
      }),
    });
    const data = await response.json();

    console.log(data);
  };

  return (
    <>
      <StyledLogInAccount>
        <Text size={2} label={t("DontHaveAnAccount")} />
        <StyledLogInAccountLink
          href="/docspace-registration"
          color="main"
          textUnderline
          hover="underline-none"
          label={t("SignUp")}
        />
      </StyledLogInAccount>

      <StyledLogInWrapper>
        <StyledLogInHeading level={1} size={4} textAlign="center">
          <Trans
            t={t}
            i18nKey="WelcomeBackToYourDocSpace"
            components={[<Text key={0} as="span" color="main" />]}
          />
        </StyledLogInHeading>

        <StyledLogInContainer>
          <StyledLogInSocialButtons>
            {["$google", "$zoom", "$x", "$linkedin"].map((platform) => (
              <StyledLogInSocialButton
                key={platform}
                {...{ [platform]: true }}
                variant="tertiary"
                size="small"
              />
            ))}
          </StyledLogInSocialButtons>

          <StyledLogInLabel>{t("OrLogInWithEmail")}</StyledLogInLabel>

          <StyledLogInForm>
            <Input
              onChange={(e) => handleInputChange("email", e.target.value)}
              onBlur={() => {
                setIsEmpty((prevState) => ({
                  ...prevState,
                  email: formData.email.length === 0,
                }));
                checkFormValid();
              }}
              value={formData.email}
              label={t("EmailAddress")}
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
                isEmpty.email
                  ? "error"
                  : formData.email.length > 0
                    ? validateEmail(formData.email)
                      ? "success"
                      : "error"
                    : "default"
              }
            />

            <StyledLogInInputWrapper>
              <PasswordInput
                onChange={(e) => handleInputChange("password", e.target.value)}
                onBlur={() => {
                  setIsEmpty((prevState) => ({
                    ...prevState,
                    password: formData.password.length === 0,
                  }));
                  checkFormValid();
                }}
                value={formData.password}
                label={t("Password")}
                required
                caption={
                  formData.password.length === 0
                    ? t("PasswordIsEmpty")
                    : formData.password.length < 8
                      ? t("ThePasswordMustContainAtLeast8Characters")
                      : ""
                }
                status={
                  isEmpty.password
                    ? "error"
                    : formData.password.length > 0
                      ? formData.password.length >= 8
                        ? "success"
                        : "error"
                      : "default"
                }
              />
              <StyledLogInForgotPasswordButton>
                {t("ForgotPassword")}
              </StyledLogInForgotPasswordButton>
            </StyledLogInInputWrapper>
          </StyledLogInForm>
        </StyledLogInContainer>

        <Button
          onClick={onSubmit}
          disabled={!isFormValid}
          fullWidth
          label={t("LogIn")}
        />
      </StyledLogInWrapper>
    </>
  );
};

export { LogIn };
