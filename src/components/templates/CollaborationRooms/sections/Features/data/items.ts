import { IFeatureTextImage } from "../Features.types";

export const items: IFeatureTextImage[] = [
  {
    title: "SecureForSensitiveDocuments",
    text: "ProtectYourFiles",
    image: {
      url: "SecureImgUrl",
      url2x: "SecureImgUrl2x",
    },
    textGap: "16px",
    gap: "32px",
    tabletGap: "24px",
    mobileGap: "16px",
    imageWidth: 640,
    contentWidth: "448px",
    imageHeight: 518,
    position: "left",
  },
  {
    title: "ConvenientForMultipleCoAuthors",
    text: "CollaborateEffectively",
    link: { label: "LearnMore", href: "/seamless-collaboration.aspx" },
    image: {
      url: "ConvenientImgUrl",
      url2x: "ConvenientImgUrl2x",
    },
    textGap: "16px",
    gap: "32px",
    tabletGap: "24px",
    mobileGap: "16px",
    contentWidth: "448px",
    imageWidth: 640,
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
    textGap: "16px",
    gap: "32px",
    tabletGap: "24px",
    mobileGap: "16px",
    contentWidth: "448px",
    imageWidth: 640,
    imageHeight: 504,
    position: "left",
  },
];
