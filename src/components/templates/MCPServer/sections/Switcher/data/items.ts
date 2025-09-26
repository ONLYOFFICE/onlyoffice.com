interface ISwitcherItems {
  title: string;
  text: string;
  img: {
    url: string;
  }
}


const items: ISwitcherItems[] = [
  {
    title: "FeaturesTitle1",
    text: "FeaturesDescription1",
    img: {
      url: "/images/templates/mcp-server/features/ft1.svg",
    }
  },
  {
    title: "FeaturesTitle2",
    text: "FeaturesDescription2",
    img: {
      url: "/images/templates/mcp-server/features/ft2.svg",
    }
  },
  {
    title: "FeaturesTitle3",
    text: "FeaturesDescription3",
    img: {
      url: "/images/templates/mcp-server/features/ft3.svg",
    }
  },
  {
    title: "FeaturesTitle4",
    text: "FeaturesDescription4",
    img: {
      url: "/images/templates/mcp-server/features/ft4.svg",
    }
  },
  {
    title: "FeaturesTitle5",
    text: "FeaturesDescription5",
    img: {
      url: "/images/templates/mcp-server/features/ft5.svg",
    }
  },
]

export { items };