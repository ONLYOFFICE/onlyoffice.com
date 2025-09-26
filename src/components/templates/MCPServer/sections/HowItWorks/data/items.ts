import { IStepCarouselItem } from "@src/components/widgets/StepCarousel";

export const items: IStepCarouselItem[] = [
  {
    imgUrl: "/images/templates/mcp-server/how-it-works/how-it-works1.svg",
    title: "HowItWorksTitle1",
    heading: "HowItWorksDescription1",
    headingLinks: [
      {
        url: "https://github.com/ONLYOFFICE/docspace-mcp?tab=readme-ov-file#installation",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: "/images/templates/mcp-server/how-it-works/how-it-works2.svg",
    title: "HowItWorksTitle2",
    heading: "HowItWorksDescription2",
    headingLinks: [
      {
        url: "https://github.com/ONLYOFFICE/docspace-mcp?tab=readme-ov-file#configuration",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: "/images/templates/mcp-server/how-it-works/how-it-works3.svg",
    title: "HowItWorksTitle3",
    heading: "HowItWorksDescription3",
    headingLinks: [
      {
        url: "https://github.com/ONLYOFFICE/docspace-mcp?tab=readme-ov-file#tools",
        isExternal: true,
      },
    ],
  },
];
