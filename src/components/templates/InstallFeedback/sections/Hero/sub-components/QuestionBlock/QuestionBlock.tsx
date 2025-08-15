import { useTranslation } from "next-i18next";
import { RadioButton } from "@src/components/ui/RadioButton";
import { Checkbox } from "@src/components/ui/Checkbox";
import { IFormData, IQuestionBlockProps } from "@src/components/templates/InstallFeedback/InstallFeedback.types";
import { isModulesField } from "../../../../utils/typeGuard";

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
  isCheckBoxBlock = false,
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
              {isCheckBoxBlock && isModulesField(name) ?
                <Checkbox
                  id={name + item.value}
                  name={name}
                  label={t(item.label)}
                  value={item.value}
                  checked={formData.modules[item.value as keyof IFormData['modules']]}
                  onChange={() => setFormData({
                    ...formData,
                    [name]: {
                      ...formData[name],
                      [item.value]: !formData.modules[item.value as keyof IFormData['modules']],
                    },
                  })}
                />
                :
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
              }
            </StyledQuestionItem>
          ))}
      </StyledQuestionList>
    </StyledQuestionBlock>
  );
};

export { QuestionBlock };