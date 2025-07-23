import { useState } from "react";
import { useTranslation } from "next-i18next";
import {
  StyledLearnMoreBtnWrapper,
  StyledLearnMoreBtn,
  StyledLearnMore,
  StyledLearnMoreTop,
  StyledLearnMoreLabel,
  StyledLearnMoreCloseBtn,
} from "./LearnMore.styled";
import { ILearnMore } from "./LearnMore.types";
import { Text } from "@src/components/ui/Text";

const LearnMore = ({ label, text }: ILearnMore) => {
  const { t } = useTranslation("converter");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <StyledLearnMoreBtnWrapper>
          <StyledLearnMoreBtn onClick={() => setIsOpen(true)}>
            {t("LearnMore")}
          </StyledLearnMoreBtn>
        </StyledLearnMoreBtnWrapper>
      )}

      {isOpen && (
        <StyledLearnMore>
          <StyledLearnMoreTop>
            <StyledLearnMoreLabel
              forwardedAs="span"
              size={2}
              textTransform="uppercase"
              label={label}
            />
            <StyledLearnMoreCloseBtn onClick={() => setIsOpen(false)} />
          </StyledLearnMoreTop>

          <Text size={2} label={text} />
        </StyledLearnMore>
      )}
    </>
  );
};

export { LearnMore };
