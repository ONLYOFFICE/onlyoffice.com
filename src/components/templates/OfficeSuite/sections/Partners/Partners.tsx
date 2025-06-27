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
          <StyledPartnerLogo key={item.name} className={item.name} />
        ))}
      </StyledPartnersInner>
    </StyledPartnersWrapper>
  );
};

export { Partners };