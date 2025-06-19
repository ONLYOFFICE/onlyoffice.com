export interface IBug {
    /**The title */
    title: string;
    /**The text */
    text: {
        label: string[];
        links?: {href: string, isExternal: boolean};
    }[];
    /**The image */
    image: { url: string; url2x?: string; height?: number };
}