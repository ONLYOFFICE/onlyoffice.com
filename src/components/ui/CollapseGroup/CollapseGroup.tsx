import { useState } from "react";
import { StyledCollapseGroup } from "./CollapseGroup.styled";
import { ICollapseGroup } from "./CollapseGroup.types";
import { Collapse } from "./Collapse";

const CollapseGroup = ({
  id,
  className,
  items,
  isAccordion,
  divider,
}: ICollapseGroup) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openStates, setOpenStates] = useState<boolean[]>(
    Array(items.length).fill(false),
  );

  const handleToggle = (index: number) => {
    if (isAccordion) {
      setOpenIndex(openIndex === index ? null : index);
    } else {
      setOpenStates((prevStates) => {
        const newStates = [...prevStates];
        newStates[index] = !newStates[index];
        return newStates;
      });
    }
  };

  return (
    <StyledCollapseGroup id={id} className={className} $divider={divider}>
      {items.map((item, index) => (
        <Collapse
          label={item.label}
          isOpen={isAccordion ? openIndex === index : openStates[index]}
          onClick={() => handleToggle(index)}
          divider={divider}
          key={index}
        >
          {item.content}
        </Collapse>
      ))}
    </StyledCollapseGroup>
  );
};

export { CollapseGroup };
