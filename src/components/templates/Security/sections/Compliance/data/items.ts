  import { IFeatureLinkItem } from "@src/components/widgets/FeatureLinkItem";

  export const items: IFeatureLinkItem[] = [
      {
        icon: {
          url: "/images/templates/security/compliance/sec_icons.svg",
          positionX: "0",
        },
        heading: "GDPRCompliance",
        textList: [
          "GDPRComplianceText1",
          "GDPRComplianceText2"
        ],
        linkText: "ReadMoreAboutONLYOFFICEGDPR",
        linkUrl: "https://www.onlyoffice.com/blog/2018/05/how-onlyoffice-complies-with-gdpr/"
      },
      {
        icon: {
          url: "/images/templates/security/compliance/sec_icons.svg",
          positionX: "-120px",
          mobilePositionX: "-90px",
        },
        heading: "HIPAACompliance",
        textList: [
          "HealthInsurance"
        ],
        linkText: "ReadMoreAboutHIPAA",
        linkUrl: "https://www.onlyoffice.com/blog/2020/10/how-onlyoffice-complies-with-hipaa/"
      },
  ];