import { IFeatureImageItem } from "@src/components/widgets/FeatureImageItem";

interface IFeatureImageItemExtended extends IFeatureImageItem {
  textLinks?: { href: string; isExternal?: boolean }[];
}

export const items: IFeatureImageItemExtended[] = [
  {
    heading: "FillableAssignments",
    text: "FillableAssignmentsDesc",
    textLinks: [
      {
        href: "/form-filling-rooms",
      },
    ],
    image: {
      url: "FillableAssignmentsImgUrl",
      url2x: "FillableAssignmentsImgUrl2x",
      height: 530,
    },
  },
  {
    heading: "EasySharing",
    text: "EasySharingDesc",
    textLinks: [
      {
        href: "/public-rooms",
      },
    ],
    image: {
      url: "EasySharingImgUrl",
      url2x: "EasySharingImgUrl2x",
      height: 580,
    },
  },
  {
    heading: "AnotherTaskInMind",
    text: "AnotherTaskInMindDesc",
    textLinks: [
      {
        href: "/collaboration-rooms",
      },
      {
        href: "/custom-rooms",
      },
      {
        href: "/office-for-zoom",
      },
    ],
    image: {
      url: "AnotherTaskInMindImgUrl",
      url2x: "AnotherTaskInMindImgUrl2x",
      height: 540,
    },
  },
  {
    heading: "FlexiblePermissionsAndRoles",
    text: "FlexiblePermissionsAndRolesDesc",
    image: {
      url: "FlexiblePermissionsAndRolesImgUrl",
      url2x: "FlexiblePermissionsAndRolesImgUrl2x",
      height: 560,
    },
  },
];
