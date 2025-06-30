import { StyledSection, StyledBannerItem } from "./AwardsBanner.styled";
import { bannerItems } from "./data/items";

const AwardsBanner = () => {
  return (
    <StyledSection>
      {bannerItems.map((item) => (
        <StyledBannerItem key={item.id} src={item.imgUrl} alt={item.id} />
      ))}
    </StyledSection>
  );
};

export { AwardsBanner };
