import { useTranslation } from "next-i18next";
import {
  StyledReadConceptLink,
  StyledReadConceptText,
  StyledSubscribeForm,
  StyledSubscribeFormButton,
  StyledSubscribeFormContainer,
  StyledSubscribeFormHeading,
  StyledSubscribeFormInput,
  StyledSubscribeFormWrapper,
  StyledSubscribeHeading,
  StyledSubscribeSection,
  StyledSubscribeWrapper,
} from "./Subscribe.styled";
import { useRef, useState } from "react";

const Subscribe = () => {
  const { t } = useTranslation("app-server");

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "default" | "loading" | "success" | "error"
  >("default");
  const [errorMessage, setErrorMessage] = useState("");
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetStatus = () => {
    setStatus("default");
    setErrorMessage("");
  };

  const resetAll = () => {
    setEmail("");
    resetStatus();
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    setStatus("loading");
    setErrorMessage("");

    const trimmedEmail = email.trim();

    if (trimmedEmail === "") {
      setStatus("error");
      setErrorMessage(t("EmailIsEmpty"));
      scheduleReset();
      return;
    }

    if (!/\S+@\S+\.\S+/.test(trimmedEmail)) {
      setStatus("error");
      setErrorMessage(t("EmailIsIncorrect"));
      scheduleReset();
      return;
    }

    setStatus("success");
    scheduleResetAfterSuccess();
  };

  const clearResetTimer = () => {
    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
    }
  };

  const scheduleReset = () => {
    clearResetTimer();
    resetTimerRef.current = setTimeout(() => {
      resetAll();
    }, 3000);
  };

  const scheduleResetAfterSuccess = () => {
    clearResetTimer();
    resetTimerRef.current = setTimeout(() => {
      resetAll();
    }, 5000);
  };

  const handleInputClick = () => {
    clearResetTimer();
    resetStatus();
  };

  return (
    <StyledSubscribeSection
      desktopSpacing={["211px", "98px"]}
      tabletSpacing={["211px", "98px"]}
      tabletSmallSpacing={["198px", "85px"]}
      mobileSpacing={["103px", "80px"]}
    >
      <StyledSubscribeWrapper>
        <StyledSubscribeHeading label={t("WorkInProgress")} level={4} />
        <StyledSubscribeFormWrapper>
          <StyledSubscribeFormContainer>
            <StyledSubscribeFormHeading
              label={t("SubscribeToGetNews")}
              level={5}
            />
            <StyledSubscribeForm>
              <StyledSubscribeFormInput
                value={email}
                onChange={handleEmailChange}
                label={t("YourEmail")}
                placeholder={t("Placeholder")}
                status={status === "loading" ? undefined : status}
                caption={errorMessage}
                onClick={handleInputClick}
                $status={status}
              />
              <StyledSubscribeFormButton
                $status={status}
                onClick={handleSubscribe}
                status={status}
              >
                <span>{t("Subscribe")}</span>
              </StyledSubscribeFormButton>
            </StyledSubscribeForm>
          </StyledSubscribeFormContainer>
        </StyledSubscribeFormWrapper>
        <StyledReadConceptText label={t("ReadAboutTheConcept")} />
        <StyledReadConceptLink
          href="/blog"
          label={t("LearnMore")}
          color="main"
          textUnderline
          hover="underline-none"
        />
      </StyledSubscribeWrapper>
    </StyledSubscribeSection>
  );
};

export { Subscribe };
