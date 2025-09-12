import { IGettingStarted } from "../GettingStarted.types";

export const items: IGettingStarted = {
    title: "GettingStarted",
    text: [
        {
            heading: "DeployTheLatest",
            textLinks: [
            { url: "/download-workspace.aspx?from=private-rooms#workspace-community", isExternal: false },
            { url: "/download-workspace.aspx?from=private-rooms#workspace-enterprise", isExternal: false, },
        ],
        },
        {
            heading: "EnablePrivateRooms",
        },
        {
            heading: "InstallTheLatest",
            textLinks: [
                {url: "/download-desktop.aspx?from=private-rooms", isExternal: false},
            ]
        },
        {
            heading: "ConnectTheDesktop",
        },
        {
            heading: "GoToThePrivateRoom",
        },
    ],

    btnTitle: "ONLYOFFICEPrivateRooms",
    btnSubTitle: "ONLYOFFICEDocs",
    btnText: "Download"
}