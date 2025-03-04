import React from "react";
import { AlphabetContainer, LetterButton } from "./AlphabetFilter.styled";
import { IAlphabetFilter } from "./AlphabetFilter.types";
import { useTranslation } from "react-i18next";

const AlphabetFilter = ({
  arr,
  selectedLetter,
  onLetterSelect,
}: IAlphabetFilter) => {
  const { t } = useTranslation("common");
  const allLabel = t("All");

  const sortedArray = [
    ...arr?.map((name) => name.charAt(0).toUpperCase()).sort(),
  ];
  const letters = Array.from(new Set([allLabel, ...sortedArray])) || [];

  return (
    <AlphabetContainer>
      {letters.map((letter) => (
        <LetterButton
          key={letter}
          data-letter={letter}
          onClick={() => onLetterSelect(letter)}
          selected={
            selectedLetter
              ? letter === selectedLetter.toUpperCase()
              : letter === allLabel
          }
        >
          {letter}
        </LetterButton>
      ))}
    </AlphabetContainer>
  );
};

export { AlphabetFilter };
