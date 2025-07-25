export interface IButtons {
    positionX: string;
    link: string;
    title?: string;
    isExternal?: boolean;
    width?: string;
}

export const items: IButtons[] = [
    {
        positionX: "4px",
        link: "/download-desktop",
        title: "windows",
    },
    {
        positionX: "-30px",
        link: "/download-desktop",
        title: "linux",
    },
    {
        positionX: "-61px",
        link: "/download-desktop",
        title: "mac",
    },
    {
        positionX: "-364px",
        link: "https://snapcraft.io/onlyoffice-desktopeditors",
        width: "130px",
        isExternal: true
    },
]
    