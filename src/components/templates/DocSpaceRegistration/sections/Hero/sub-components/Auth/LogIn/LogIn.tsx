import { useState, useRef, useEffect } from "react";
import { useTranslation, Trans } from "next-i18next";
import { useRouter } from "next/router";
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
import { ILogIn } from "./LogIn.types";
import { Text } from "@src/components/ui/Text";
import { Input } from "@src/components/ui/Input";
import { Button } from "@src/components/ui/Button";
import { validateEmail } from "@src/utils/validators";
import { PasswordInput } from "@src/components/widgets/PasswordInput";

const LogIn = ({ setExistTenants, setStatus }: ILogIn) => {
  const { t } = useTranslation("docspace-registration");
  const router = useRouter();
  const modalDialog = useRef<Window | null>(null);
  const intervalId = useRef<NodeJS.Timeout | null>(null);
  const platformRef = useRef<string | null>(null);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isEmpty, setIsEmpty] = useState({
    email: false,
    password: false,
  });
  const [isError, setIsError] = useState({
    email: false,
    password: false,
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);

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
      return;
    }

    setIsFormValid(false);
    setIsFormLoading(true);

    const findByEmailRes = await fetch("/api/thirdparty/findbyemail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: formData.email }),
    });
    const findByEmailData = await findByEmailRes.json();

    if (findByEmailData.data?.length === 0) {
      setIsError({ email: true, password: true });
    } else {
      const findByEmailPasswordRes = await fetch(
        "/api/thirdparty/findbyemailpassword",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        },
      );
      const findByEmailPasswordData = await findByEmailPasswordRes.json();

      if (findByEmailPasswordData.data?.length === 0) {
        setIsError({ email: true, password: true });
        setIsFormLoading(false);
        return;
      } else if (findByEmailPasswordData.data?.length === 1) {
        window.location.href = `${findByEmailPasswordData.data[0].domain}${findByEmailPasswordData.data[0].path}`;

        return;
      }

      setExistTenants(findByEmailPasswordData.data);
    }

    setIsFormLoading(false);
  };

  const checkSignInCode = () => {
    const code = localStorage.getItem("code");
    if (code) {
      localStorage.removeItem("code");
      if (intervalId.current) clearInterval(intervalId.current);

      const token = window.btoa(
        JSON.stringify({
          auth: platformRef.current,
          mode: "popup",
          callback: "SigninBySocial",
        }),
      );

      if (modalDialog.current) {
        modalDialog.current.location.href = `${location.origin}/login?p=${token}&code=${code}`;
      }
    }
  };

  const handleSignInBySocial = (platform: string) => {
    if (intervalId.current) clearInterval(intervalId.current);

    platformRef.current = platform;

    modalDialog.current = window.open(
      `${location.origin}/login?auth=${platform}&mode=popup&callback=SigninBySocial`,
      "signup",
      "width=800,height=500,status=no,toolbar=no,menubar=no,resizable=yes,scrollbars=no",
    );

    intervalId.current = setInterval(checkSignInCode, 500);
  };

  useEffect(() => {
    window.SigninBySocial = async (data) => {
      try {
        const findBySocialRes = await fetch("/api/thirdparty/findbysocial", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            transport: data,
          }),
        });
        const findBySocialData = await findBySocialRes.json();

        const findByEmailRes = await fetch("/api/thirdparty/findbyemail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: findBySocialData.data.email,
          }),
        });
        const findByEmailData = await findByEmailRes.json();

        if (findByEmailData.data?.length === 1) {
          window.location.href = `${findByEmailData.data[0].domain}${findByEmailData.data[0].path}`;
        } else if (findByEmailData.data?.length > 1) {
          setExistTenants(findByEmailData.data);
        } else {
          setIsLoginError(true);
        }
      } catch (err) {
        console.error(
          "Unexpected error:",
          err instanceof Error ? err.message : err,
        );
      }
    };

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, [setExistTenants]);

  return (
    <>
      <StyledLogInAccount>
        <Text size={2} label={t("DontHaveAnAccount")} />
        <StyledLogInAccountLink
          href={`/docspace-registration${router.query.desktop === "true" ? "?desktop=true" : ""}`}
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
                onClick={() =>
                  handleSignInBySocial(
                    platform === "$google"
                      ? "google"
                      : platform === "$zoom"
                        ? "zoom"
                        : platform === "$x"
                          ? "twitter"
                          : platform === "$linkedin"
                            ? "linkedin"
                            : "",
                  )
                }
                data-testid={
                  platform === "$google"
                    ? "sign-in-google-button"
                    : platform === "$zoom"
                      ? "sign-in-zoom-button"
                      : platform === "$x"
                        ? "sign-in-twitter-button"
                        : platform === "$linkedin"
                          ? "sign-in-linkedin-button"
                          : ""
                }
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
                setIsError((prevState) => ({
                  ...prevState,
                  email: false,
                }));
                checkFormValid();
              }}
              data-testid="sign-in-email-input"
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

            <StyledLogInInputWrapper>
              <PasswordInput
                onChange={(e) => handleInputChange("password", e.target.value)}
                onBlur={() => {
                  setIsEmpty((prevState) => ({
                    ...prevState,
                    password: formData.password.length === 0,
                  }));
                  setIsError((prevState) => ({
                    ...prevState,
                    password: false,
                  }));
                  checkFormValid();
                }}
                dataTestId="sign-in-password-input"
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
                  isError.password
                    ? "error"
                    : isEmpty.password
                      ? "error"
                      : formData.password.length > 0
                        ? formData.password.length >= 8
                          ? "success"
                          : "error"
                        : "default"
                }
              />

              {((isError.email && isError.password) || isLoginError) && (
                <Text
                  as="div"
                  fontSize="13px"
                  lineHeight="16px"
                  color="#cb0000"
                >
                  {isLoginError
                    ? t("NoThirdPartyAccountFound")
                    : t("IncorrectEmailOrPassword")}
                </Text>
              )}

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

              <StyledLogInForgotPasswordButton
                onClick={() => setStatus("restorePassword")}
                data-testid="forgot-password-button"
              >
                {t("ForgotPassword")}
              </StyledLogInForgotPasswordButton>
            </StyledLogInInputWrapper>
          </StyledLogInForm>
        </StyledLogInContainer>

        <Button
          onClick={onSubmit}
          data-testid="sign-in-button"
          disabled={!isFormValid}
          fullWidth
          label={t("LogIn")}
        />
      </StyledLogInWrapper>
    </>
  );
};

export { LogIn };
