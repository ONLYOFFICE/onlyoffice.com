interface ISteps {
  text: string;
  lines?: string[];
}

export const steps: ISteps[] = [
  {
    text: "Step1",
    lines: [
      "DocumentServerAddress",
      "DocumentServerJWTHeader",
      "DocumentServerSecret"
    ],
  },
  {
    text: "Step2",
  },
  {
    text: "Step3",
  },
];