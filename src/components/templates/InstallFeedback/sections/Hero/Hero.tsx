import { useState } from "react";
import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { ILoaderButton } from "@src/components/ui/LoaderButton";
import { QuestionBlock } from "./sub-components/QuestionBlock";
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
  });

  const handleSubmit = () => {
    setStatus("loading");
    setTimeout(() => {
      console.log(formData);
      setStatus("error");
    }, 2000);
  };

  return (
    <>
      <Section
        desktopSpacing={["60px", "60px"]}
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
                onChange={(e) => setFormData({
                  ...formData,
                  whoIsResponsible: e.target.value,
                })}
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
                onChange={(e) => setFormData({
                  ...formData,
                  comments: e.target.value,
                })}
              />
            </StyledHeroTextAreaBlock>
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
              />
            </StyledHeroLoaderButtonWrapper>
          </StyledHeroForm>
        </Container>
      </Section>

      {(status === "success" || status === "error") && (
        <Container maxWidth="1050px">
          <StyledHeroPopupStatus>
            <StyledHeroCrossButton
              onClick={() => setStatus("default")}
            />
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
                <StyledHeroStatusText
                  label={t("WeAreSorryBut")}
                  size={4}
                />
              )}
              <StyledHeroPopupCloseButton
                label={t("OK")}
                variant="secondary"
                borderRadius="3px"
                fullWidth={true}
                onClick={() => setStatus("default")}
              />
            </StyledHeroPopupWrapper>
          </StyledHeroPopupStatus>
        </Container>
      )}
    </>
  );
};

export { Hero };