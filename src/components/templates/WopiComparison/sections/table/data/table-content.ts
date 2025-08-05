interface IFeaturesHead {
  name?: string;
  type?: string;
}

interface IFeaturesBody {
  items: {
    name: { text: string; commingSoon?: boolean }[];
    values: {
      name?: string;
      subtext?: string;
      outro?: string;
      item?: string[];
      link?: {
        name: string;
        link: string;
        isExternal?: boolean;
      };
    }[];
  }[];
}

interface IFeatures {
  head: IFeaturesHead[];
  body: IFeaturesBody[];
}

export const features: IFeatures = {
  head: [{}, { name: "Header1" }, { name: "Header2" }],
  body: [
    {
      items: [
        {
          name: [{ text: "Sub1" }],
          values: [
            {
              name: "Par1AHead",
              subtext: "Par1ASub",
              link: {
                name: "Par1ALink",
                link: "https://api.onlyoffice.com/docs/docs-api/get-started/basic-concepts/",
                isExternal: true
              },
            },
            {
              name: "Par1BHead",
              subtext: "Par1BSub",
              link: {
                name: "Par1BLink",
                link: "https://api.onlyoffice.com/docs/docs-api/using-wopi/overview/",
                isExternal: true
              },
            },
          ],
        },
        {
          name: [{ text: "Sub2" }],
          values: [
            {
              subtext: "Par2ASub",
              link: {
                name: "Par2ALink",
                link: "/all-connectors?from=wopi-comparison",
              },
            },
            { subtext: "Par2BSub" },
          ],
        },
        {
          name: [{ text: "Sub3" }],
          values: [
            {
              item: [
                "Item3A",
                "Item3B",
                "Item3C",
                "Item3D",
                "Item3E",
                "Item3F",
              ],
            },
            { item: ["Item3G", "Item3H", "Item3I"], outro: "Out3A" },
          ],
        },
        {
          name: [{ text: "Sub4" }],
          values: [
            {
              item: ["Item4A", "Item4B", "Item4C", "Item4D", "Item4E"],
            },
            { item: ["Item4F", "Item4G", "Item4H"], outro: "Out4A" },
          ],
        },
        {
          name: [{ text: "Sub5" }],
          values: [
            {
              item: ["Item5A", "Item5B", "Item5C"],
            },
            { outro: "Out5A" },
          ],
        },
        {
          name: [{ text: "Sub6" }],
          values: [
            {
              item: [
                "Item6A",
                "Item6B",
                "Item6C",
                "Item6D",
                "Item6E",
                "Item6F",
                "Item6G",
                "Item6H",
                "Item6I",
                "Item6J",
                "Item6K",
                "Item6L",
                "Item6M",
              ],
            },
            {
              item: [
                "Item6N",
                "Item6O",
                "Item6P",
                "Item6Q",
                "Item6R",
                "Item6S",
                "Item6T",
              ],
              outro: "Out6A",
            },
          ],
        },
        {
          name: [{ text: "Sub7" }],
          values: [
            {
              item: ["Item7A", "Item7B"],
            },
            { item: ["Item7C", "Item7D"] },
          ],
        },
        {
          name: [{ text: "Sub8" }],
          values: [
            {
              item: [
                "Item8A",
                "Item8B",
                "Item8C",
                "Item8D",
                "Item8E",
                "Item8F",
                "Item8G",
                "Item8H",
                "Item8I",
                "Item8J",
                "Item8K",
              ],
            },
            {
              item: ["Item8L", "Item8M", "Item8N", "Item8O", "Item8P"],
              outro: "Out8A",
            },
          ],
        },
      ],
    },
  ],
};
