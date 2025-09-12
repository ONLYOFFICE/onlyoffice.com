export interface ICarouselItems {
  id: string;
  title: string;
  iconUrl: string;
  description: string;
  image: {
    url: string;
    url2x: string;
  };
  linkLabel: string;
  href: string;
}

export const carouselItems: ICarouselItems[] = [
  {
    id: "document",
    title: "ToolsTabItem1",
    iconUrl: "/images/templates/docs-enterprise/tools/document.svg",
    description: "ToolsTabDescription1",
    image: {
      url: "SliderScreen1Url",
      url2x: "SliderScreen1Url2x",
    },
    linkLabel: "LearnMore",
    href: "/document-editor",
  },
  {
    id: "spreadsheet",
    title: "ToolsTabItem2",
    description: "ToolsTabDescription2",
    iconUrl: "/images/templates/docs-enterprise/tools/spreadsheet.svg",
    image: {
      url: "SliderScreen2Url",
      url2x: "SliderScreen2Url2x",
    },
    linkLabel: "LearnMore",
    href: "/spreadsheet-editor",
  },
  {
    id: "presentation",
    title: "ToolsTabItem3",
    description: "ToolsTabDescription3",
    iconUrl: "/images/templates/docs-enterprise/tools/presentation.svg",
    image: {
      url: "SliderScreen3Url",
      url2x: "SliderScreen3Url2x",
    },
    linkLabel: "LearnMore",
    href: "/presentation-editor",
  },
  {
    id: "fillable",
    title: "ToolsTabItem4",
    description: "ToolsTabDescription4",
    iconUrl: "/images/templates/docs-enterprise/tools/pdf-form.svg",
    image: {
      url: "SliderScreen4Url",
      url2x: "SliderScreen4Url2x",
    },
    linkLabel: "LearnMore",
    href: "/form-creator",
  },
  {
    id: "pdf",
    title: "ToolsTabItem5",
    description: "ToolsTabDescription5",
    iconUrl: "/images/templates/docs-enterprise/tools/pdf-editing.svg",
    image: {
      url: "SliderScreen5Url",
      url2x: "SliderScreen5Url2x",
    },
    linkLabel: "LearnMore",
    href: "/pdf-editor",
  },
  {
    id: "seamless",
    title: "ToolsTabItem6",
    description: "ToolsTabDescription6",
    iconUrl: "/images/templates/docs-enterprise/tools/seamless-collaboration.svg",
    image: {
      url: "SliderScreen6Url",
      url2x: "SliderScreen6Url2x",
    },
    linkLabel: "LearnMore",
    href: "/seamless-collaboration",
  },
  {
    id: "assistant",
    title: "ToolsTabItem7",
    description: "ToolsTabDescription7",
    iconUrl: "/images/templates/docs-enterprise/tools/ai-assistant.svg",
    image: {
      url: "SliderScreen7Url",
      url2x: "SliderScreen7Url2x",
    },
    linkLabel: "LearnMore",
    href: "/app-directory/openai",
  },
];
  