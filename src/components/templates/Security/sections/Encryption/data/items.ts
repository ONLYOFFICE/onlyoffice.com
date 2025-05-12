  import { IFeatureLinkItem } from "@src/components/widgets/FeatureLinkItem";

  export const items: IFeatureLinkItem[] = [
      {
        icon: {
          url: "/images/templates/security/compliance/sec_icons.svg",
          positionX: "-242px",
          mobilePositionX: "-177px",
        },
        heading: "EncryptionAtRest",
        textList: ["BreachOfData"],
        linkText: "ReadMoreAboutEncrypting",
        linkUrl: "https://helpcenter.onlyoffice.com/server/controlpanel/opensource/encryption.aspx",
        target: "_blank"
      },
      {
        icon: {
          url: "/images/templates/security/compliance/sec_icons.svg",
          positionX: "-350px",
          mobilePositionX: "-261px",
        },
        heading: "End_To_EndEncryption",
        textList: ["ONLYOFFICEOffers"],
        linkText: "ReadMoreAboutPrivate",
        linkUrl: "https://www.onlyoffice.com/private-rooms.aspx?from=security"
      },
      {
        icon: {
          url: "/images/templates/security/compliance/sec_icons.svg",
          positionX: "-790px",
          mobilePositionX: "-591px",
        },
        heading: "DocumentPassword",
        textList: ["YouCanProtect"],
        linkText: "",
      },
  ];