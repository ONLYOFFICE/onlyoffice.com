import React from "react";
import { StyledPreRadiosText, StyledLine2RadiosWrapper, StyledLineRadioInput, StyledLineRadioLabel } from "./YesNoRadioBlock.styled";
import { IPartnershipRequestData } from "../../PartnershipRequestForm.types";

interface YesNoRadioBlockProps {
  label: string;
  fieldName: keyof IPartnershipRequestData;
  formData: IPartnershipRequestData;
  setFormData: React.Dispatch<React.SetStateAction<IPartnershipRequestData>>;
  t: (key: string) => string;
  idPrefix: string;
}

const YesNoRadioBlock: React.FC<YesNoRadioBlockProps> = ({ label, fieldName, formData, setFormData, t, idPrefix }) => {
  return (
    <>
      <StyledPreRadiosText label={t(label)} />
      <StyledLine2RadiosWrapper>
        <StyledLineRadioInput
          id={`${idPrefix}-radio-yes`}
          type="radio"
          name={String(fieldName)}
          value="Yes"
          checked={!!formData[fieldName]}
          onChange={() => setFormData(prev => ({ ...prev, [fieldName]: true }))}
        />
        <StyledLineRadioLabel htmlFor={`${idPrefix}-radio-yes`}>{t("Yes")}</StyledLineRadioLabel>

        <StyledLineRadioInput
          id={`${idPrefix}-radio-no`}
          type="radio"
          name={String(fieldName)}
          value="No"
          checked={!formData[fieldName]}
          onChange={() => setFormData(prev => ({ ...prev, [fieldName]: false }))}
        />
        <StyledLineRadioLabel htmlFor={`${idPrefix}-radio-no`}>{t("No")}</StyledLineRadioLabel>
      </StyledLine2RadiosWrapper>
    </>
  );
};

export { YesNoRadioBlock };
