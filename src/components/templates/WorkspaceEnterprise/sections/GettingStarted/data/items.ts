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
        title: "SelfHosted",
        text: "SelfHostedText",
        color: "#F5F5F5",
        icon: getAssetUrl("/images/templates/workspace-enterprise/getting-started/selfhosted.svg"),
        link: "/download-workspace",
    },
    {
        title: "AMI",
        text: "AMIText",
        color: "AMIColor",
        icon: "AMIIcon",
        link: "AMILink",
        isExternal: true
    },
    {
        title: "OVH",
        text: "OVHText",
        icon: getAssetUrl("/images/templates/workspace-enterprise/getting-started/ovh.svg"),
        color: "#000e9c",
        link: "OVHLink",
        isExternal: true
    }
]