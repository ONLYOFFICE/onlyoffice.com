import { StyledFeatureList, StyledFeatureListItem } from "./FeatureList.styled";
import { IFeatureList } from "./FeatureList.types";

const FeatureList = ({ items }: IFeatureList) => {
  return (
    <StyledFeatureList>
      {items.map((item, index) => (
        <StyledFeatureListItem key={index}>{item}</StyledFeatureListItem>
      ))}
    </StyledFeatureList>
  );
};

export { FeatureList };
