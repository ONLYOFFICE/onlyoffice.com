import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { useState } from "react";
import { IBenefits } from "./Benefits.types";
import { benefits } from "./data/benefits";
import { Button } from "@src/components/ui/Button";
import {
  StyledBenefit,
  StyledBenefitContent,
  StyledBenefitImage,
  StyledBenefitList,
  StyledBenefitListItem,
  StyledBenefitsHeading,
  StyledBenefitsWrapper,
  StyledBenefitTitle,
} from "./Benefits.styled";

const Benefits = () => {
  const { t } = useTranslation("healthcare");
  const [educatorType, setEducatorType] =
    useState<IBenefits["educatorType"]>("teacher");

  return (
    <Section>
      <Container>
        <StyledBenefitsHeading level={2} label={t("WhyUsingOOForEducation")} />
        <StyledBenefitsWrapper>
          <StyledBenefitTitle
            $isActive={educatorType === "teacher"}
            onClick={() => setEducatorType("teacher")}
          >
            {t("IfYoureAnEducator")}
          </StyledBenefitTitle>
          <StyledBenefitTitle
            $isActive={educatorType === "student"}
            onClick={() => setEducatorType("student")}
          >
            {t("IfYoureAStudent")}
          </StyledBenefitTitle>
        </StyledBenefitsWrapper>

        {benefits
          .filter((benefit) => benefit.educatorType === educatorType)
          .map((benefit, index) => (
            <StyledBenefit key={educatorType + index}>
              <StyledBenefitContent>
                <StyledBenefitList
                  style={{ order: educatorType === "teacher" ? 0 : 1 }}
                >
                  {benefit.items.map((item, idx) => (
                    <StyledBenefitListItem key={idx}>
                      {t(item)}
                    </StyledBenefitListItem>
                  ))}
                </StyledBenefitList>
                <StyledBenefitImage src={benefit.image} alt={educatorType} />
              </StyledBenefitContent>
              <Button as="a" href={benefit.link} label={t("GetStarted")} />
            </StyledBenefit>
          ))}
      </Container>
    </Section>
  );
};

export { Benefits };
