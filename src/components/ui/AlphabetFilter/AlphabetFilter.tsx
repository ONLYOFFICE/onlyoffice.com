import React from "react";
import { AlphabetContainer, LetterButton } from "./AlphabetFilter.styled";
import { IAlphabetFilterProps } from "./AlphabetFilter.types";

const AlphabetFilter: React.FC<IAlphabetFilterProps> = ({arr, selectedLetter, onLetterSelect }) => {
  const sortedArray = [...arr?.map(name => name.charAt(0).toUpperCase()).sort()];
  const letters = Array.from(new Set(["All", ...sortedArray])) || [];

  return (
    <AlphabetContainer>
      {letters.map((letter) => (
        <LetterButton
          key={letter}
          data-letter={letter}
          onClick={() => onLetterSelect(letter)}
          selected={selectedLetter ? letter === selectedLetter.toUpperCase() : letter === "All"}
        >
          {letter}
        </LetterButton>
      ))}
    </AlphabetContainer>
  );
};

export { AlphabetFilter };