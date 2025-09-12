import { IFeatureSwitcher } from "@src/components/widgets/FeatureSwitcher";
import { getAssetUrl } from "@utils/getAssetUrl";

export const items: IFeatureSwitcher["items"] = [
  {
    label: "ShareYourDocs",
    image: {
      url: getAssetUrl("/images/templates/main/collaboration/share.png"),
      url2x: getAssetUrl("/images/templates/main/collaboration/share@2x.png"),
    },
  },
  {
    label: "MakeUseOfCharacterAndParagraphLevel",
    image: {
      url: getAssetUrl("/images/templates/main/collaboration/modes.png"),
      url2x: getAssetUrl("/images/templates/main/collaboration/modes@2x.png"),
    },
  },
  {
    label: "CompareAndReviewDocsAndTrackChanges",
    image: {
      url: getAssetUrl("/images/templates/main/collaboration/changes.png"),
      url2x: getAssetUrl("/images/templates/main/collaboration/changes@2x.png"),
    },
  },
  {
    label: "LeaveCommentsAndMentions",
    image: {
      url: getAssetUrl("/images/templates/main/collaboration/leave.png"),
      url2x: getAssetUrl("/images/templates/main/collaboration/leave@2x.png"),
    },
  },
  {
    label: "CommunicateViaBuiltInChatOrTelegram",
    image: {
      url: getAssetUrl("/images/templates/main/collaboration/communicate.png"),
      url2x: getAssetUrl("/images/templates/main/collaboration/communicate@2x.png"),
    },
  },
  {
    label: "MakeAudioAndVideoCalls",
    image: {
      url: getAssetUrl("/images/templates/main/collaboration/call.png"),
      url2x: getAssetUrl("/images/templates/main/collaboration/call@2x.png"),
    },
  },
];
