import {
  StyledEditorsTab,
  StyledEditorsTabs,
  StyledEditorsTabLink,
  StyledContainer,
} from "./EditorsTabs.styled";
import { IEditorsTabsProps } from "./EditorsTabs.types";
import { useRef, useState, useEffect } from "react";

const EditorsTabs = ({ items, t, className }: IEditorsTabsProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isFixed, setIsFixed] = useState(false);
  const [selectId, setSelectId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;
      const { top } = wrapperRef.current.getBoundingClientRect();
      setIsFixed(top <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={wrapperRef} className={className}>
      <StyledContainer $isFixed={isFixed}>
        <StyledEditorsTabs>
          {items.map(({ id, url, label }, index) => (
            <StyledEditorsTab key={index}>
              <StyledEditorsTabLink
                id={id}
                href={url}
                label={t(label)}
                onClick={() => setSelectId(id)}
                $isActive={selectId === id}
              />
            </StyledEditorsTab>
          ))}
        </StyledEditorsTabs>
      </StyledContainer>
    </div>
  );
};

export { EditorsTabs };
