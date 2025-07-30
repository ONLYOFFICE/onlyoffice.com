import { useState, useRef, useEffect } from "react";
import { useTranslation, Trans } from "next-i18next";
import ReactCaptcha from "@hcaptcha/react-hcaptcha";
import {
  StyledSignUpWrapper,
  StyledSignUpHeader,
  StyledSignUpGoogleButton,
  StyledSignUpLabel,
  StyledSignUpBox,
  StyledSignUpAccount,
  StyledSignUpAccountLink,
  StyledSignUpDownload,
  StyledSignUpDownloadLink,
  StyledSignUpCaption,
} from "./SignUp.styled";
import { ISignUp } from "./SignUp.types";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Input } from "@src/components/ui/Input";
import { Checkbox } from "@src/components/ui/Checkbox";
import { Link } from "@src/components/ui/Link";
import { Button } from "@src/components/ui/Button";
import { HCaptcha } from "@src/components/ui/HCaptcha";
import { validateEmail } from "@src/utils/validators";

declare global {
  interface Window {
    SignInByGoogle: (data: string) => void;
  }
}

const SignUp = ({ setEmail }: ISignUp) => {
  const { t } = useTranslation("docspace-registration");
  const hCaptchaRef = useRef<ReactCaptcha | null>(null);
  const modalDialog = useRef<Window | null>(null);
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  const [formData, setFormData] = useState({
    email: "",
    spam: false,
  });
  const [isEmpty, setIsEmpty] = useState({
    email: false,
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormLoading, setisFormLoading] = useState(false);
  const [isFormError, setIsFormError] = useState(false);

  const emailIsValid =
    formData.email.trim().length > 0 && validateEmail(formData.email);

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

  const checkFormValid = () => {
    setIsFormValid(emailIsValid);
    setIsFormError(false);
  };

  const handleHCaptchaExecute = () => {
    hCaptchaRef.current?.execute();
  };

  const handleHCaptchaChange = (token: string | null) => {
    if (token && emailIsValid) {
      onSubmit(token);
    } else {
      setIsFormValid(false);
    }
  };

  const onSubmit = async (token?: string) => {
    if (!emailIsValid) {
      return;
    }

    setisFormLoading(true);
    setIsFormValid(false);

    const hCaptchaResponse = await fetch("/api/hcaptcha-verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });

    const hCaptchaData = await hCaptchaResponse.json();

    if (hCaptchaData.status === "errorHCaptchaInvalid") {
      setIsFormValid(false);
      return;
    }

    const response = await fetch("/api/thirdparty/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: formData.email }),
    });

    const data = await response.json();
    console.log(data);

    if (data.status === "success") {
      setEmail(formData.email);
    } else {
      setIsFormError(true);
    }

    setisFormLoading(false);
  };

  const checkSignInCode = () => {
    const code = localStorage.getItem("code");
    if (code) {
      localStorage.removeItem("code");
      if (intervalId.current) clearInterval(intervalId.current);

      const token = window.btoa(
        JSON.stringify({
          auth: "google",
          mode: "popup",
          callback: "SignInByGoogle",
        }),
      );

      if (modalDialog.current) {
        modalDialog.current.location.href = `${location.origin}/login?p=${token}&code=${code}`;
      }
    }
  };

  const handleGoogleSignIn = () => {
    if (intervalId.current) clearInterval(intervalId.current);

    modalDialog.current = window.open(
      `${location.origin}/login?auth=google&mode=popup&callback=SignInByGoogle`,
      "signup",
      "width=800,height=500,status=no,toolbar=no,menubar=no,resizable=yes,scrollbars=no",
    );

    intervalId.current = setInterval(checkSignInCode, 500);
  };

  useEffect(() => {
    window.SignInByGoogle = (data) => {
      try {
        console.log("Callback received:", JSON.stringify(data));
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Unexpected error:", error.message);
        } else {
          console.error("Unexpected error:", error);
        }
      }
    };

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, []);

  return (
    <>
      <StyledSignUpAccount>
        <Text size={2} label={t("AlreadyHaveAnAccount")} />
        <StyledSignUpAccountLink
          href="/docspace-registration#login"
          color="main"
          textUnderline
          hover="underline-none"
          label={t("LogIn")}
        />
      </StyledSignUpAccount>

      <StyledSignUpWrapper>
        <StyledSignUpHeader>
          <Heading level={1} size={4}>
            <Trans
              t={t}
              i18nKey="StartWithYourFREEDocSpaceAccount"
              components={[<Text key={0} as="span" color="main" />]}
            />
          </Heading>

          <Text
            size={2}
            label={t("InviteUnlimitedNumberOfUsersAndGuestsForFree")}
          />
        </StyledSignUpHeader>

        <StyledSignUpGoogleButton
          onClick={handleGoogleSignIn}
          variant="tertiary"
          size="small"
          fullWidth
        >
          <span>{t("ContinueWithGoogle")}</span>
        </StyledSignUpGoogleButton>

        <StyledSignUpLabel>{t("OrSignUpWithEmail")}</StyledSignUpLabel>

        <StyledSignUpBox>
          <Input
            onChange={(e) => handleInputChange("email", e.target.value)}
            onBlur={() => {
              setIsEmpty((prev) => ({
                ...prev,
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

          <Checkbox
            checked={formData.spam}
            onChange={() =>
              setFormData((prev) => ({
                ...prev,
                spam: !prev.spam,
              }))
            }
            label={t("SendMeTipsUpdatesAndOffers")}
          />

          <Text fontSize="12px" lineHeight="18px">
            <Trans
              t={t}
              i18nKey="ByContinuingYouUnderstandAndAgree"
              components={[
                <Link
                  key={0}
                  href="https://help.onlyoffice.co/Products/Files/DocEditor.aspx?fileid=8373021&doc=aTFMQ3M0M2g3aWVVYkp5TERZbFFEbEk5NktBQUdBSVZVeTBqbzQ5ak9JYz0_IntcImVudHJ5XCI6XCI4MzczMDIxXCIsXCJsaW5rXCI6XCIxNTVkMTc0ZS1kY2UyLTQyZjgtOTQzNi03ZTU2OGY0ZmMxNWVcIn0i0"
                  target="_blank"
                  color="main"
                  textUnderline
                  hover="underline-none"
                />,
                <Link
                  key={1}
                  href="https://help.onlyoffice.co/products/files/doceditor.aspx?fileid=5048502&doc=SXhWMEVzSEYxNlVVaXJJeUVtS0kyYk14YWdXTEFUQmRWL250NllHNUFGbz0_IjUwNDg1MDIi0&_ga=2.182010081.778459243.1525692425-169631771.1404734630"
                  target="_blank"
                  color="main"
                  textUnderline
                  hover="underline-none"
                />,
              ]}
            />
          </Text>

          <div>
            <HCaptcha
              ref={hCaptchaRef}
              size="invisible"
              onVerify={handleHCaptchaChange}
              onExpire={() => handleHCaptchaChange(null)}
            />

            <Button
              onClick={handleHCaptchaExecute}
              fullWidth
              disabled={!isFormValid}
              label={t("ContinueWithEmail")}
            />
            {isFormError && (
              <StyledSignUpCaption $error>
                {t("TheRequestCouldNotBeSent")}
              </StyledSignUpCaption>
            )}
            {isFormLoading && (
              <StyledSignUpCaption>{t("PleaseWait")}</StyledSignUpCaption>
            )}
          </div>
        </StyledSignUpBox>

        <StyledSignUpDownload>
          <Text size={2} textAlign="center" label={t("WouldYouLikeToDeploy")} />
          <StyledSignUpDownloadLink
            href="/download-docspace"
            color="main"
            textUnderline
            hover="underline-none"
            label={t("DownloadHere")}
          />
        </StyledSignUpDownload>
      </StyledSignUpWrapper>
    </>
  );
};

export { SignUp };
