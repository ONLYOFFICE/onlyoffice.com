import { useTranslation } from "next-i18next";
import { RadioButton } from "@src/components/ui/RadioButton";
import { IQuestionBlockProps } from "@src/components/templates/InstallFeedback/InstallFeedback.types";

import {
  StyledQuestionBlock,
  StyledQuestionHeading,
  StyledQuestionItem,
  StyledQuestionList
} from "./QuestionBlock.styled";

const QuestionBlock = ({
  formData,
  setFormData,
  items,
  name,
  heading,
  columns = 2,
}: IQuestionBlockProps) => {
  const { t } = useTranslation("install-feedback");

  return (
    <StyledQuestionBlock>
      <StyledQuestionHeading
        label={heading}
        level={2}
        size={6}
      />
      <StyledQuestionList>
          {items.map((item) => (
            <StyledQuestionItem key={item.value} $columns={columns}>
              <RadioButton
                id={name + item.value}
                name={name}
                label={
                  `${t(item.label)} ${item.value === "101 or more"
                    ? t("OrMore")
                    : ""}
                  `}
                value={item.value}
                checked={formData[name] === item.value}
                onChange={() => setFormData({
                  ...formData,
                  [name]: item.value,
                })}
              />
            </StyledQuestionItem>
          ))}
      </StyledQuestionList>
    </StyledQuestionBlock>
  );
};

export { QuestionBlock };