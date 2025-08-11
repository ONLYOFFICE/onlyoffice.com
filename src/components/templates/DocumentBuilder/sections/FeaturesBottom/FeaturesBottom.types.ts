export interface IFeatures {
    block: {
        /**The block title */
        heading: string;
        /**The block subtitle */
        textArr: {
            text: string;
            textLink?: {url: string; target: "_blank" | "_self"};
        }[];
        /**The link */
        link: {text: string[]; type: string; url?: string;};
    }[]
}