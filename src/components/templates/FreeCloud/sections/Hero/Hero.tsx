import { useEffect, useRef, useState } from "react";
import { Trans, useTranslation } from "next-i18next";
import ReactCaptcha from "@hcaptcha/react-hcaptcha";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { Input } from "@src/components/ui/Input";
import { HCaptcha } from "@src/components/ui/HCaptcha";
import { ILoaderButton, LoaderButton } from "@src/components/ui/LoaderButton";
import { Select } from "@src/components/ui/Select";
import { ISelectOption } from "@src/components/ui/Select/Select.types";
import { ICheckStatus, IDataForm } from "../../FreeCloud.types";
import { validateFullName, validateEmail, validateWebsite } from "@src/utils/validators";

import {
  StyledHeroForm,
  StyledHeroFormNameWrapper,
  StyledHeroFormPortalText,
  StyledHeroFormPortalWrapper,
  StyledHeroFormWrapper,
  StyledHeroHeading,
  StyledHeroStep,
  StyledHeroStepNumber,
  StyledHeroStepSecond,
  StyledHeroStepSubText,
  StyledHeroStepText
} from "./Hero.styled";

const Hero = () => {
  const { t } = useTranslation("free-cloud");
  const refHcaptcha = useRef<ReactCaptcha | null>(null);

  const [dataForm, setDataForm] = useState<IDataForm>({
    firstName: "",
    lastName: "",
    email: "",
    portalName: "",
    youAre: "",
    yourWebsiteURL: "",
    hCaptchaToken: null,
  });

  const [checkStatus, setCheckStatus] = useState<ICheckStatus>({
    firstName: "default",
    lastName: "default",
    email: "default",
    portalName: "default",
    yourWebsiteURL: "default",
  });

  const [submitStatus, setSubmitStatus] = useState<ILoaderButton["status"]>("default");

  const [selectedOption, setSelectedOption] = useState<ISelectOption[]>([]);

  const options = [
    { value: "School", label: t("School") },
    { value: "NonProfit", label: t("NonProfit") },
    { value: "Contributor", label: t("Contributor") },
  ];

  useEffect(() => {
    if (selectedOption.length > 0) {
      setDataForm((prev) => (
        {
          ...prev,
          youAre: selectedOption[0].value,
        }
      ))
    }
  }, [selectedOption])

  const handleCheckStatusFullName = () => {
    if (validateFullName(dataForm.firstName)) {
      setCheckStatus((prev) => ({
        ...prev,
        firstName: "success",
      }));
    } else {
      setCheckStatus((prev) => ({
        ...prev,
        firstName: "error",
      }));
    }
  }

  const handleCheckStatusLastName = () => {
    if (validateFullName(dataForm.lastName)) {
      setCheckStatus((prev) => ({
        ...prev,
        lastName: "success",
      }));
    } else {
      setCheckStatus((prev) => ({
        ...prev,
        lastName: "error",
      }));
    }
  }

  const handleCheckStatusEmail = () => {
    if (validateEmail(dataForm.email)) {
      setCheckStatus((prev) => ({
        ...prev,
        email: "success",
      }));
    } else {
      setCheckStatus((prev) => ({
        ...prev,
        email: "error",
      }));
    }
  }

  const handleCheckStatusPortalName = () => {
    if (dataForm.portalName.length > 0) {
      setCheckStatus((prev) => ({
        ...prev,
        portalName: "success",
      }));
    } else {
      setCheckStatus((prev) => ({
        ...prev,
        portalName: "error",
      }));
    }
  }

  const handleCheckStatusYourWebsiteURL = () => {
    if (validateWebsite(dataForm.yourWebsiteURL)) {
      setCheckStatus((prev) => ({
        ...prev,
        yourWebsiteURL: "success",
      }));
    } else {
      setCheckStatus((prev) => ({
        ...prev,
        yourWebsiteURL: "error",
      }));
    }
  }

  const handleGetHCaptchaToken = (token: string | null) => {
    setDataForm((prev) => (
      {
        ...prev,
        hCaptchaToken: token,
      }
    ))
  }

  const clearDataForm = () => {
    setDataForm({
      firstName: "",
      lastName: "",
      email: "",
      portalName: "",
      youAre: "",
      yourWebsiteURL: "",
      hCaptchaToken: null,
    });

    setCheckStatus({
      firstName: "default",
      lastName: "default",
      email: "default",
      portalName: "default",
      yourWebsiteURL: "default",
    });

    setSelectedOption([]);
    refHcaptcha.current?.resetCaptcha();
  }

  const handleSubmitRequest = async () => {
    if (submitStatus === "loading") return;
    if (submitStatus === "success") {
      clearDataForm();
      setSubmitStatus("default");
      return;
    };
    if (submitStatus === "error") {
      clearDataForm();
      setSubmitStatus("default");
      return;
    };
    setSubmitStatus("loading");
    try {
      const hCaptchaResponse = await fetch("/api/hcaptcha...-verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          token: dataForm.hCaptchaToken ?? ""
        })
      })

      const hCaptchaData = await hCaptchaResponse.json();
      console.log(hCaptchaData);

      if (hCaptchaData.status === "errorHCaptchaInvalid") {
        setSubmitStatus("error");
        return;
      }

      if (hCaptchaData.status === "success") {
        setSubmitStatus("success");
      }
    } catch (error) {
      console.error("hCaptcha validation exception:", error);
      setSubmitStatus("error");
    }
  }

  return (
    <Section
      background="#f5f5f5"
      desktopSpacing={["80px", "168px"]}
    >
      <Container>
        <StyledHeroHeading
          textAlign="center"
          level={1}
          size={3}
        >
          <Trans
            t={t}
            i18nKey={"HeroTitle"}
            components={[
              <Text as="span" color="#FF6F3D" key="0" />
            ]}
          />
        </StyledHeroHeading>
        <StyledHeroFormWrapper>
          <StyledHeroStep
            level={2}
            size={5}
            color="#808080"
          >
            <StyledHeroStepNumber as="span" color="#808080">1</StyledHeroStepNumber>
            {t("Step")}
          </StyledHeroStep>
          <StyledHeroStepText size={3}>
            <Trans t={t} i18nKey={"StepFirstText"} components={[
                <Link
                  key="0"
                  color="#FF6F3D"
                  textUnderline={true}
                  hover="underline-none"
                  href="/docspace-registration"
                />,
                <Link
                  key="1"
                  color="#FF6F3D"
                  textUnderline={true}
                  hover="underline-none"
                  href="/banners?from=nonprofit"
                />,
                <Link
                  key="2"
                  color="#FF6F3D"
                  textUnderline={true}
                  hover="underline-none"
                  href="/"
                />,
              ]}
            />
          </StyledHeroStepText>
          <StyledHeroStepSubText
            size={3}
            label={t("IfYouAreAContributorSkipThisStep")}
          />
          <StyledHeroStep
            level={2}
            size={5}
            color="#808080"
          >
            <StyledHeroStepNumber as="span" color="#808080">2</StyledHeroStepNumber>
            {t("Step")}
          </StyledHeroStep>
          <StyledHeroStepSecond size={3}>
            <Trans t={t} i18nKey={"StepSecondText"} />
          </StyledHeroStepSecond>
          <StyledHeroForm>
            <StyledHeroFormNameWrapper>
              <Input
                value={dataForm.firstName}
                onChange={(event) => setDataForm({...dataForm, firstName: event.target.value})}
                placeholder={t("Name")}
                label={t("FirstName")}
                onBlur={handleCheckStatusFullName}
                onFocus={() => setCheckStatus((prev) => ({ ...prev, firstName: "default" }))}
                status={checkStatus.firstName}
                caption={
                  dataForm.firstName.length === 0
                    ? t("FirstNameIsEmpty")
                    : t("FirstNameIsIncorrect")
                  }
                required
              />
              <Input
                value={dataForm.lastName}
                onChange={(event) => setDataForm({...dataForm, lastName: event.target.value})}
                placeholder={t("Surname")}
                label={t("LastName")}
                onBlur={handleCheckStatusLastName}
                onFocus={() => setCheckStatus((prev) => ({ ...prev, lastName: "default" }))}
                status={checkStatus.lastName}
                caption={
                  dataForm.lastName.length === 0
                    ? t("LastNameIsEmpty")
                    : t("LastNameIsIncorrect")
                  }
                required
              />
            </StyledHeroFormNameWrapper>
            <Input
              value={dataForm.email}
              onChange={(event) => setDataForm({...dataForm, email: event.target.value})}
              placeholder={t("Email")}
              label={t("Email")}
              onBlur={handleCheckStatusEmail}
              onFocus={() => setCheckStatus((prev) => ({ ...prev, email: "default" }))}
              status={checkStatus.email}
              caption={
                dataForm.email.length === 0
                  ? t("EmailIsEmpty")
                  : t("EmailIsIncorrect")
                }
              required
            />
            <StyledHeroFormPortalWrapper>
              <Input
                value={dataForm.portalName}
                onChange={(event) => setDataForm({...dataForm, portalName: event.target.value})}
                placeholder={t("PortalName")}
                label={t("PortalName")}
                onBlur={handleCheckStatusPortalName}
                onFocus={() => setCheckStatus((prev) => ({ ...prev, portalName: "default" }))}
                status={checkStatus.portalName}
                caption={
                  dataForm.portalName.length === 0
                    ? t("AccountNameIsEmpty")
                    : undefined
                  }
                required
              />
              <StyledHeroFormPortalText as={"span"}>
                .onlyoffice.(co/eu/sg/com/com2)
              </StyledHeroFormPortalText>
            </StyledHeroFormPortalWrapper>
            <Select
              selected={selectedOption}
              setSelected={setSelectedOption}
              options={options}
              label={t("YouAre")}
              status={selectedOption.length === 0 ? "default" : "success"}
              required
              maxWidth="100%"
            />
            <Input
              value={dataForm.yourWebsiteURL}
              onChange={(event) => setDataForm({...dataForm, yourWebsiteURL: event.target.value})}
              placeholder={t("YourWebsiteURL")}
              label={t("YourWebsiteURL")}
              onBlur={handleCheckStatusYourWebsiteURL}
              onFocus={() => setCheckStatus((prev) => ({ ...prev, yourWebsiteURL: "default" }))}
              status={checkStatus.yourWebsiteURL}
              caption={
                dataForm.yourWebsiteURL.length === 0
                  ? t("SiteURLIsEmpty")
                  : t("SiteURLIsIncorrect")
                }
              required
            />
            <HCaptcha
              ref={refHcaptcha}
              onVerify={handleGetHCaptchaToken}
              onExpire={() => handleGetHCaptchaToken(null)}
            />
            <LoaderButton
              onClick={handleSubmitRequest}
              label={t("SubmitRequest")}
              disabled={
                checkStatus.firstName !== "success" ||
                checkStatus.lastName !== "success" ||
                checkStatus.email !== "success" ||
                checkStatus.portalName !== "success" ||
                selectedOption.length === 0 ||
                checkStatus.yourWebsiteURL !== "success" ||
                dataForm.hCaptchaToken === null
              }
              status={submitStatus}
            />
          </StyledHeroForm>
        </StyledHeroFormWrapper>
      </Container>
    </Section>
  );
};

export { Hero };