import { useState } from "react";
import { Trans, useTranslation } from "next-i18next";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { ICardProps } from "@src/components/templates/Vacancies/Vacancies.types";

import {
  CardDepartment,
  CardHeading,
  CardBenefitsHeading,
  CardRequirementsHeading,
  CardSkillsHeading,
  CardInfoLanguageIcon,
  CardInfoLanguageLabel,
  CardInfoLanguageWrapper,
  CardInfoLocation,
  CardInfoTime,
  CardInfoWrapper,
  CardItem,
  CardRequirementsList,
  CardSkillsList,
  CardBenefitsList,
  CardRequirementsItem,
  CardSkillsItem,
  CardBenefitsItem,
  CardInterestedText,
  CardOpenButton,
  CardContent,
} from "./Card.styled";

const Card = ({
  department,
  title,
  location,
  time,
  language,
  description,
  requirements,
  skills,
  benefits
}: ICardProps) => {
  const { t } = useTranslation("vacancies");
  const [toggleCard, setToggleCard] = useState(false);

  const rawRequirements = t(requirements, { returnObjects: true });
  const requirementsList = Array.isArray(rawRequirements) ? rawRequirements : [rawRequirements];

  const rawSkills = t(skills, { returnObjects: true });
  const skillsList = Array.isArray(rawSkills) ? rawSkills : [rawSkills];

  const rawBenefits = t(benefits, { returnObjects: true });
  const benefitsList = Array.isArray(rawBenefits) ? rawBenefits : [rawBenefits];

  return (
    <CardItem>
      <CardDepartment
        $departmentColor={department.color}
        label={t(department.label)}
        size={3}
      />
      <CardHeading
        label={t(title)}
        level={3}
        size={4}
      />
      <CardInfoWrapper>
        <CardInfoLocation label={t(location)} size={4} textTransform="uppercase" fontWeight={600} color="#666666" />
        <CardInfoTime label={t(time)} size={4} textTransform="uppercase"  fontWeight={600} color="#666666" />
        <CardInfoLanguageWrapper>
          {language.icon.map((icon, index) => (
            <CardInfoLanguageIcon
              key={icon + index}
              $iconUrl={icon}
            />
          ))}
          <CardInfoLanguageLabel
            label={t(language.label)}
            size={4}
            textTransform="uppercase"
            fontWeight={600}
            color="#666666"
          />
        </CardInfoLanguageWrapper>
      </CardInfoWrapper>
      <CardContent $isCardOpen={toggleCard}>
        <Text
          label={t(description)}
          size={2}
        />
        <CardRequirementsHeading size={5} level={3} label={t("JobCardHeadingRequirements")} />
        <CardRequirementsList>
          {requirementsList.map((requirement, index) => (
            <CardRequirementsItem key={requirement + index}>
              {requirement}
            </CardRequirementsItem>
          ))}
        </CardRequirementsList>
        <CardSkillsHeading size={5} level={3} label={t("JobCardHeadingSkills")} />
        <CardSkillsList>
          {skillsList.map((skill, index) => (
            <CardSkillsItem key={skill + index}>
              {skill}
            </CardSkillsItem>
          ))}
        </CardSkillsList>
        <CardBenefitsHeading size={5} level={3} label={t("Benefits")} />
        <CardBenefitsList>
          {benefitsList.map((benefit, index) => (
            <CardBenefitsItem key={benefit + index}>
              {benefit}
            </CardBenefitsItem>
          ))}
        </CardBenefitsList>
        <CardInterestedText size={2}>
          <Trans
            t={t}
            i18nKey={"JobCardAreYouInterested"}
            components={[
              <Link
                key={0}
                href="mailto:jobs@onlyoffice.com"
                color="main"
                textUnderline={true}
                hover="underline-none"
              />
            ]}
          />
        </CardInterestedText>
      </CardContent>
      <CardOpenButton
        variant="quaternary"
        onClick={() => setToggleCard(!toggleCard)}
        $isCardOpen={toggleCard}
      />
    </CardItem>
  );
};

export { Card };