import { IFeatureImageItem } from "@src/components/widgets/FeatureImageItem";

export const items: IFeatureImageItem[] = [
  {
    title: "FillableAssignments",
    text: "FillableAssignmentsDesc",
    links: [
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
    title: "EasySharing",
    text: "EasySharingDesc",
    links: [
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
    title: "AnotherTaskInMind",
    text: "AnotherTaskInMindDesc",
    links: [
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
    title: "FlexiblePermissionsAndRoles",
    text: "FlexiblePermissionsAndRolesDesc",
    image: {
      url: "FlexiblePermissionsAndRolesImgUrl",
      url2x: "FlexiblePermissionsAndRolesImgUrl2x",
      height: 560,
    },
  },
];
