import { useTranslation } from "next-i18next";
import * as S from "./Benefits.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { useState } from "react";
import { IBenefits } from "./Benefits.types";
import { benefits } from "./data/benefits";
import { Button } from "@src/components/ui/Button";

const Benefits = () => {
  const { t } = useTranslation("education");
  const [educatorType, setEducatorType] =
    useState<IBenefits["educatorType"]>("teacher");

  return (
    <Section>
      <Container>
        <S.StyledBenefitsHeading
          level={2}
          label={t("WhyUsingOOForEducation")}
        />
        <S.StyledBenefitsWrapper>
          <S.StyledBenefitTitle
            $isActive={educatorType === "teacher"}
            onClick={() => setEducatorType("teacher")}
          >
            {t("IfYoureAnEducator")}
          </S.StyledBenefitTitle>
          <S.StyledBenefitTitle
            $isActive={educatorType === "student"}
            onClick={() => setEducatorType("student")}
          >
            {t("IfYoureAStudent")}
          </S.StyledBenefitTitle>
        </S.StyledBenefitsWrapper>

        {benefits
          .filter((benefit) => benefit.educatorType === educatorType)
          .map((benefit, index) => (
            <S.StyledBenefit key={educatorType + index}>
              <S.StyledBenefitContent>
                <S.StyledBenefitList
                  style={{ order: educatorType === "teacher" ? 0 : 1 }}
                >
                  {benefit.items.map((item, idx) => (
                    <S.StyledBenefitListItem key={idx}>
                      {t(item)}
                    </S.StyledBenefitListItem>
                  ))}
                </S.StyledBenefitList>
                <S.StyledBenefitImage src={benefit.image} alt={educatorType} />
              </S.StyledBenefitContent>
              <Button as="a" href={benefit.link} label={t("GetStarted")} />
            </S.StyledBenefit>
          ))}
      </Container>
    </Section>
  );
};

export { Benefits };
