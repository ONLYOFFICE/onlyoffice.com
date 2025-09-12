import { getAssetUrl } from "@utils/getAssetUrl";
interface IItems {
    title: string;
    text: string;
    icon: string;
    color: string;
    link: string;
    isExternal?: boolean;
}
export const items: IItems[] = [
    {
        title: "ChoicesTitle1",
        text: "ChoicesText1",
        color: "#1B406D",
        icon: getAssetUrl("/images/templates/docs-enterprise/getting-started/onlyoffice.svg"),
        link: "/docs-registration",
    },
    {
        title: "ChoicesTitle2",
        text: "ChoicesText2",
        color: "#F5F5F5",
        icon: getAssetUrl("/images/templates/docs-enterprise/getting-started/self-hosted.svg"),
        link: "download#docs-enterprise"
    },
    {
        title: "ChoicesTitle3",
        text: "ChoicesText3",
        icon: "ChoicesImage3",
        color: "ChoicesColor3",
        link: "ChoicesLink3",
        isExternal: true
    }
]