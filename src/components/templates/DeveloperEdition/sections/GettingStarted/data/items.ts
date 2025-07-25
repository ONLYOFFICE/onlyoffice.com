interface IItems {
    title: string;
    text: string;
    icon: string;
    color?: string;
    link: string;
    isExternal?: boolean;
}
export const items: IItems[] = [
    {
        title: "SelfHostedTitle",
        text: "SelfHostedDescription",
        icon: "/images/templates/developer-edition/getting-started/self-hosted.svg",
        link: "/download-developer?from=onlyoffice-integration&plan=5#docs-developer"
    },
    {
        title: "AmiTitle",
        text: "AmiDescription",
        icon: "/images/templates/developer-edition/getting-started/ami.svg",
        color: "#F39D39",
        link: "https://aws.amazon.com/marketplace/seller-profile?id=b2557f65-4b3a-4b0e-a96a-d9a9d3b45b60&ref=dtl_B07ZQHPPWN",
        isExternal: true
    },
    {
        title: "AlibabaTitle",
        text: "AlibabaDescription",
        icon: "/images/templates/developer-edition/getting-started/alibaba-cloud.svg",
        link: "https://marketplace.alibabacloud.com/store/3246121.html",
        isExternal: true
    }
]