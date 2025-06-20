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
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [activeDepartment, setActiveDepartment] = useState<number>(0);
  const [activeCountry, setActiveCountry] = useState<number>(0);

  const uniqueDepartments = useMemo(() => [
    t("JobFiltersReset"),
    ...new Set(
      items
      .map((item) => t(item.department.label))
      .sort((a, b) => a.localeCompare(b))
    )
  ], [t]);

  const uniqueCountries = useMemo(() => [
    t("JobFiltersReset"),
    ...new Set(
      items
      .map((item) => t(item.country))
      .sort((a, b) => a.localeCompare(b))
    )
  ], [t]);

  const toggleFiltersDepartment = () => {
    setIsDepartmentFiltersOpen(!isDepartmentFiltersOpen);
    setIsCountryFiltersOpen(false);
  }

  const toggleFiltersCountry = () => {
    setIsCountryFiltersOpen(!isCountryFiltersOpen);
    setIsDepartmentFiltersOpen(false);
  }

  const handleDepartmentOptionClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    const button = event.currentTarget;
    const text = button.textContent;
    if (text === t("JobFiltersReset")) {
      setSelectedDepartment("");
    } else {
      setSelectedDepartment(text ?? "");
    }
    setIsDepartmentFiltersOpen(false);
    setActiveDepartment(index);
  }

  const handleCountryOptionClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    const button = event.currentTarget;
    const text = button.textContent;
    if (text === t("JobFiltersReset")) {
      setSelectedCountry("");
    } else {
      setSelectedCountry(text ?? "");
    }
    setIsCountryFiltersOpen(false);
    setActiveCountry(index);
  }

  const filteredItems = useMemo(() => {
    let filterItems = items;

    if (selectedDepartment) {
      filterItems = filterItems.filter((item) => selectedDepartment === t(item.department.label));
    }

    if (selectedCountry) {
      filterItems = filterItems.filter((item) => selectedCountry === t(item.country));
    }

    return filterItems;
  }, [selectedDepartment, selectedCountry, t])

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
                label={selectedDepartment === "" ? t("JobFiltersDepartment") : selectedDepartment}
                variant="quaternary"
               />
               <StyledJobSelectorOptions $isOpen={isDepartmentFiltersOpen}>
                {uniqueDepartments.map((department, index) => (
                  <StyledJobSelectorOption
                    key={department}
                    onClick={(event) => handleDepartmentOptionClick(event, index)}
                    $isActive={activeDepartment === index}
                  >
                    {department}
                  </StyledJobSelectorOption>
                ))}
               </StyledJobSelectorOptions>
            </StyledJobSelector>
            <StyledJobSelector>
              <StyledJobSelectorButton
                onClick={toggleFiltersCountry}
                label={selectedCountry === "" ? t("JobFiltersCountry") : selectedCountry}
                variant="quaternary"
               />
               <StyledJobSelectorOptions $isOpen={isCountryFiltersOpen}>
                {uniqueCountries.map((country, index) => (
                  <StyledJobSelectorOption
                    key={country}
                    onClick={(event) => handleCountryOptionClick(event, index)}
                    $isActive={activeCountry === index}
                  >
                    {country}
                  </StyledJobSelectorOption>
                ))}
               </StyledJobSelectorOptions>
            </StyledJobSelector>
          </StyledJobSelectorsWrapper>
        </StyledJobHeadingWrapper>
        <StyledJobList>
          {filteredItems.map((item) => (
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