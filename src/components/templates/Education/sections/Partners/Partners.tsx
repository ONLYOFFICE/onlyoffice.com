import * as S from "./Partners.styled";
import { items } from "./data/items";

const Partners = () => {
  return (
    <S.StyledPartnersWrapper>
      <S.StyledPartnersInner>
        {items.map((item) => (
          <S.StyledPartnerLogo key={item.name} className={item.name} />
        ))}
      </S.StyledPartnersInner>
    </S.StyledPartnersWrapper>
  );
};

export { Partners };
