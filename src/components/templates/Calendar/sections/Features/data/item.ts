interface ICollaborationsFeatures {
  image: { src: string; alt: string };
  heading: string;
  text: string;
}

export const features: ICollaborationsFeatures[] = [
  {
    image: { src: "IndividualOrGroupImage", alt: "IndividualOrGroup" },
    heading: "IndividualOrGroup",
    text: "IndividualOrGroupText",
  },
  {
    image: { src: "SimpleSchedulingImage", alt: "SimpleScheduling" },
    heading: "SimpleScheduling",
    text: "SimpleSchedulingText",
  },
  {
    image: { src: "SynchronizationImage", alt: "Synchronization" },
    heading: "Synchronization",
    text: "SynchronizationText",
  },
  {
    image: { src: "CloseIntegrationImage", alt: "CloseIntegration" },
    heading: "CloseIntegration",
    text: "CloseIntegrationText",
  },
];
