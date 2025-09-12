import { getAssetUrl } from "@utils/getAssetUrl";
export const items = [
  {
    items: [
      {
        connectorsHeading: "Embedding",
        connectorsSubheading: "EmbeddingSub",
        items: ["EmbeddingFeature1", "EmbeddingFeature2", "EmbeddingFeature3"],
        textWithLinks: [
          {
            label: "EmbeddingFeature3",
            links: [
              {
                href: "https://example.com/integration",
                label: "integration",
                isExternal: true,
              },
            ],
          },
        ],
        image: {
          url: "EmbeddingImgUrl",
        },
        links: [
          {
            href: "https://api.onlyoffice.com/docspace/",
            label: "ReadDocumentation",
            isExternal: true,
            isPrimary: true,
          },
          {
            href: "mailto:sales@onlyoffice.com?subject=ONLYOFFICE%20DocSpace%20for%20integration",
            label: "SubmitRequest",
            isExternal: false,
            isPrimary: true,
          },
        ],
        connectorsItems: [
          {
            image: {
              url: getAssetUrl("/images/templates/for-developers/features/icons.svg"),
              width: 56,
              height: 56,
              positionX: "0px",
            },
            label: "CollaborationRooms",
          },
          {
            image: {
              url: getAssetUrl("/images/templates/for-developers/features/icons.svg"),
              width: 56,
              height: 56,
              positionX: "-72px",
            },
            label: "PublicRooms",
          },
          {
            image: {
              url: getAssetUrl("/images/templates/for-developers/features/icons.svg"),
              width: 56,
              height: 56,
              positionX: "-144px",
            },
            label: "FormFillingRooms",
          },
          {
            image: {
              url: getAssetUrl("/images/templates/for-developers/features/icons.svg"),
              width: 56,
              height: 56,
              positionX: "-216px",
            },
            label: "VirtualDataRooms",
          },
          {
            image: {
              url: getAssetUrl("/images/templates/for-developers/features/icons.svg"),
              width: 56,
              height: 56,
              positionX: "-288px",
            },
            label: "CustomRooms",
          },
        ],
      },
      {
        connectorsHeading: "OnlineDocument",
        connectorsSubheading: "OnlineDocumentSub",
        items: [
          "OnlineDocumentFeature1",
          "OnlineDocumentFeature2",
          "OnlineDocumentFeature3",
        ],
        image: {
          url: "OnlineDocumentImgUrl",
        },
        textWithLinks: [
          {
            label: "OnlineDocumentFeature1",
            links: [
              {
                href: "https://api.onlyoffice.com/docs/docs-api/get-started/basic-concepts/",
                label: "API",
                isExternal: true,
              },
            ],
          },
          {
            label: "OnlineDocumentFeature1",
            links: [
              {
                href: "https://api.onlyoffice.com/docs/docs-api/using-wopi/overview/",
                label: "WOPI",
                isExternal: true,
              },
            ],
          },
          {
            label: "OnlineDocumentFeature2",
            links: [
              {
                href: "/all-connectors",
                label: "connectors",
                isExternal: false,
              },
            ],
          },
        ],
        links: [
          {
            href: "/developer-edition",
            label: "LearnMore",
            isExternal: false,
            isPrimary: true,
          },
          {
            href: "https://api.onlyoffice.com/docs/docs-api/get-started/basic-concepts/",
            label: "ReadDocumentation",
            isExternal: true,
            isPrimary: true,
          },
        ],
        connectorsItems: [
          {
            image: {
              url: getAssetUrl("/images/templates/for-developers/features/icons.svg"),
              width: 56,
              height: 56,
              positionX: "-360px",
            },
            label: "Docs",
          },
          {
            image: {
              url: getAssetUrl("/images/templates/for-developers/features/icon_sheets.svg"),
              width: 56,
              height: 56,
              positionX: "0px",
            },
            label: "Sheets",
          },
          {
            image: {
              url: getAssetUrl("/images/templates/for-developers/features/icons.svg"),
              width: 56,
              height: 56,
              positionX: "-433px",
            },
            label: "Slides",
          },
          {
            image: {
              url: getAssetUrl("/images/templates/for-developers/features/icons.svg"),
              width: 56,
              height: 56,
              positionX: "-506px",
            },
            label: "Forms",
          },
          {
            image: {
              url: getAssetUrl("/images/templates/for-developers/features/icons.svg"),
              width: 56,
              height: 56,
              positionX: "-579px",
            },
            label: "PDFs",
          },
        ],
      },
      {
        connectorsHeading: "Generate",
        connectorsSubheading: "GenerateSub",
        items: ["GenerateFeature1", "GenerateFeature2", "GenerateFeature3"],
        image: {
          url: "GenerateImgUrl",
          url2x: "GenerateImgUrl",
        },
        links: [
          {
            href: "/document-builder",
            label: "LearnMore",
            isExternal: false,
            isPrimary: true,
          },
          {
            href: "https://api.onlyoffice.com/docs/document-builder/get-started/overview/",
            label: "ReadDocumentation",
            isExternal: true,
            isPrimary: true,
          },
        ],
      },
    ],
  },
];
