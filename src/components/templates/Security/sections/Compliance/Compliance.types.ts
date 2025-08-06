export interface IFeature {
    /** Maximum width of the block. */
    maxWidth?: string;
    /** The heading. */
    heading: string;
    /** The text */
    text: React.ReactNode;
    /** The link */
    link?: { href: string; label: string; target?: "_blank" | "_self" };
}