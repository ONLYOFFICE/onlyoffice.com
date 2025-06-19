import { IFeatureSwitcher } from "@src/components/widgets/FeatureSwitcher";

type TFeatureSwitcherItem = IFeatureSwitcher["items"][number] & {
  badge?: boolean;
};

export const websiteItems: TFeatureSwitcherItem[] = [
  {
    label: "DocumentsScreen1Tab1Label",
    image: {
      url: "DocumentsScreen1Tab1ImgUrl",
      url2x: "DocumentsScreen1Tab1ImgUrl2x",
    },
  },
  {
    label: "DocumentsScreen1Tab2Label",
    image: {
      url: "DocumentsScreen1Tab2ImgUrl",
      url2x: "DocumentsScreen1Tab2ImgUrl2x",
    },
  },
  {
    label: "DocumentsScreen1Tab3Label",
    badge: true,
    image: {
      url: "DocumentsScreen1Tab3ImgUrl",
      url2x: "DocumentsScreen1Tab3ImgUrl2x",
    },
  },
  {
    label: "DocumentsScreen1Tab4Label",
    image: {
      url: "DocumentsScreen1Tab4ImgUrl",
      url2x: "DocumentsScreen1Tab4ImgUrl2x",
    },
  },
];

export const accountItems: IFeatureSwitcher["items"] = [
  {
    label: "DocumentsScreen2Tab1Label",
    image: {
      url: "DocumentsScreen2Tab1ImgUrl",
      url2x: "DocumentsScreen2Tab1ImgUrl2x",
    },
  },
  {
    label: "DocumentsScreen2Tab2Label",
    image: {
      url: "DocumentsScreen2Tab2ImgUrl",
      url2x: "DocumentsScreen2Tab2ImgUrl2x",
    },
  },
  {
    label: "DocumentsScreen2Tab3Label",
    image: {
      url: "DocumentsScreen2Tab3ImgUrl",
      url2x: "DocumentsScreen2Tab3ImgUrl2x",
    },
  },
  {
    label: "DocumentsScreen2Tab4Label",
    image: {
      url: "DocumentsScreen2Tab4ImgUrl",
      url2x: "DocumentsScreen2Tab4ImgUrl2x",
    },
  },
];
