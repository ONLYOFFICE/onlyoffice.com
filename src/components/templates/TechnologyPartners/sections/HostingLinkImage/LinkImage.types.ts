export interface ILinkImage {
    /** The title */
    title: string;
    /** The text */
    text: string;
    /** The text links */
    textLinks?: { href: string; isExternal?: boolean }[];
    /** The button text */
    btnText: string;
    /** The button link */
    linkBtn: string;
    /** Links */
    links?: { href: string; target: "_self" | "_blank" | "_parent" | "_top"; }[];
}