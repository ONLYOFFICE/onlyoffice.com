export interface ILinkImage {
    /** The title */
    title: string;
    /** The text */
    text: string;
    /** The button text */
    btnText: string;
    /** The button link */
    linkBtn: string;
    /** Links */
    links?: { href: string; target: "_self" | "_blank" | "_parent" | "_top"; }[];
}