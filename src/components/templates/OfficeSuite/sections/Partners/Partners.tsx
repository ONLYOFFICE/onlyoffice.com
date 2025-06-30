import { items } from "./data/items";
import {
  StyledPartnerLogo,
  StyledPartnersInner,
  StyledPartnersWrapper,
} from "./Partners.styled";

const Partners = () => {
  return (
    <StyledPartnersWrapper>
      <StyledPartnersInner>
        {items.map((item) => (
          <StyledPartnerLogo
            key={item.name}
            $positionX={item.positionX}
            $width={item.width}
          />
        ))}
      </StyledPartnersInner>
    </StyledPartnersWrapper>
  );
};

export { Partners };
