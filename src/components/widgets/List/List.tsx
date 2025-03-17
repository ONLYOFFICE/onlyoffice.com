import { StyledList, StyledListItem } from "./List.styled";
import { IList } from "./List.types";

const List = ({
  items,
  className,
  bulletType = "rhombus",
  color,
  gap,
  fontSize,
  lineHeight,
}: IList) => {
  return (
    <StyledList $gap={gap} className={className}>
      {items.map(({ label }, index) => (
        <StyledListItem
          key={index}
          $fontSize={fontSize}
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
