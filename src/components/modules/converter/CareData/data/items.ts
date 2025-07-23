import { ICareDataItem } from "../CareData.types";

const spriteUrl = "/images/modules/converter/care-data/icons.svg";

export const items: ICareDataItem[] = [
  {
    image: {
      url: spriteUrl,
    },
    text: "AllDocumentsYouUploadAreEncrypted",
  },
  {
    image: {
      url: spriteUrl,
      positionX: "-120px",
    },
    text: "WeDoNotTrackOrRequest",
  },
  {
    image: {
      url: spriteUrl,
      positionX: "-240px",
    },
    text: "YourDocumentsAreNotStoredOnTheServer",
  },
  {
    image: {
      url: spriteUrl,
      positionX: "-360px",
    },
    text: "WeGuaranteeTransparencyOfFileProcessing",
  },
];
