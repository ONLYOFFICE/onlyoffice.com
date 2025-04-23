interface ItemGroup {
  title: string;
  positionX: number;
  items: Array<{ text: string }>;
}

interface Column {
  groups: ItemGroup[];
}

interface TabItem {
  id: string;
  title: string;
  items: Column[];
  positionHeader: number;
}

export const items: TabItem[] = [
  {
    id: "1",
    title: "Triggers",
    items: [
      {
        groups: [
          {
            title: "File",
            positionX: -125,
            items: [
              { text: "FileCreated" },
              { text: "FileDeleted" },
              { text: "FileCreatedInMyDocuments" },
              { text: "FileDeletedFromMyDocuments" },
            ],
          },
        ],

      },
      {
        groups: [
          {
            title: "Folder",
            positionX: -181,
            items: [
              { text: "FolderCreated" },
              { text: "FolderDeleted" },
              { text: "FolderCreatedInMyDocuments" },
              { text: "FolderDeletedFromMyDocuments" },
            ],
          },
        ],
      },
      {
        groups: [
          {
            title: "Room",
            positionX: -236,
            items: [{ text: "RoomCreated" }, { text: "RoomArchived" }],
          },
        ],
      },
      {
        groups: [
          {
            title: "User",
            positionX: -348,
            items: [{ text: "UserAdded" }, { text: "UserJoined" }],
          },
        ],
      },
    ],
    positionHeader: -15,
  },
  {
    id: "2",
    title: "Actions",
    items: [
      {
        groups: [
          {
            title: "Upload",
            positionX: -294,
            items: [
              { text: "UploadFileToMyDocuments" },
              { text: "UploadFile" },
            ],
          },
          {
            title: "Create",
            positionX: -572,
            items: [
              { text: "CreateFileInMyDocuments" },
              { text: "CreateFolderInMyDocuments" },
              { text: "CreateFile" },
              { text: "CreateFolder" },
              { text: "CreateRoom" },
            ],
          },
        ],
      },
      {
        groups: [
          {
            title: "Delete",
            positionX: -404,
            items: [
              { text: "DeleteFolderFromMyDocuments" },
              { text: "DeleteFolder" },
            ],
          },
          {
            title: "Share",
            positionX: -628,
            items: [{ text: "InviteUser" }, { text: "ShareRoom" }],
          },
        ],
      },
      {
        groups: [
          {
            title: "Search",
            positionX: -518,
            items: [
              { text: "SearchFile" },
              { text: "SearchFolder" },
              { text: "SearchRoom" },
            ],
          },
          {
            title: "Other",
            positionX: -460,
            items: [
              { text: "ArchiveRoom" },
              { text: "DownloadFile" },
              { text: "GetExternalLink" },
            ],
          },
        ],
      },
    ],
    positionHeader: -15,
  },
];
