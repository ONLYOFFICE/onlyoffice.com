import { useRef } from "react";
import {
  StyledCollapse,
  StyledCollapseLabel,
  StyledCollapseContent,
} from "./Collapse.styled";
import { ICollapse } from "./Collapse.types";

const Collapse = ({
  id,
  className,
  label,
  children,
  divider,
  isOpen,
  onClick,
}: ICollapse) => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  return (
    <StyledCollapse id={id} className={className} $divider={divider}>
      <StyledCollapseLabel
        onClick={onClick}
        $isOpen={isOpen ?? false}
        aria-expanded={isOpen}
      >
        {label}
      </StyledCollapseLabel>
      <StyledCollapseContent
        ref={contentRef}
        $isOpen={isOpen ?? false}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
        aria-hidden={!isOpen}
      >
        {children}
      </StyledCollapseContent>
    </StyledCollapse>
  );
};

export { Collapse };
