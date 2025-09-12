import { getAssetUrl } from "@utils/getAssetUrl";
export interface IFeaturedIn {
    src: string;
    link: string;
    positionX?: string;
}

export const items: IFeaturedIn[] = [
    {
        src: getAssetUrl("/images/templates/desktop/awards/awards.png"),
        positionX: "6.5%",
        link: "https://www.softpedia.com/get/Office-tools/Office-suites/ONLYOFFICE.shtml",
    },
    {
        src: getAssetUrl("/images/templates/desktop/awards/awards.png"),
        positionX: "22.9%",
        link: "http://onlyoffice.findmysoft.com/",
    },
    {
        src: getAssetUrl("/images/templates/desktop/awards/awards.png"),
        positionX: "79.28%",
        link: "http://taimienphi.vn/download-onlyoffice-desktop-editor-for-mac-71348",
    },
    {
        src: getAssetUrl("/images/templates/desktop/awards/awards.png"),
        positionX: "35.28%",
        link: "https://www.chip.de/downloads/Onlyoffice-Desktop_102466083.html",
    },
    {
        src: getAssetUrl("/images/templates/desktop/featured/5th.png"),
        link: "https://onlyoffice-desktop-editors.en.softonic.com/",
    },
    {
        src: getAssetUrl("/images/templates/desktop/featured/6th.png"),
        link: "https://onlyoffice-desktop-editors.software.informer.com/awards/#av_clean",
    },
]
    