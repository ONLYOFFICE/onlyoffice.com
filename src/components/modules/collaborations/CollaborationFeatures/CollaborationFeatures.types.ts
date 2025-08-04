export interface ICollaborationsFeatures {
  features: {
    image: { src: string; alt: string };
    heading: string;
    text: React.ReactNode;
  }[];
}
