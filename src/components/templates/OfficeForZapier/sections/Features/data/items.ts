export const items = [
  {
    heading: "Triggers",
    items: [
      {
        heading: "File",
        iconPositionX: -125,
        items: [
          "FileCreated",
          "FileDeleted",
          "FileCreatedInMyDocuments",
          "FileDeletedFromMyDocuments",
        ],
      },
      {
        heading: "Folder",
        iconPositionX: -181,
        items: [
          "FolderCreated",
          "FolderDeleted",
          "FolderCreatedInMyDocuments",
          "FolderDeletedFromMyDocuments",
        ],
      },
      {
        heading: "Room",
        iconPositionX: -236,
        items: ["RoomCreated", "RoomArchived"],
      },
      {
        heading: "User",
        iconPositionX: -348,
        items: ["UserAdded", "UserJoined"],
      },
    ],
  },
  {
    heading: "Actions",
    items: [
      {
        heading: "Upload",
        iconPositionX: -294,
        items: ["UploadFileToMyDocuments", "UploadFile"],
      },
      {
        heading: "Delete",
        iconPositionX: -404,
        items: ["DeleteFolderFromMyDocuments", "DeleteFolder"],
      },
      {
        heading: "Search",
        iconPositionX: -518,
        items: ["SearchFile", "SearchFolder"],
      },
      {
        heading: "Create",
        iconPositionX: -572,
        items: [
          "CreateFileInMyDocuments",
          "CreateFolderInMyDocuments",
          "CreateFile",
          "CreateFolder",
          "CreateRoom",
        ],
      },

      {
        heading: "Share",
        iconPositionX: -628,
        items: ["InviteUser", "ShareRoom"],
      },

      {
        heading: "Other",
        iconPositionX: -460,
        items: ["ArchiveRoom", "DownloadFile", "GetExternalLink"],
      },
    ],
  },
];
