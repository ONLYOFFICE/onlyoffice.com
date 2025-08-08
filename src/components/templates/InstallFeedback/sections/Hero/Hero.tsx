import { useState } from "react";
import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { QuestionBlock } from "./sub-components/QuestionBlock";
import { IFormData } from "../../InstallFeedback.types";

import {
  operatingSystemItems,
  countsOfUsersItems,
  // moduleItems,
  issuesItems,
  intuitiveAndSimpleItems,
  degreeVersionMeetItems,
  planToUseItems
} from "./data/items";

import {
  StyledHeroForm,
  StyledHeroHeading,
} from "./Hero.styled";

const Hero = () => {
  const { t } = useTranslation("install-feedback");

  const [formData, setFormData] = useState<IFormData>({
    operatingSystem: "Microsoft Windows Vista SP2",
    countsOfUsers: "1-30",
    module: "",
    issues: "Yes",
    intuitiveAndSimple: "Yes",
    degreeVersionMeet: "Meet absolutely",
    planToUse: "Yes",
  });

  return (
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
        </StyledHeroForm>
      </Container>
    </Section>
  );
};

export { Hero };