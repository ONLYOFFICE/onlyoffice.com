import { useState } from "react";
import { Trans, useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { Input } from "@src/components/ui/Input";
import { HCaptcha } from "@src/components/ui/HCaptcha";
import { LoaderButton } from "@src/components/ui/LoaderButton";
import { ICheckStatus } from "../../FreeCloud.types";
import { validateFullName, validateEmail, validateWebsite } from "@src/utils/validators";

import {
  StyledHeroForm,
  StyledHeroFormNameWrapper,
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

  const [dataForm, setDataForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    portalName: "",
    youAre: "",
    yourWebsiteURL: "",
  });
  const [checkStatus, setCheckStatus] = useState<ICheckStatus>({
    firstName: "default",
    lastName: "default",
    email: "default",
    portalName: "default",
    youAre: "default",
    yourWebsiteURL: "default",
  });

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
                <Link key="0" color="#FF6F3D" textUnderline={true} hover="underline-none" href="/docspace-registration" />,
                <Link key="1" color="#FF6F3D" textUnderline={true} hover="underline-none" href="/banners?from=nonprofit" />,
                <Link key="2" color="#FF6F3D" textUnderline={true} hover="underline-none" href="/" />,
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
                caption={dataForm.firstName.length === 0 ? t("FirstNameIsEmpty") : t("FirstNameIsIncorrect")}
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
                caption={dataForm.lastName.length === 0 ? t("LastNameIsEmpty") : t("LastNameIsIncorrect")}
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
              caption={dataForm.email.length === 0 ? t("EmailIsEmpty") : t("EmailIsIncorrect")}
              required
            />
            <Input
              value={dataForm.portalName}
              onChange={(event) => setDataForm({...dataForm, portalName: event.target.value})}
              placeholder={t("PortalName")}
              label={t("PortalName")}
              onBlur={handleCheckStatusPortalName}
              onFocus={() => setCheckStatus((prev) => ({ ...prev, portalName: "default" }))}
              status={checkStatus.portalName}
              caption={dataForm.portalName.length === 0 ? t("AccountNameIsEmpty") : undefined}
              required
            />
            <Input
              value={dataForm.youAre}
              onChange={(event) => setDataForm({...dataForm, youAre: event.target.value})}
              placeholder={t("YouAre")}
              label={t("YouAre")}
              // onBlur={handleCheckStatusYouAre}
              onFocus={() => setCheckStatus((prev) => ({ ...prev, youAre: "default" }))}
              status={checkStatus.youAre}
              caption={dataForm.youAre.length === 0 ? t("YouAreIsEmpty") : t("YouAreIsIncorrect")}
              required
            />
            <Input
              value={dataForm.yourWebsiteURL}
              onChange={(event) => setDataForm({...dataForm, yourWebsiteURL: event.target.value})}
              placeholder={t("YourWebsiteURL")}
              label={t("YourWebsiteURL")}
              onBlur={handleCheckStatusYourWebsiteURL}
              onFocus={() => setCheckStatus((prev) => ({ ...prev, yourWebsiteURL: "default" }))}
              status={checkStatus.yourWebsiteURL}
              caption={dataForm.yourWebsiteURL.length === 0 ? t("YourWebsiteURLEmpty") : t("YourWebsiteURLIsIncorrect")}
              required
            />
            <HCaptcha />
            <LoaderButton
              onClick={() => console.log("submit")}
              label={t("SubmitRequest")}
              disabled={
                checkStatus.firstName !== "success" ||
                checkStatus.lastName !== "success" ||
                checkStatus.email !== "success" ||
                checkStatus.portalName !== "success" ||
                // checkStatus.youAre !== "success" ||
                checkStatus.yourWebsiteURL !== "success"
              }
            />
          </StyledHeroForm>
        </StyledHeroFormWrapper>
      </Container>
    </Section>
  );
};

export { Hero };