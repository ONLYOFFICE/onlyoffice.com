import { IFeatureImageItem } from "@src/components/widgets/FeatureImageItem";

export const items: IFeatureImageItem[] = [
  {
    heading: "Feature1Title",
    text: "Feature1Desc",
    image: {
      url: "Feature1ImgUrl",
      url2x: "Feature1ImgUrl2x",
      height: 420,
    },
  },
  {
    heading: "Feature2Title",
    text: "Feature2Desc",
    links: [{ label: "LearnMore", href: "/presentation-editor/transition-effects" }],
    image: {
      url: "Feature2ImgUrl",
      url2x: "Feature2ImgUrl2x",
      height: 440,
    },
  },
  {
    heading: "Feature3Title",
    text: "Feature3Desc",
    links: [{ label: "GoToTheTemplateLibrary", href: "https://templates.onlyoffice.com/presentation-templates", isExternal: true }],
    image: {
      url: "Feature3ImgUrl",
      url2x: "Feature3ImgUrl2x",
      height: 440,
    },
  },
  {
    heading: "Feature4Title",
    text: "Feature4Desc",
    image: {
      url: "Feature4ImgUrl",
      url2x: "Feature4ImgUrl2x",
      height: 440,
    },
  },
  {
    heading: "Feature5Title",
    text: "Feature5Desc",
    links: [{ label: "LearnMore", href: "/document-editor/text-analysis-and-word-count" }],
    image: {
      url: "Feature5ImgUrl",
      url2x: "Feature5ImgUrl2x",
      height: 440,
    },
  },
  {
    heading: "Feature6Title",
    text: "Feature6Desc",
    links: [{ label: "WatchHowItWorks", href: "#" }, { label: "LearnMore", href: "/document-editor/collaborate-on-word-documents" }],
    image: {
      url: "Feature6ImgUrl",
      url2x: "Feature6ImgUrl2x",
      height: 440,
    },
  },
  {
    heading: "Feature7Title",
    text: "Feature7Desc",
    links: [{ label: "WatchHowItWorks", href: "#" }, { label: "LearnMore", href: "https://helpcenter.onlyoffice.com/docs/userguides/presentation_editor", isExternal: true }],
    image: {
      url: "Feature7ImgUrl",
      url2x: "Feature7ImgUrl2x",
      height: 440,
    },
  },
];
