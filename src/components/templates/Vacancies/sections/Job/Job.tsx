import { useMemo, useState } from "react";
import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Card } from "./sub-components/Card";
import { items } from "./data/items";

import {
  StyledJobHeadingWrapper,
  StyledJobList,
  StyledJobSelector,
  StyledJobSelectorButton,
  StyledJobSelectorOption,
  StyledJobSelectorOptions,
  StyledJobSelectorsWrapper
} from "./Job.styled";

const Job = () => {
  const { t } = useTranslation("vacancies");
  const [isDepartmentFiltersOpen, setIsDepartmentFiltersOpen] = useState<boolean>(false);
  const [isCountryFiltersOpen, setIsCountryFiltersOpen] = useState<boolean>(false);

  const uniqueDepartments = useMemo(() => Array.from(
    new Set(
      items.map((item) => t(item.department.label))
    )
  ), [t]);

  const uniqueCountries = useMemo(() => Array.from(
    new Set(
      items.map((item) => t(item.country))
    )
  ), [t]);

  const toggleFiltersDepartment = () => {
    setIsDepartmentFiltersOpen(!isDepartmentFiltersOpen);
    setIsCountryFiltersOpen(false);
  }

  const toggleFiltersCountry = () => {
    setIsCountryFiltersOpen(!isCountryFiltersOpen);
    setIsDepartmentFiltersOpen(false);
  }

  return (
    <Section
      background="#f9f9f9"
      desktopSpacing={["50px", "50px"]}
      tabletSpacing={["50px", "50px"]}
      tabletSmallSpacing={["50px", "50px"]}
      mobileSpacing={["0", "48px"]}
    >
      <Container>
        <StyledJobHeadingWrapper>
          <Heading label={t("JobHeading")} level={2} size={4} />
          <StyledJobSelectorsWrapper>
            <StyledJobSelector>
              <StyledJobSelectorButton
                onClick={toggleFiltersDepartment}
                label={t("JobFiltersDepartment")}
                variant="quaternary"
               />
               <StyledJobSelectorOptions $isOpen={isDepartmentFiltersOpen}>
                <StyledJobSelectorOption onClick={() => setIsDepartmentFiltersOpen(false)}>
                  {t("JobFiltersReset")}
                </StyledJobSelectorOption>
                {uniqueDepartments.map((department) => (
                  <StyledJobSelectorOption key={department} onClick={() => setIsDepartmentFiltersOpen(false)}>
                    {department}
                  </StyledJobSelectorOption>
                ))}
               </StyledJobSelectorOptions>
            </StyledJobSelector>
            <StyledJobSelector>
              <StyledJobSelectorButton
                onClick={toggleFiltersCountry}
                label={t("JobFiltersCountry")}
                variant="quaternary"
               />
               <StyledJobSelectorOptions $isOpen={isCountryFiltersOpen}>
                <StyledJobSelectorOption onClick={() => setIsCountryFiltersOpen(false)}>
                  {t("JobFiltersReset")}
                </StyledJobSelectorOption>
                {uniqueCountries.map((country) => (
                  <StyledJobSelectorOption key={country} onClick={() => setIsCountryFiltersOpen(false)}>
                    {country}
                  </StyledJobSelectorOption>
                ))}
               </StyledJobSelectorOptions>
            </StyledJobSelector>
          </StyledJobSelectorsWrapper>
        </StyledJobHeadingWrapper>
        <StyledJobList>
          {items.map((item) => (
            <Card
              key={item.id}
              department={item.department}
              title={item.title}
              location={item.location}
              time={item.time}
              language={item.language}
              description={item.description}
              requirements={item.requirements}
              skills={item.skills}
              benefits={item.benefits}
            />
          ))}
        </StyledJobList>
      </Container>
    </Section>
  );
};

export { Job };