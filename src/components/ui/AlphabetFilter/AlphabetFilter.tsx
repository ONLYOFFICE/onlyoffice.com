import React from "react";
import {
  StyledAlphabetContainer,
  StyledLetterButton,
} from "./AlphabetFilter.styled";
import { IAlphabetFilter } from "./AlphabetFilter.types";

const AlphabetFilter = ({
  arr,
  selectedLetter,
  onLetterSelect,
}: IAlphabetFilter) => {
  const sortedArray = [
    ...arr?.map((name) => name.charAt(0).toUpperCase()).sort(),
  ];
  const letters = Array.from(new Set(["All", ...sortedArray])) || [];

  return (
    <StyledAlphabetContainer>
      {letters.map((letter) => (
        <StyledLetterButton
          key={letter}
          onClick={() => onLetterSelect(letter)}
          $selected={
            selectedLetter
              ? letter === selectedLetter.toUpperCase()
              : letter === "All"
          }
        >
          {letter}
        </StyledLetterButton>
      ))}
    </StyledAlphabetContainer>
  );
};

export { AlphabetFilter };
