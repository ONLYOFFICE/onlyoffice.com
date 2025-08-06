import { ICollapse } from "@src/components/ui/CollapseGroup/Collapse";

interface ICollapseExtended extends ICollapse {
  links?: { href: string; isExternal?: boolean }[];
}

export const items: ICollapseExtended[] = [
  {
    label: "WhatAreTheScenarios",
    children: "PrivateRoomsAreTheSpace",
  },
  {
    label: "WhatIsEncrypted",
    children: "PrivateRoomsMechanics",
  },
  {
    label: "DoesEachUserHave",
    children: "EachUserHasAPersonal",
  },
  {
    label: "HowAreTheFile",
    children: "TheEncryptionKeys",
  },
  {
    label: "HowAreTheEncryption",
    children: "WhenYouShareAFile",
  },
  {
    label: "IsThereAMaster",
    children: "WeDoNotUseMaster",
  },
];
