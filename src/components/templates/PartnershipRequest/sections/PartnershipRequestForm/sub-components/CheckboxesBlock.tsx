import React from 'react';
import { IPartnershipRequestData } from "../PartnershipRequestForm.types";
import { Text } from '@src/components/ui/Text';
import { Checkbox } from '@src/components/ui/Checkbox';
import { StyledTextWrapper, StyledChecboxesWrapper } from '../PartnershipRequestForm.styled';

interface CheckboxesBlockProps {
  label: string;
  items: { key: string; label: string; id: string; name: string }[];
  formData: IPartnershipRequestData;
  setFormData: React.Dispatch<React.SetStateAction<IPartnershipRequestData>>;
  t: (key: string) => string;
}

const CheckboxesBlock: React.FC<CheckboxesBlockProps> = ({
  label,
  items,
  formData,
  setFormData,
  t
}) => (
  <div>
    <StyledTextWrapper>
      <Text label={t(label)} />
    </StyledTextWrapper>
    <StyledChecboxesWrapper>
      {items.map(({ key, label, id, name }) => (
        <Checkbox
          id={id}
          key={key}
          name={name}
          checked={formData[key] as boolean}
          onChange={() => {
            setFormData((prev) => ({
              ...prev,
              [key]: !prev[key],
            }));
          }}
          label={t(label)}
        />
      ))}
    </StyledChecboxesWrapper>
  </div>
);

export { CheckboxesBlock };
