import { useState, useEffect } from "react";
import { useTranslation, Trans } from "next-i18next";
import { useRouter } from "next/router";
import {
  StyledSignUpWrapper,
  StyledSignUpHeader,
  StyledSignUpBox,
  StyledSignUpAccount,
  StyledSignUpAccountLink,
  StyledSignUpCaption,
} from "./SignUp.styled";
import { ISignUp } from "./SignUp.types";
import { useRewardful } from "@src/utils/useRewardful";
import { validateFullName, validateEmail } from "@src/utils/validators";
import { getFromParam } from "@src/utils/getParams";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Input } from "@src/components/ui/Input";
import { Checkbox } from "@src/components/ui/Checkbox";
import { Link } from "@src/components/ui/Link";
import { Button } from "@src/components/ui/Button";
import { HCaptcha } from "@src/components/ui/HCaptcha";


const SignUp = ({
  setEmail,
  setStatus,
}: ISignUp) => {
  const { t } = useTranslation("docs-registration");
  const from = getFromParam();

  const router = useRouter();

  const [affiliate, setAffiliate] = useState<{
    id?: string;
    token?: string;
  }>({
    id: "",
    token: "",
  });
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    spam: false,
  });
  const [isEmpty, setIsEmpty] = useState({
    fullName: false,
    email: false,
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormLoading, setisFormLoading] = useState(false);
  const [isFormError, setIsFormError] = useState(false);
  const [token, setToken] = useState("");

  const emailIsValid = formData.email.trim().length > 0 && validateEmail(formData.email);

  const { getClientReferenceId, getAffiliateToken } = useRewardful({
    onReady: () => {
      const id = getClientReferenceId();
      const token = getAffiliateToken();

      setAffiliate((prev) =>
        prev.id === id && prev.token === token
          ? prev
          : { id, token },
      );
    },
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

  const checkFormValid = (newToken?: string | null) => {
    const tokenValue = newToken || "";
    setIsFormValid(emailIsValid && !!tokenValue.length);
    setIsFormError(false);
  };

  const handleHCaptchaChange = (token: string | null) => {
    setToken(token || "");
    checkFormValid(token);
  };

  const onSubmit = async () => {
    if (!emailIsValid || !token.length) {
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

    function getPostLang(locale: string) {
      const displayName = new Intl.DisplayNames([locale], { type: "language" }).of(locale) || locale;

      const idx = displayName.indexOf("(");
      return idx === -1 ? displayName : displayName.substring(0, idx).trim();
    }

    const curLang = router.locale && router.locale !== "en" ? router.locale : "en";

    const res = await fetch("/api/docs-registration", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: formData.fullName,
        email: formData.email,
        phone: "",
        tariffPlan: "", //TEMPOARY
        docPlatform: "", //TEMPOARY
        affiliateId: affiliate.id || "",
        affiliateToken: affiliate.token || "",
        spam: formData.spam ? "true" : "false",
        languageCode: curLang,
        language: getPostLang(curLang),
        from,
        referer: document.referrer,
      }),
    });

    const data = await res.json();

    if (data.status === "success") {
      setEmail(formData.email);
      setStatus("checkEmail");
    } else {
      setIsFormError(true);
      setTimeout(() => {
        checkFormValid();
      }, 5000);
    }

    setisFormLoading(false);
  };

  useEffect(() => {
    if (document.referrer) {
      localStorage.setItem('previousPage', document.referrer);
    }
  }, []);

  return (
    <>
      <StyledSignUpAccount>
        <Text size={2} label={t("AlreadyHaveAnAccount")} />
        <StyledSignUpAccountLink
          href={`/docspace-registration${router.query.desktop === "true" ? "?desktop=true" : ""}#login`}
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

        <StyledSignUpBox>
          <Input
            id="txtFirstName"
            onChange={(e) => handleInputChange("fullName", e.target.value)}
            onBlur={() => {
              setIsEmpty((prev) => ({
                ...prev,
                fullName: formData.fullName.length === 0,
              }));
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
            onBlur={() => {
              setIsEmpty((prev) => ({
                ...prev,
                email: formData.email.length === 0,
              }));
              checkFormValid();
            }}
            data-testid="docs-sign-up-email-input"
            value={formData.email}
            label={t("WorkEMail")}
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
            data-testid="docs-sign-up-spam-checkbox"
            checked={formData.spam}
            onChange={() =>
              setFormData((prev) => ({
                ...prev,
                spam: !prev.spam,
              }))
            }
            label={t("SendMeTipsUpdatesAndOffers")}
          />

          <HCaptcha
            onVerify={handleHCaptchaChange}
            onExpire={() => handleHCaptchaChange(null)}
          />

          <Text fontSize="12px" lineHeight="18px">
            <Trans
              t={t}
              i18nKey="ByClickingStartFree"
              components={[
                <Link
                  key={0}
                  href="https://help.onlyoffice.co/Products/Files/DocEditor.aspx?fileid=7992046&doc=ekxnSGVoWE5rbGNkeWtCTnNyREFMN1E1Vzl1YVJjYkFMRVMyaGh1cE9VND0_Ijc5OTIwNDYi00"
                  target="_blank"
                  color="main"
                  textUnderline
                  hover="underline-none"
                />,
              ]}
            />
          </Text>

          <div>
          <Button
            onClick={onSubmit}
            data-testid="docs-sign-up-button"
            fullWidth
            disabled={!isFormValid}
            label={t("StartFree")}
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

      </StyledSignUpWrapper>
    </>
  );
};

export { SignUp };
