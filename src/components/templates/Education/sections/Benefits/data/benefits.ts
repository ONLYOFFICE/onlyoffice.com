import { IBenefits } from "../Benefits.types";

export const benefits: IBenefits[] = [
  {
    educatorType: "teacher",
    items: [
      "FitToAnyLMSOrDMS",
      "TailoredToCreate",
      "EasyToRate",
      "EasyToCreate",
      "FlexiblePermissionsAndRoles",
      "FreeCloud",
    ],
    image: "/images/templates/education/benefits/teacher.svg",
    link: "/office-for-educators",
  },
  {
    educatorType: "student",
    items: [
      "ItIsFree",
      "SmoothAndIntuitiveOfficeExperience",
      "AbilityToWork",
      "DigitalLibraryAtHand",
      "CompatibleWithMsOffice",
      "BuiltInPluginMarketplace",
    ],
    image: "/images/templates/education/benefits/students.svg",
    link: "/office-for-students",
  },
];
