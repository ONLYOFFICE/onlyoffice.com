import { IFeatureImageItem } from "@src/components/widgets/FeatureImageItem";

interface IFeatureImageItemExtended extends IFeatureImageItem {
  text: string[];
}

  export const items: IFeatureImageItemExtended[] = [
  {
    heading: "Two_Factor",
    text: [
      "InTheAgeOfElectronic",
      "WeIntegratedClickatell",
      "AdditionallyItIsPossible",
    ],
    image: {
      url: "/images/templates/security/compliance/sec_gray_imgs.svg",
    },
    links: [
      {
        label: "ReadMoreAbout",
        href: "https://helpcenter.onlyoffice.com/guides/two-factor-authentication.aspx",
        isExternal: true
      }
    ]
  },
  {
    heading: "SingleSign",
    text: [
      "ByChoosingSingle",
      "CurrentlyWeHave",
    ],
    image: {
      url: "/images/templates/security/compliance/sec_gray_imgs.svg",
    },
    links: [
      {
        label: "ReadMoreAboutHowSingle",
        href: "https://helpcenter.onlyoffice.com/server/controlpanel/enterprise/sso-description.aspx",
        isExternal: true
      }
    ]
  },
  {
    heading: "AccessRightsManagement",
    text: [
      "TheThreatOfMalicious",
      "UsersOfYourPrivate",
    ],
    image: {
      url: "/images/templates/security/compliance/sec_gray_imgs.svg",
    },
    links: [
      {
        label: "ReadMoreAboutTheAccess",
        href: "ReadMoreAboutTheAccessLink",
        isExternal: true
      }
    ]
  },
  {
    heading: "AuthenticationFiltering",
    text: [
      "ACustomizedSet",
      "TrustedMailDomains",
      "PasswordCreationCriteria",
      "CookieLifetime",
      "IPRestriction",
      "LoginSettings",
      "LoginHistory",
      "AuditTrail",
    ],
    image: {
      url: "/images/templates/security/compliance/sec_gray_imgs.svg",
    },
  },
];