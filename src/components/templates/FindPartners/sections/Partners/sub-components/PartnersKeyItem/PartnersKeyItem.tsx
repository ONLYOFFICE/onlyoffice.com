import { memo } from 'react';
import { StyledPartnersKeyItem } from './PartnersKeyItem.styled';
import { Button } from '@src/components/ui/Button';
import { IPartnersKeyItemProps } from '@src/components/templates/FindPartners/FindPartners.types';

const PartnersKeyItemComponent = ({ name, index, isActiveTab, onClick }: IPartnersKeyItemProps) => {
  return (
    <StyledPartnersKeyItem>
      <Button
        borderRadius="3px"
        label={name}
        onClick={() => onClick(name, index)}
        variant={isActiveTab ? "secondary" : "tertiary"}
      />
    </StyledPartnersKeyItem>
  );
};

const PartnersKeyItem = memo(PartnersKeyItemComponent);

export { PartnersKeyItem };