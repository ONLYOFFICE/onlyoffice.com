import { memo } from "react";
import { StyledPartnersCountryOption } from "./PartnersCountryOption.styled";
import { Text } from "@src/components/ui/Text";
import { IPartnersCountryOption } from "@src/components/templates/FindPartners/FindPartners.types";

const PartnersCountryOptionComponent = ({country, isSelectCountry, onClick }: IPartnersCountryOption) => {
  return (
    <StyledPartnersCountryOption
      onClick={() => onClick(country)}
    >
      <Text
        label={country}
        as={"span"}
        size={2}
        color={isSelectCountry ? "#FF6F3D" : undefined}
      />
    </StyledPartnersCountryOption>
  );
};

const PartnersCountryOption = memo(PartnersCountryOptionComponent);
export { PartnersCountryOption };