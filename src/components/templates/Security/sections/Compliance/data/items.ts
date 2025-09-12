import { IFeature } from "../Compliance.types";

  export const items: IFeature[] = [
      {
        heading: "GDPRCompliance",
        text: [
          "GDPRComplianceText1",
          "GDPRComplianceText2"
        ],
        link: {
          href: "ReadMoreAboutONLYOFFICEGDPRLink",
          label: "ReadMoreAboutONLYOFFICEGDPR",
          target: "_self"
        }
      },
      {
        heading: "HIPAACompliance",
        text: [
          "HealthInsurance"
        ],
        link: {
          href: "ReadMoreAboutHIPAALink",
          label: "ReadMoreAboutHIPAA",
          target: "_self",
        }
      },
  ];