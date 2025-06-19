import { IEditorsItem } from "@src/components/modules/editors/EditorsFeatures/sub-components/EditorsImageItem/EditorsImageItem.types";
import { IEditorsTab } from "@src/components/modules/editors/EditorsTabs/EditorsTabs.types";

export const items: IEditorsItem[] = [
  {
    id: "read",
    heading: "Feature1Title",
    text: "Feature1Desc",
    image: {
      url: "Feature1ImgUrl",
      url2x: "Feature1ImgUrl2x",
      height: 480,
    },
  },
  {
    id: "write-format",
    heading: "Feature2Title",
    text: "Feature2Desc",
    image: {
      url: "Feature2ImgUrl",
      url2x: "Feature2ImgUrl2x",
      height: 480,
    },
  },
  {
    id: "coauthor",
    heading: "Feature3Title",
    text: "Feature3Desc",
    image: {
      url: "Feature3ImgUrl",
      url2x: "Feature3ImgUrl2x",
      height: 480,
    },
  },
  {
    id: "convert",
    heading: "Feature4Title",
    text: "Feature4Desc",
    image: {
      url: "Feature4ImgUrl",
      url2x: "Feature4ImgUrl2x",
      height: 480,
    },
  },
  {
    id: "do-more",
    heading: "Feature5Title",
    text: "Feature5Desc",
    links: [
      {
        label: "ExplorePlugins",
        href: "/app-directory",
      },
    ],
    image: {
      url: "Feature5ImgUrl",
      url2x: "Feature5ImgUrl2x",
      height: 480,
    },
  },
];

export const tabs: IEditorsTab[] = [
    {
      id: "read-link",
      url: "#read",
      label: "SwitcherTitle1",
    },
    {
      id: "write-format-link",
      url: "#write-format",
      label: "SwitcherTitle2",
    },
    {
      id: "coauthor-link",
      url: "#coauthor",
      label: "SwitcherTitle3",
    },
    {
      id: "convert-link",
      url: "#convert",
      label: "SwitcherTitle4",
    },
    {
      id: "do-more-link",
      url: "#do-more",
      label: "SwitcherTitle5",
    },
  ];