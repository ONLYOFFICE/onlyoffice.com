export interface IFeatures {
    block: {
        /**The block title */
        heading: string;
        /**The block subtitle */
        textArr: string[];
        /**The link */
        link: {label: string; url: string, type: string};
    }[]
}