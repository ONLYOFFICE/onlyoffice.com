import { IFeatureImageItem } from "@src/components/widgets/FeatureImageItem";

import { getAssetUrl } from "@utils/getAssetUrl";
interface IFeatureImageItemExtended extends IFeatureImageItem {
  textLinks?: { href: string; isExternal?: boolean }[];
  text: string[];
}

export const items: IFeatureImageItemExtended[] = [
  {
    heading: "GettingEncryption",
    text: [
      "UponTheFirstLogin",
      "ThePrivateKeyIsEncrypted",
    ],
    image: {
      url: getAssetUrl("/images/templates/private-rooms/how-it-works/key.svg"),
      height: 100,
      width: 448
    },
  },
  {
    heading: "EncryptingDocuments",
    text: [
      "AtTheMoment",
      "AfterAUserPlaces",
      "ThisPasswordIsThenEncrypted",
      "ThePairOfPasswords",
      "TheResultingFile",
      "WhenAccessing",
    ],
    image: {
      url: getAssetUrl("/images/templates/private-rooms/how-it-works/encrypting.svg"),
      height: 375,
      width: 336
    },
  },
  {
    heading: "SharingAndCollaborating",
    text: [
      "WhenAUserShares",
      "InCoEditing",
    ],
    image: {
      url: getAssetUrl("/images/templates/private-rooms/how-it-works/sharing.svg"),
      height: 170,
      width: 412
    },
  },
];