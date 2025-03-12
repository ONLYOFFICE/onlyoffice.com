import { StyledList, StyledListItem } from "./List.styled";
import { IList } from "./List.types";

const List = ({
  items,
  isBullet = true,
  bulletType = "rhombus",
  color,
  paddingBottom,
  lineHeight,
}: IList) => {
  return (
    <StyledList>
      {items.map((item, index) => (
        <StyledListItem
          key={index}
          $isBullet={isBullet}
          $bulletType={bulletType}
          $color={color}
          $paddingBottom={paddingBottom}
          $lineHeight={lineHeight}
        >
          {item}
        </StyledListItem>
      ))}
    </StyledList>
  );
};

export { List };
