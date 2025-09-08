import { IHowItWorks, IHowItWorksAdaptive } from "../PrivateBlock.types";

export const items_first: IHowItWorks[] = [
  {
    text: [
      ["CreateAndUpload", "CopyFiles"],
      ["BrowseYourProtected", "MoveFilesShared"],
      ["CreateFolders", "MoveFilesToBin"],
      ["MoveYourFiles", "UploadFolders"],
      ["DeleteFiles", "OverwriteFiles"],
      ["ShareFilesWithUsersWho", "RestoreFileVersions"],
      ["CoEditFiles", "ShareFilesWithUsersWithout"],
    ]
  }
]

export const items_second: IHowItWorksAdaptive[] = [
  {
    text: [
      ["CreateAndUpload"],
      ["BrowseYourProtected"],
      ["CreateFolders"],
      ["MoveYourFiles"],
      ["DeleteFiles"],
      ["ShareFilesWithUsersWho"],
      ["CoEditFiles"],
    ],
    textSec: [
      ["CopyFiles"],
      ["MoveFilesShared"],
      ["MoveFilesToBin"],
      ["UploadFolders"],
      ["OverwriteFiles"],
      ["RestoreFileVersions"],
      ["ShareFilesWithUsersWithout"],
    ]
  }
]