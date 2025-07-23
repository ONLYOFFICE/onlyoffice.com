export interface ISupportedFormat {
  image: {
    url: string;
    positionX?: string;
    positionY?: string;
  };
  heading: string;
  formats: string[];
}
