export const teamworkItems = {
  firstLineItems: [
    {
      type: "education",
      title: "Education",
      description: "EducationDesc",
    },
    { type: "business", title: "Business", description: "BusinessDesc" },
  ] as const,
  secondLineItems: [
    {
      type: "individuals",
      title: "Individuals",
      description: "IndividualsDesc",
    },
    { type: "legal", title: "Legal", description: "LegalDesc" },
  ] as const,
};
