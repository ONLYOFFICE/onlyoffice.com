import { useState } from "react";
import {
  StyledTabs,
  StyledTabsList,
  StyledTabsItem,
  StyledTabsPanel,
  StyledTabsCollapsibleBtnWrapper,
  StyledTabsCollapsibleBtn,
} from "./Tabs.styled";
import { ITabs } from "./Tabs.types";
import { ChevronUpIcon } from "@src/components/icons";

const Tabs = ({
  id,
  className,
  items,
  selected,
  collapsible,
  bgColor,
  onChange,
}: ITabs) => {
  const [isCollapsed, setIsCollapsed] = useState(collapsible);

  return (
    <StyledTabs id={id} className={className} $bgColor={bgColor}>
      <StyledTabsList>
        {items.map((item, index) => (
          <StyledTabsItem
            key={index}
            $active={selected === item.id}
            onClick={() => onChange(item.id)}
          >
            {item.label}
          </StyledTabsItem>
        ))}
      </StyledTabsList>

      {!isCollapsed &&
        items.map((item, index) => (
          <StyledTabsPanel key={index} $hidden={selected !== item.id}>
            {item.content}
          </StyledTabsPanel>
        ))}

      {collapsible && (
        <StyledTabsCollapsibleBtnWrapper>
          <StyledTabsCollapsibleBtn
            onClick={() => setIsCollapsed(!isCollapsed)}
            $collapsible={isCollapsed}
          >
            <ChevronUpIcon />
          </StyledTabsCollapsibleBtn>
        </StyledTabsCollapsibleBtnWrapper>
      )}
    </StyledTabs>
  );
};

export { Tabs };
