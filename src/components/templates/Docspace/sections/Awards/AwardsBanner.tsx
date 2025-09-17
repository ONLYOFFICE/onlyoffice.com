import { StyledSection, StyledBannerItem } from "./AwardsBanner.styled";
import { bannerItems } from "./data/items";
import { getAssetUrl } from "@src/utils/getAssetUrl";

const AwardsBanner = () => {
  return (
    <StyledSection>
      {bannerItems.map((item) => (
        <StyledBannerItem key={item.id} src={getAssetUrl(item.imgUrl)} alt={item.id} />
      ))}
    </StyledSection>
  );
};

export { AwardsBanner };
