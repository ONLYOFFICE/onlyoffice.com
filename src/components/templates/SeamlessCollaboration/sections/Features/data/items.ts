import { IEditorsItem } from "@src/components/modules/editors/EditorsFeatures/sub-components/EditorsImageItem/EditorsImageItem.types";
import { IEditorsTab } from "@src/components/modules/editors/EditorsTabs/EditorsTabs.types";

export const items: IEditorsItem[] = [
  {
    id: "share",
    heading: "Feature1Title",
    text: "Feature1Desc",
    image: {
      url: "Feature1ImgUrl",
      url2x: "Feature1ImgUrl2x",
      height: 500,
    },
  },
  {
    id: "coedit",
    heading: "Feature2Title",
    text: "Feature2Desc",
    image: {
      url: "Feature2ImgUrl",
      url2x: "Feature2ImgUrl2x",
      height: 500,
    },
  },
  {
    id: "comment",
    heading: "Feature3Title",
    text: "Feature3Desc",
    image: {
      url: "Feature3ImgUrl",
      url2x: "Feature3ImgUrl2x",
      height: 500,
    },
  },
  {
    id: "communicate",
    heading: "Feature4Title",
    text: "Feature4Desc",
    image: {
      url: "Feature4ImgUrl",
      url2x: "Feature4ImgUrl2x",
      height: 500,
    },
  },
  {
    id: "track-changes",
    heading: "Feature5Title",
    text: "Feature5Desc",
    image: {
      url: "Feature5ImgUrl",
      url2x: "Feature5ImgUrl2x",
      height: 500,
    },
  },
  {
    id: "compare-combine",
    heading: "Feature6Title",
    text: "Feature6Desc",
    image: {
      url: "Feature6ImgUrl",
      url2x: "Feature6ImgUrl2x",
      height: 500,
    },
  },
  {
    id: "manage-versions",
    heading: "Feature7Title",
    text: "Feature7Desc",
    image: {
      url: "Feature7ImgUrl",
      url2x: "Feature7ImgUrl2x",
      height: 500,
    },
  },
];

export const tabs: IEditorsTab[] = [
    {
      id: "share-link",
      url: "#share",
      label: "SwitcherTitle1",
    },
    {
      id: "coedit-link",
      url: "#coedit",
      label: "SwitcherTitle2",
    },
    {
      id: "comment-link",
      url: "#comment",
      label: "SwitcherTitle3",
    },
    {
      id: "communicate-link",
      url: "#communicate",
      label: "SwitcherTitle4",
    },
    {
      id: "track-changes-link",
      url: "#track-changes",
      label: "SwitcherTitle5",
    },
    {
      id: "compare-combine-link",
      url: "#compare-combine",
      label: "SwitcherTitle6",
    },
    {
      id: "manage-versions-link",
      url: "#manage-versions",
      label: "SwitcherTitle7",
    },
  ];