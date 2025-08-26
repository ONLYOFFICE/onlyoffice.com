import { useState } from "react";
import { useTranslation } from "next-i18next";
import {
  StyledRestorePassword,
  StyledRestorePasswordInput,
  StyledRestorePasswordButton,
  StyledRestorePasswordSuccessMessage,
} from "./RestorePassword.styled";
import { IRestorePassword } from "./RestorePassword.types";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import {
  SubscribeInput,
  ISubscribeInput,
} from "@src/components/widgets/SubscribeInput";
import { validateEmail } from "@src/utils/validators";

const RestorePassword = ({ setStatus }: IRestorePassword) => {
  const { t } = useTranslation("docs-registration");
  const [value, setValue] = useState("");
  const [formStatus, setFormStatus] =
    useState<ISubscribeInput["status"]>("default");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    if (isLoading && formStatus !== "default") return;

    if (!validateEmail(value)) {
      setFormStatus("error");
      return;
    }

    setFormStatus("loading");
    setIsLoading(true);

    const restorePasswordRes = await fetch("/api/thirdparty/restorepassword", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: value,
        emailSubject: t("OOPasswordReminder"),
      }),
    });
    const restorePasswordData = await restorePasswordRes.json();

    if (restorePasswordData.status !== "success") {
      setIsLoading(false);
      setFormStatus("error");
      return;
    }

    setIsLoading(false);
    setFormStatus("success");

    setTimeout(() => {
      setStatus("login");
    }, 5000);
  };

  return (
    <StyledRestorePassword>
      <Heading level={1} size={3} label={t("RestorePassword")} />
      <Text size={2} label={t("PleaseEnterYourRegistrationEmailAddress")} />

      <StyledRestorePasswordInput>
        <SubscribeInput
          dataTestId="restore-subscribe-input"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          onFocus={() => setFormStatus("default")}
          onBlur={() => {
            if (value.length === 0 || !validateEmail(value)) {
              setFormStatus("error");
            }
          }}
          onSubmit={onSubmit}
          value={value}
          label={t("YourEmail")}
          placeholder="name@email.com"
          status={formStatus}
          variant="secondary"
          autoFocus
          caption={
            value.length === 0
              ? t("EmailIsEmpty")
              : !validateEmail(value)
                ? t("EmailIsIncorrect")
                : ""
          }
        />

        {isLoading && (
          <Text as="div" fontSize="13px" lineHeight="16px" color="#999999">
            {t("PleaseWait")}
          </Text>
        )}

        {formStatus === "success" && (
          <StyledRestorePasswordSuccessMessage>
            {t("IfAUserWithThisEmailExists")}
          </StyledRestorePasswordSuccessMessage>
        )}
      </StyledRestorePasswordInput>

      <StyledRestorePasswordButton
        onClick={() => setStatus("login")}
        data-testid="restore-back-button"
      >
        {t("BackToLogIn")}
      </StyledRestorePasswordButton>
    </StyledRestorePassword>
  );
};

export { RestorePassword };
