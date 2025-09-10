import { useState, useEffect, useCallback, useRef } from "react";
import { useTranslation, Trans } from "next-i18next";
import ReactCaptcha from "@hcaptcha/react-hcaptcha";
import { useRouter } from "next/router";
import {
  StyledSignUpWrapper,
  StyledSignUpHeader,
  StyledSignUpBox,
  StyledSignUpText,
  StyledSignUpAccount,
  StyledSignUpAccountLink,
  StyledSignUpCaption,
  StyledSuccessModal,
} from "./SignUp.styled";
import { useRewardful } from "@src/utils/useRewardful";
import { validateFullName, validateEmail } from "@src/utils/validators";
import { getFromParam } from "@src/utils/getParams";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Input } from "@src/components/ui/Input";
import { Checkbox } from "@src/components/ui/Checkbox";
import { Select } from "@src/components/ui/Select";
import { ISelectOption } from "@src/components/ui/Select/Select.types";
import { Link } from "@src/components/ui/Link";
import { LoaderButton, ILoaderButton } from "@src/components/ui/LoaderButton";
import { HCaptcha } from "@src/components/ui/HCaptcha";
import { Modal } from "@src/components/ui/Modal";
import { CheckEmail } from "../CheckEmail";
import { RadioBlock2Options } from "../RadioBlock2Options/RadioBlock2Options";
import { ISignUpData } from "./SignUp.types";
import { Platforms } from "./data/Platforms";

const initialFormData: ISignUpData = {
  fullName: "",
  email: "",
  spam: false,
  tariffPlan: "Business",
};

const SignUp = () => {
  const { t } = useTranslation("docs-registration");
  const from = getFromParam();

  const router = useRouter();

  const platforms = Platforms.map((item) => {
    return { ...item, label: t(item.label) };
  });

  const [affiliate, setAffiliate] = useState<{
    id?: string;
    token?: string;
  }>({
    id: "",
    token: "",
  });

  const [formData, setFormData] = useState<ISignUpData>(initialFormData);
  const [selectedPlatform, setSelectedPlatform] = useState<ISelectOption[]>([]);
  const [isEmpty, setIsEmpty] = useState({
    fullName: false,
    email: false,
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [token, setToken] = useState("");
  const [hCaptchaSize, setHCaptchaSize] = useState<"normal" | "compact">(
    "normal",
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] =
    useState<ILoaderButton["status"]>("default");

  const emailIsValid =
    formData.email.trim().length > 0 && validateEmail(formData.email);

  const refHcaptcha = useRef<ReactCaptcha | null>(null);
  const [isCaptchaInvalid, setIsCaptchaInvalid] = useState(false);

  const { getClientReferenceId, getAffiliateToken } = useRewardful({
    onReady: () => {
      const id = getClientReferenceId();
      const token = getAffiliateToken();

      setAffiliate((prev) =>
        prev.id === id && prev.token === token ? prev : { id, token },
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

  const checkFormValid = useCallback(() => {
    setIsFormValid(emailIsValid && !!token.length);
  }, [emailIsValid, token]);

  const clearData = () => {
    setFormData(initialFormData);
    setFormStatus("default");
    setIsFormValid(false);

    setSelectedPlatform([]);
    refHcaptcha.current?.resetCaptcha();
  };

  const handleHCaptchaChange = (token: string | null) => {
    setToken(token || "");
  };

  const onSubmit = async () => {
    if (!emailIsValid || !token.length) {
      return;
    }

    setFormStatus("loading");

    function getPostLang(locale: string) {
      const displayName =
        new Intl.DisplayNames([locale], { type: "language" }).of(locale) ||
        locale;

      const idx = displayName.indexOf("(");
      return idx === -1 ? displayName : displayName.substring(0, idx).trim();
    }

    const curLang =
      router.locale && router.locale !== "en" ? router.locale : "en";

    const res = await fetch("/api/docs-registration", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: formData.fullName,
        email: formData.email,
        phone: "",
        tariffPlan: formData.tariffPlan,
        docsPlatform: selectedPlatform[0]?.value,
        affiliateId: affiliate.id || "",
        affiliateToken: affiliate.token || "",
        spam: formData.spam ? "true" : "false",
        languageCode: curLang,
        language: getPostLang(curLang),
        from,
        referer: document.referrer,
        hCaptchaResponse: token,
      }),
    });

    const data = await res.json();

    if (data.status === "errorHCaptchaInvalid") {
      setIsFormValid(false);
      setFormStatus("error");
      setIsCaptchaInvalid(true);

      setTimeout(() => {
        setIsCaptchaInvalid(false);
        setFormStatus("default");
      }, 5000);
      return;
    } else if (data.status === "success") {
      if (formData.tariffPlan == "Business") {
        setIsModalOpen(true);
      }
      setFormStatus("success");
    } else {
      setFormStatus("error");
    }

    setTimeout(() => {
      clearData();
    }, 5000);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (document.referrer) {
      localStorage.setItem("previousPage", document.referrer);
    }

    const updateSize = () => {
      setHCaptchaSize(window.innerWidth < 334 ? "compact" : "normal");
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    checkFormValid();
  }, [checkFormValid]);

  return (
    <>
      <StyledSignUpAccount>
        <Text size={2} label={t("AlreadyHaveAnAccount")} />
        <StyledSignUpAccountLink
          href="/docs-registration#login"
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
              i18nKey="StartWithYourFREEDocsCloud"
              components={[<Text key={0} as="span" color="main" />]}
            />
          </Heading>

          <Text size={2} label={t("NoCreditCardRequired")} />
        </StyledSignUpHeader>

        <StyledSignUpBox>
          <Input
            id="txtFirstName"
            autoFocus
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

          <RadioBlock2Options
            label="TariffPlan"
            fieldName="tariffPlan"
            formData={formData}
            setFormData={setFormData}
            t={t}
            options={[
              {
                label: t("Business"),
                value: "Business",
                idPostfix: "business",
              },
              { label: t("VIPDedicated"), value: "VIP", idPostfix: "vip" },
            ]}
            prefix="tariff-plan-radio-"
          />

          <Select
            selected={selectedPlatform}
            setSelected={setSelectedPlatform}
            label={t("Platform")}
            options={platforms}
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
            ref={refHcaptcha}
            size={hCaptchaSize}
            onVerify={handleHCaptchaChange}
            onExpire={() => handleHCaptchaChange(null)}
          />

          <div>
            {isCaptchaInvalid && (
              <StyledSignUpCaption $error className="wrongcaptcha">
                {t("WrongCaptcha")}
              </StyledSignUpCaption>
            )}
            <StyledSignUpText>
              <Trans
                t={t}
                i18nKey="ByClickingStartFree"
                components={[
                  <Link
                    key={0}
                    href="https://help.onlyoffice.co/Products/Files/DocEditor.aspx?fileid=7992046&doc=ekxnSGVoWE5rbGNkeWtCTnNyREFMN1E1Vzl1YVJjYkFMRVMyaGh1cE9VND0_Ijc5OTIwNDYi0"
                    target="_blank"
                    color="main"
                    textUnderline
                    hover="underline-none"
                  />,
                ]}
              />
            </StyledSignUpText>
          </div>

          <div>
            <LoaderButton
              onClick={onSubmit}
              status={formStatus}
              label={t("StartFree")}
              disabled={!isFormValid}
              fullWidth
              data-testid="docs-sign-up-button"
            />
            {formStatus === "error" && (
              <StyledSignUpCaption $error>
                {t("WeAreSorryButAnErrorOccurred")}
              </StyledSignUpCaption>
            )}
            {formStatus === "loading" && (
              <StyledSignUpCaption>{t("PleaseWait")}</StyledSignUpCaption>
            )}
            {formStatus === "success" && (
              <StyledSignUpCaption className="success">
                {t("YourRequestHasBeenSentSuccessfully")}
              </StyledSignUpCaption>
            )}
          </div>
        </StyledSignUpBox>
      </StyledSignUpWrapper>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        maxWidth="544px"
        withCloseBtn
        positionCloseBtn="inside"
      >
        <StyledSuccessModal>
          <CheckEmail text2="InviteInformationSpam" />
        </StyledSuccessModal>
      </Modal>
    </>
  );
};

export { SignUp };
