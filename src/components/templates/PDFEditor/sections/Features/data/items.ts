import { IEditorsItem } from "@src/components/modules/editors/EditorsFeatures/sub-components/EditorsImageItem/EditorsImageItem.types";
import { IEditorsTab } from "@src/components/modules/editors/EditorsTabs/EditorsTabs.types";

export const items: IEditorsItem[] = [
  {
    id: "edit",
    heading: "Feature1Title",
    text: "Feature1Desc",
    image: {
      url: "Feature1ImgUrl",
      url2x: "Feature1ImgUrl2x",
      height: 520,
    },
  },
  {
    id: "annotate",
    heading: "Feature2Title",
    text: "Feature2Desc",
    image: {
      url: "Feature2ImgUrl",
      url2x: "Feature2ImgUrl2x",
      height: 500,
    },
  },
  {
    id: "read",
    heading: "Feature3Title",
    text: "Feature3Desc",
    image: {
      url: "Feature3ImgUrl",
      url2x: "Feature3ImgUrl2x",
      height: 440,
    },
  },
  {
    id: "convert",
    heading: "Feature4Title",
    text: "Feature4Desc",
    links: [
      {
        label: "Feature4Link",
        href: "/online-document-converter",
      },
    ],
    image: {
      url: "Feature4ImgUrl",
      url2x: "Feature4ImgUrl2x",
      height: 440,
    },
  },
  {
    id: "create",
    heading: "Feature5Title",
    text: "Feature5Desc",
    links: [
      {
        label: "Feature5Link",
        href: "templatesLink",
        isExternal: true,
      },
    ],
    image: {
      url: "Feature5ImgUrl",
      url2x: "Feature5ImgUrl2x",
      height: 440,
    },
  },
  {
    id: "collaborate",
    heading: "Feature6Title",
    text: "Feature6Desc",
    image: {
      url: "Feature6ImgUrl",
      url2x: "Feature6ImgUrl2x",
      height: 540,
    },
  },
  {
    id: "do-more",
    heading: "Feature7Title",
    text: "Feature7Desc",
    links: [
      {
        label: "Feature7Link",
        href: "/app-directory",
      },
    ],
    image: {
      url: "Feature7ImgUrl",
      url2x: "Feature7ImgUrl2x",
      height: 540,
    },
  },
];

export const tabs: IEditorsTab[] = [
  {
    id: "edit-link",
    url: "#edit",
    label: "SwitcherTitle1",
  },
  {
    id: "annotate-link",
    url: "#annotate",
    label: "SwitcherTitle2",
  },
  {
    id: "read-link",
    url: "#read",
    label: "SwitcherTitle3",
  },
  {
    id: "convert-link",
    url: "#convert",
    label: "SwitcherTitle4",
  },
  {
    id: "create-link",
    url: "#create",
    label: "SwitcherTitle5",
  },
  {
    id: "collaborate-link",
    url: "#collaborate",
    label: "SwitcherTitle6",
  },
  {
    id: "do-more-link",
    url: "#do-more",
    label: "SwitcherTitle7",
  },
];
