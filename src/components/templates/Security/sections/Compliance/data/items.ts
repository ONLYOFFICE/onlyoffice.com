import { IFeature } from "../Compliance.types";

  export const items: IFeature[] = [
      {
        heading: "GDPRCompliance",
        text: [
          "GDPRComplianceText1",
          "GDPRComplianceText2"
        ],
        link: {
          href: "https://www.onlyoffice.com/blog/2018/05/how-onlyoffice-complies-with-gdpr/",
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
          href: "https://www.onlyoffice.com/blog/2020/10/how-onlyoffice-complies-with-hipaa/",
          label: "ReadMoreAboutHIPAA",
          target: "_self",
        }
      },
  ];