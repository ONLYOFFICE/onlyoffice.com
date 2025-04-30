import { IFeatureSwitcher } from "@src/components/widgets/FeatureSwitcher";

type TFeatureSwitcherItem = IFeatureSwitcher["items"][number] & {
  badge?: boolean;
};

export const websiteItems: TFeatureSwitcherItem[] = [
  {
    label: "DocspaceAppTab1Label",
    image: {
      url: "DocspaceAppTab1ImgUrl",
      url2x: "DocspaceAppTab1ImgUrl2x",
    },
  },
  {
    label: "DocspaceAppTab2Label",
    image: {
      url: "DocspaceAppTab2ImgUrl",
      url2x: "DocspaceAppTab2ImgUrl2x",
    },
  },
  {
    label: "DocspaceAppTab3Label",
    badge: true,
    image: {
      url: "DocspaceAppTab3ImgUrl",
      url2x: "DocspaceAppTab3ImgUrl2x",
    },
  },
  {
    label: "DocspaceAppTab4Label",
    image: {
      url: "DocspaceAppTab4ImgUrl",
      url2x: "DocspaceAppTab4ImgUrl2x",
    },
  },
];

export const accountItems: IFeatureSwitcher["items"] = [
  {
    label: "DocspaceAppScreen2Tab1Label",
    image: {
      url: "DocspaceAppScreen2Tab1ImgUrl",
      url2x: "DocspaceAppScreen2Tab1ImgUrl2x",
    },
  },
  {
    label: "DocspaceAppScreen2Tab2Label",
    image: {
      url: "DocspaceAppScreen2Tab2ImgUrl",
      url2x: "DocspaceAppScreen2Tab2ImgUrl2x",
    },
  },
  {
    label: "DocspaceAppScreen2Tab3Label",
    image: {
      url: "DocspaceAppScreen2Tab3ImgUrl",
      url2x: "DocspaceAppScreen2Tab3ImgUrl2x",
    },
  },
  {
    label: "DocspaceAppScreen2Tab4Label",
    image: {
      url: "DocspaceAppScreen2Tab4ImgUrl",
      url2x: "DocspaceAppScreen2Tab4ImgUrl2x",
    },
  },
];
