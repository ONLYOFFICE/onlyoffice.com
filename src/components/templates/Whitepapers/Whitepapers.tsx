import { useState } from "react";
import { useTranslation } from "next-i18next";
import { SearchIcon } from "@src/components/icons";

import { Hero } from "./sections/Hero";
import { Join } from "./sections/Join";

import {
  StyledWhitepapersInput,
  StyledWhitepapersInputContainer,
  StyledWhitepapersInputLeft,
  StyledWhitepapersInputRight,
  StyledWhitepapersInputSubtitle,
  StyledWhitepapersInputWrapper,
  StyledWhitepapersLabel,
} from "./Whitepapers.styled";

const WhitepapersTemplate = () => {
  const { t } = useTranslation("whitepapers");
  const [value, setValue] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);

  return (
    <>
      <StyledWhitepapersInputWrapper>
        <StyledWhitepapersInputContainer maxWidth="958px">
          <StyledWhitepapersInputLeft>
            <StyledWhitepapersInputSubtitle
              color="#fff"
              fontSize="14px"
              fontWeight={600}
              label={t("WhitepapersInputSubtitle")}
            />
          </StyledWhitepapersInputLeft>
          <StyledWhitepapersInputRight>
            <StyledWhitepapersLabel
              htmlFor="#whitepapers-input"
              $isActive={value.length > 0 || isInputFocused}
            >
              {t("WhitepapersInputLabel")}
            </StyledWhitepapersLabel>
            <StyledWhitepapersInput
              id="#whitepapers-input"
              rightSide={<SearchIcon />}
              value={value}
              onChange={(event) => setValue(event.target.value)}
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setIsInputFocused(false)}
            />
          </StyledWhitepapersInputRight>
        </StyledWhitepapersInputContainer>
      </StyledWhitepapersInputWrapper>
      <Hero />
      <Join />
    </>
  );
};

export { WhitepapersTemplate };