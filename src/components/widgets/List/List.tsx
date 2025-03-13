import { StyledList, StyledListItem } from "./List.styled";
import { IList } from "./List.types";

const List = ({
  items,
  className,
  isBullet = true,
  bulletType = "rhombus",
  color,
  gap,
  lineHeight,
}: IList) => {
  return (
    <StyledList $gap={gap} className={className}>
      {items.map(({ label }, index) => (
        <StyledListItem
          key={index}
          $isBullet={isBullet}
          $bulletType={bulletType}
          $color={color}
          $lineHeight={lineHeight}
        >
          {label}
        </StyledListItem>
      ))}
    </StyledList>
  );
};

export { List };
