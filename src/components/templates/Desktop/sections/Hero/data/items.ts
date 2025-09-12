import { getAssetUrl } from "@utils/getAssetUrl";
export interface IAwards {
    imgUrl?: string;
    positionX?: string;
    link: string;
    isExternal?: boolean;
    width: number;
}

export const awards: IAwards[] = [
    {
        positionX: "-375px",
        link: "https://www.softpedia.com/get/Office-tools/Office-suites/ONLYOFFICE.shtml",
        width: 128,
        isExternal: true
    },
    {
        positionX: "-564px",
        link: "/download-desktop",
        width: 128,
    },
    {
        imgUrl: getAssetUrl("/images/templates/desktop/awards/desktop-clean-medal-2023.png"),
        link: "https://software.informer.com/awards/accfe5c89dcad434170790bab8fea7d6/",
        width: 138,
        isExternal: true
    },
    {
        imgUrl: getAssetUrl("/images/templates/desktop/awards/downzen-medal.png"),
        link: "https://downzen.com/en/windows/onlyoffice-desktop-editors/",
        width: 138,
        isExternal: true
    }
]
    