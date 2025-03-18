import { IFeatureTextImage } from "@src/components/widgets/FeatureTextImage";

export const items: IFeatureTextImage[] = [
  {
    title: "SecureForSensitiveDocuments",
    text: "ProtectYourFiles",
    image: {
      url: "SecureImgUrl",
      url2x: "SecureImgUrl2x",
    },
    imageHeight: 518,
  },
  {
    title: "ConvenientForMultipleCoAuthors",
    text: "CollaborateEffectively",
    links: [{ label: "LearnMore", href: "/seamless-collaboration.aspx" }],
    image: {
      url: "ConvenientImgUrl",
      url2x: "ConvenientImgUrl2x",
    },
    imageHeight: 540,
    position: "right",
  },
  {
    title: "CostEffectiveForAnyBudget",
    text: "PayForAdminsOnlyAndAdd",
    image: {
      url: "BudgetImgUrl",
      url2x: "BudgetImgUrl2x",
    },
    imageHeight: 504,
  },
];
