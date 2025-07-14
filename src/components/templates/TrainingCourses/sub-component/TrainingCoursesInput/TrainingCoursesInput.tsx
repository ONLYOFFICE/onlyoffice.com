import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { SearchIcon } from "@src/components/icons";
import { ITrainingCoursesInputProps } from "../../TrainingCourses.types";

import {
  StyledTrainingCoursesInputSection,
  StyledTrainingCoursesInputWrapper,
  StyledTrainingCoursesInputLeft,
  StyledTrainingCoursesInputSubtitle,
  StyledTrainingCoursesInputRight,
  StyledTrainingCoursesInput,
  StyledTrainingCoursesInputBtnWrapper,
  StyledTrainingCoursesInputClearBtn,
} from "./TrainingCoursesInput.styled";
import { memo } from "react";

const TrainingCoursesInputComponent = ({ filterValue, onFilterChange }: ITrainingCoursesInputProps) => {
  const { t } = useTranslation("training-courses");

  return (
    <StyledTrainingCoursesInputSection
        background="#F5F5F5"
      >
      <Container maxWidth="1038px">
        <StyledTrainingCoursesInputWrapper>
          <StyledTrainingCoursesInputLeft>
            <StyledTrainingCoursesInputSubtitle
              level={6}
              size={6}
              label={t("TrainingCourses")}
            />
          </StyledTrainingCoursesInputLeft>
          <StyledTrainingCoursesInputRight>
            <StyledTrainingCoursesInput
              label={t("SearchTraining")}
              id="#training-course-input"
              rightSide={
                <StyledTrainingCoursesInputBtnWrapper>
                  {!filterValue && (
                    <SearchIcon />
                  )}
                  {filterValue && (
                    <StyledTrainingCoursesInputClearBtn
                      onClick={() => onFilterChange("")}
                    />
                  )}
                </StyledTrainingCoursesInputBtnWrapper>}
              value={filterValue}
              onChange={(event) => onFilterChange(event.target.value)}
            />
          </StyledTrainingCoursesInputRight>
        </StyledTrainingCoursesInputWrapper>
      </Container>
    </StyledTrainingCoursesInputSection>
  );
};

const TrainingCoursesInput = memo(TrainingCoursesInputComponent);

export { TrainingCoursesInput };