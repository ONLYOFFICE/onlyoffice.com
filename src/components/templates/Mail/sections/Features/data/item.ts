interface ICollaborationsFeatures {
  image: { src: string; alt: string };
  heading: string;
  text: string;
}

export const features: ICollaborationsFeatures[] = [
  {
    image: { src: "MailServerImage", alt: "MailServer" },
    heading: "MailServer",
    text: "MailServerText",
  },
  {
    image: { src: "MailAggregatorImage", alt: "MailAggregator" },
    heading: "MailAggregator",
    text: "MailAggregatorText",
  },
  {
    image: { src: "EffectiveEmailImage", alt: "EffectiveEmail" },
    heading: "EffectiveEmail",
    text: "EffectiveEmailText",
  },
  {
    image: { src: "EasyEmailFormattingImage", alt: "EasyEmailFormatting" },
    heading: "EasyEmailFormatting",
    text: "EasyEmailFormattingText",
  },
  {
    image: { src: "CrmIntegrationImage", alt: "CrmIntegration" },
    heading: "CrmIntegration",
    text: "CrmIntegrationText",
  },
  {
    image: { src: "DocumentIntegrationImage", alt: "DocumentIntegration" },
    heading: "DocumentIntegration",
    text: "DocumentIntegrationText",
  },
  {
    image: { src: "CalendarIntegrationImage", alt: "CalendarIntegration" },
    heading: "CalendarIntegration",
    text: "CalendarIntegrationText",
  },
];
