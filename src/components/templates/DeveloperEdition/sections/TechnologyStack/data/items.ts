export interface ISectionItem {
    type: "info" | "grid";
    positionX?: number;
    title?: string;
    text?: string;
    buttonLabel?: string;
    buttonLink?: string;
    isExternal?: boolean;
    gridItems?: {
      positionX: number;
      link?: string;
      name: string;
      width?: number;
    }[];
  }
  
  export const items: ISectionItem[] = [
    {
      type: "info",
      positionX: 0,
      title: "LanguageTitle",
      text: "LanguageDescription",
      buttonLabel: "ExploreDocs",
      buttonLink: "https://api.onlyoffice.com/docs/docs-api/samples/language-specific-examples/",
      isExternal: true,
    },
    {
      type: "grid",
      gridItems: [
        { positionX: 0, link: "https://api.onlyoffice.com/docs/docs-api/get-started/language-specific-examples/net-example/", name: ".Net (C#)" },
        { positionX: -98, link: "https://api.onlyoffice.com/docs/docs-api/get-started/language-specific-examples/java-example/", name: "Java" },
        { positionX: -194, link: "https://api.onlyoffice.com/docs/docs-api/get-started/language-specific-examples/java-spring-example/", name: "Java Spring" },
        { positionX: -1008, name: "Golang", width: 72 },
        { positionX: -292, link: "https://api.onlyoffice.com/docs/docs-api/get-started/language-specific-examples/nodejs-example/", name: "Node.js", width: 82 },
        { positionX: -412, link: "https://api.onlyoffice.com/docs/docs-api/get-started/language-specific-examples/python-example/", name: "Python" },
        { positionX: -510, link: "https://api.onlyoffice.com/docs/docs-api/get-started/language-specific-examples/ruby-example/", name: "Ruby" },
        { positionX: -606, link: "https://api.onlyoffice.com/docs/docs-api/get-started/language-specific-examples/php-example/", name: "PHP", width: 72 },
        { positionX: -714, link: "https://api.onlyoffice.com/docs/docs-api/get-started/frontend-frameworks/angular/", name: "Angular" },
        { positionX: -814, link: "https://api.onlyoffice.com/docs/docs-api/get-started/frontend-frameworks/react/", name: "React" },
        { positionX: -911, link: "https://api.onlyoffice.com/docs/docs-api/get-started/frontend-frameworks/vue/", name: "Vue" },
        { positionX: -1117, name: "Laravel" },
      ],
    },
    {
      type: "info",
      positionX: -88,
      title: "ModelTitle",
      text: "ModelDescription",
      buttonLabel: "TryNow",
      buttonLink: "/download-developer?from=downloadintegrationmenu#docs-developer",
    },
    {
      type: "info",
      positionX: -176,
      title: "UsesTitle",
      text: "UsesDescription",
      buttonLabel: "ExploreIntegrations",
      buttonLink: "/all-connectors",
    },
  ];
  