import { IFeatureImageItem } from "@src/components/widgets/FeatureImageItem";

export const items: IFeatureImageItem[] = [
  {
    title: "SecureForSensitiveDocuments",
    text: { label: "ProtectYourFiles" },
    image: {
      url: "SecureImgUrl",
      url2x: "SecureImgUrl2x",
      height: 518,
    },
  },
  {
    title: "ConvenientForMultipleCoAuthors",
    text: { label: "CollaborateEffectively" },
    links: [{ label: "LearnMore", href: "/seamless-collaboration" }],
    image: {
      url: "ConvenientImgUrl",
      url2x: "ConvenientImgUrl2x",
      height: 540,
    },
  },
  {
    title: "CostEffectiveForAnyBudget",
    text: { label: "PayForAdminsOnlyAndAdd" },
    image: {
      url: "BudgetImgUrl",
      url2x: "BudgetImgUrl2x",
      height: 504,
    },
  },
];
