export interface IBenefits {
    /** The title */
    title: string;
    /** The card text */
    cardText: { label: string }[];
    /** The button text, link */
    btn: {href: string; label: string}
}