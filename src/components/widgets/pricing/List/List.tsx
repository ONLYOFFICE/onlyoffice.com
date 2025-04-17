import { StyledList, StyledListItem } from "./List.styled";
import { IList } from "./List.types";

const List = ({ items, variant = "medium" }: IList) => {
  return (
    <StyledList $variant={variant}>
      {items.map((item, index) => (
        <StyledListItem $variant={variant} key={index}>
          {item}
        </StyledListItem>
      ))}
    </StyledList>
  );
};

export { List };
