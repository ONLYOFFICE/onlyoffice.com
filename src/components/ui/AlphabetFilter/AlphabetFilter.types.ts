export interface IAlphabetFilter {
    /** Array of partners */
    arr: string[];
    /** Currently selected letter */
    selectedLetter: string;
    /** Function to handle letter selection */
    onLetterSelect: (letter: string) => void;
}

export interface ILetterButton {
    /** Letter to display */
    letter: string;
    /** Whether the letter is currently selected */
    selected: boolean;
    /** Function to handle letter selection */
    onClick: () => void;
}