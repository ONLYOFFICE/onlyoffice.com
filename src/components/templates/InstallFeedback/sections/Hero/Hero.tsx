import { useState, useRef } from "react";
import { useTranslation } from "next-i18next";
import ReactCaptcha from "@hcaptcha/react-hcaptcha";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { HCaptcha } from "@src/components/ui/HCaptcha";
import { ILoaderButton } from "@src/components/ui/LoaderButton";
import { QuestionBlock } from "./sub-components/QuestionBlock";
import { getFromParam } from "@src/utils/getParams";
import { IFormData } from "../../InstallFeedback.types";

import {
  operatingSystemItems,
  countsOfUsersItems,
  moduleItems,
  issuesItems,
  intuitiveAndSimpleItems,
  degreeVersionMeetItems,
  planToUseItems,
} from "./data/items";

import {
  StyledHeroForm,
  StyledHeroHeading,
  StyledHeroQuestionHeading,
  StyledHeroInputText,
  StyledHeroInputTextBlock,
  StyledHeroTextAreaBlock,
  StyledHeroTextArea,
  StyledHeroLoaderButton,
  StyledHeroLoaderButtonWrapper,
  StyledHeroLoaderStatusLoadText,
  StyledHeroPopupStatus,
  StyledHeroCrossButton,
  StyledHeroStatusHeading,
  StyledHeroStatusText,
  StyledHeroPopupCloseButton,
  StyledHeroPopupWrapper,
} from "./Hero.styled";

const Hero = () => {
  const { t } = useTranslation("install-feedback");

  const hCaptchaRef = useRef<ReactCaptcha | null>(null);
  const [status, setStatus] = useState<ILoaderButton["status"]>("default");
  const [formData, setFormData] = useState<IFormData>({
    operatingSystem: "Microsoft Windows Vista SP2",
    countsOfUsers: "1-30",
    whoIsResponsible: "",
    modules: {
      documents: false,
      crm: false,
      community: false,
      calendar: false,
      projects: false,
      people: false,
      mail: false,
    },
    issues: "Yes",
    intuitiveAndSimple: "Yes",
    degreeVersionMeet: "Meet absolutely",
    planToUse: "Yes",
    comments: "",
    captchaToken: null,
  });

  const clearData = () => {
    setStatus("default");
    setFormData({
      operatingSystem: "Microsoft Windows Vista SP2",
      countsOfUsers: "1-30",
      whoIsResponsible: "",
      modules: {
        documents: false,
        crm: false,
        community: false,
        calendar: false,
        projects: false,
        people: false,
        mail: false,
      },
      issues: "Yes",
      intuitiveAndSimple: "Yes",
      degreeVersionMeet: "Meet absolutely",
      planToUse: "Yes",
      comments: "",
      captchaToken: null,
    });
  };

  const handleHCaptchaChange = async (token: string | null) => {
    setFormData((prev) => ({
      ...prev,
      captchaToken: token,
    }));
  };

  const handleSubmit = async () => {
    if (status === "loading") return;
    if (status === "success" || status === "error") {
      clearData();
      return;
    }

    setStatus("loading");
    const from = getFromParam();

    try {
      const response = await fetch("/api/install-feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          os: formData.operatingSystem,
          users_count: formData.countsOfUsers,
          responsible: formData.whoIsResponsible,
          modules: formData.modules,
          issues: formData.issues,
          simple: formData.intuitiveAndSimple,
          meet: formData.degreeVersionMeet,
          support: formData.planToUse,
          comments: formData.comments,
          from,
          hCaptchaResponse: formData.captchaToken,
        }),
      });

      const responseData = await response.json();

      if (responseData.status === "success") {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("InstallFeedback api returns errors:", error);
      setStatus("error");
    }
  };

  return (
    <>
      <Section
        desktopSpacing={["60px", "60px"]}
        tabletSpacing={["48px", "60px"]}
        tabletSmallSpacing={["48px", "60px"]}
        mobileSpacing={["48px", "60px"]}
      >
        <Container maxWidth="1050px">
          <StyledHeroHeading
            level={1}
            label={t("PleaseShareYourImpressions")}
          />
          <StyledHeroForm>
            <QuestionBlock
              formData={formData}
              setFormData={setFormData}
              items={operatingSystemItems}
              name="operatingSystem"
              heading={t("WhichOperatingSystem")}
            />
            <QuestionBlock
              formData={formData}
              setFormData={setFormData}
              items={countsOfUsersItems}
              name="countsOfUsers"
              heading={t("HowManyUsersAre")}
            />
            <StyledHeroInputTextBlock>
              <StyledHeroQuestionHeading
                label={t("WhoIsResponsibleForTheServer")}
                level={2}
                size={6}
              />
              <StyledHeroInputText
                name="whoIsResponsible"
                value={formData.whoIsResponsible}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    whoIsResponsible: e.target.value,
                  })
                }
              />
            </StyledHeroInputTextBlock>
            <QuestionBlock
              formData={formData}
              setFormData={setFormData}
              items={moduleItems}
              name="modules"
              heading={t("WhichModulesDoYouUse")}
              isCheckBoxBlock={true}
            />
            <QuestionBlock
              formData={formData}
              setFormData={setFormData}
              items={issuesItems}
              name="issues"
              heading={t("DidYouHaveAnyIssues")}
              columns={3}
            />
            <QuestionBlock
              formData={formData}
              setFormData={setFormData}
              items={intuitiveAndSimpleItems}
              name="intuitiveAndSimple"
              heading={t("DidYouFindTheInstallation")}
              columns={3}
            />
            <QuestionBlock
              formData={formData}
              setFormData={setFormData}
              items={degreeVersionMeetItems}
              name="degreeVersionMeet"
              heading={t("ToWhatDegreeThisVersion")}
              columns={3}
            />
            <QuestionBlock
              formData={formData}
              setFormData={setFormData}
              items={planToUseItems}
              name="planToUse"
              heading={t("DoYouPlanToUseTheAdditional")}
              columns={3}
            />
            <StyledHeroTextAreaBlock>
              <StyledHeroHeading
                label={t("PleaseLeaveYourComments")}
                level={2}
                size={6}
              />
              <StyledHeroTextArea
                name="comments"
                value={formData.comments}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    comments: e.target.value,
                  })
                }
              />
            </StyledHeroTextAreaBlock>

            <HCaptcha
              ref={hCaptchaRef}
              onVerify={handleHCaptchaChange}
              onExpire={() => handleHCaptchaChange(null)}
            />

            <StyledHeroLoaderButtonWrapper>
              {status === "loading" && (
                <StyledHeroLoaderStatusLoadText
                  label={t("PleaseWait")}
                  color="#999999"
                  size={4}
                />
              )}
              <StyledHeroLoaderButton
                label={t("SendFeedback")}
                onClick={handleSubmit}
                status={status}
                disabled={formData.captchaToken === null ? true : false}
              />
            </StyledHeroLoaderButtonWrapper>
          </StyledHeroForm>
        </Container>
      </Section>

      {(status === "success" || status === "error") && (
        <Container maxWidth="1050px">
          <StyledHeroPopupStatus>
            <StyledHeroCrossButton onClick={clearData} />
            {status === "success" && (
              <StyledHeroStatusHeading
                label={t("SendInstallFeedbackSuccessful")}
                size={5}
                level={2}
              />
            )}
            {status === "error" && (
              <StyledHeroStatusHeading
                label={t("SendInstallFeedbackError")}
                size={5}
                level={2}
              />
            )}
            <StyledHeroPopupWrapper>
              {status === "success" && (
                <StyledHeroStatusText
                  label={t("ThankYouForYourTimeAndGoodLuck")}
                  size={4}
                />
              )}
              {status === "error" && (
                <StyledHeroStatusText label={t("WeAreSorryBut")} size={4} />
              )}
              <StyledHeroPopupCloseButton
                label={t("OK")}
                variant="secondary"
                borderRadius="3px"
                fullWidth={true}
                onClick={clearData}
              />
            </StyledHeroPopupWrapper>
          </StyledHeroPopupStatus>
        </Container>
      )}
    </>
  );
};

export { Hero };
