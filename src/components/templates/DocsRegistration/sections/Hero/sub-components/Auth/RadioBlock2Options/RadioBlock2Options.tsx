import React from "react";
import { StyledPreRadiosText, StyledLine2RadiosWrapper, StyledLineRadioInput, StyledLineRadioLabel } from "./RadioBlock2Options.styled";
import { ISignUpData } from "../SignUp/SignUp.types";

interface RadioOption {
  label: string;
  value: string;
  idPostfix: string;
}

interface RadioBlock2OptionsProps {
  label: string;
  fieldName: keyof ISignUpData;
  formData: ISignUpData;
  setFormData: React.Dispatch<React.SetStateAction<ISignUpData>>;
  t: (key: string) => string;
  options: RadioOption[],
  prefix: string;
}

const RadioBlock2Options: React.FC<RadioBlock2OptionsProps> = ({ label, fieldName, formData, setFormData, t, options, prefix }) => {
  return (
    <>
      <StyledPreRadiosText label={t(label)} />
      <StyledLine2RadiosWrapper>
        {options.map((opt) => (
          <React.Fragment key={opt.value}>
            <StyledLineRadioInput
              id={`${prefix}${opt.idPostfix}`}
              type="radio"
              name={String(fieldName)}
              value={opt.value}
              checked={formData[fieldName] === opt.value}
              onChange={() =>
                setFormData((prev) => ({ ...prev, [fieldName]: opt.value }))
              }
            />
            <StyledLineRadioLabel
              htmlFor={`${prefix}${opt.idPostfix}`}
            >
              {opt.label}
            </StyledLineRadioLabel>
          </React.Fragment>
        ))}
      </StyledLine2RadiosWrapper>
    </>
  );
};

export { RadioBlock2Options };
