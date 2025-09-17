interface IItems {
  heading: string;
  text: string;
  image: string;
  image2x: string;
  link?: string;
  width: number;
  height: number;
}
export const items: IItems[] = [
  {
    heading: "DocProcessing",
    text: "DocProcessingText",
    image: "DocProcessingImg",
    image2x: "DocProcessingImg2x",
    link: "/docs-enterprise",
    width: 700,
    height: 380,
  },
  {
    heading: "ProdTools",
    text: "ProdToolsText",
    image: "ProdToolsImg",
    image2x: "ProdToolsImg2x",
    width: 710,
    height: 360,
  },
  {
    heading: "CorporateMailing",
    text: "CorporateMailingText",
    image: "CorporateMailingImg",
    image2x: "CorporateMailingImg2x",
    width: 710,
    height: 360,
  },
  {
    heading: "RealTimeCommunication",
    text: "RealTimeCommunicationText",
    image: "RealTimeCommunicationImg",
    image2x: "RealTimeCommunicationImg2x",
    width: 700,
    height: 380,
  },
];
