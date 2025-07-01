import { useState } from "react";
import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { SearchIcon } from "@src/components/icons";

import { Hero } from "./sections/Hero";
import { Join } from "./sections/Join";

import {
  StyledWhitepapersInput,
  StyledWhitepapersInputLeft,
  StyledWhitepapersInputRight,
  StyledWhitepapersInputSubtitle,
  StyledWhitepapersInputWrapper,
  StyledWhitepapersLabel,
  StyledWhitepapersSection,
} from "./Whitepapers.styled";

const WhitepapersTemplate = () => {
  const { t } = useTranslation("whitepapers");
  const [value, setValue] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);

  return (
    <>
      <StyledWhitepapersSection
        background="#333"
      >
        <Container maxWidth="1038px">
          <StyledWhitepapersInputWrapper>
            <StyledWhitepapersInputLeft>
              <StyledWhitepapersInputSubtitle
                color="#fff"
                level={6}
                size={6}
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
          </StyledWhitepapersInputWrapper>
        </Container>
      </StyledWhitepapersSection>
      <Hero />
      <Join />
    </>
  );
};

export { WhitepapersTemplate };