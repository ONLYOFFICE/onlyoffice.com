export interface IContactBlock {
    /**The heading text */
    heading: string;
    /**The text array - label, url, target */
    text: {label: string; url?: string; target?: "_blank" | "_self"}[];
    /**The button text */
    button: { label: string; url?: string; target?: "_blank" | "_self"};
}