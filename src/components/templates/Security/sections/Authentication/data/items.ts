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
        href: "https://helpcenter.onlyoffice.com/video/manage-access-rights.aspx", 
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
  // import { IFeatureImageItem } from "@src/components/widgets/FeatureImageItem";

  // export const items: IFeatureImageItem[] = [
  //   {
  //     title: "Two_Factor",
  //     text: {
  //       label: [
  //         "InTheAgeOfElectronic",
  //         "WeIntegratedClickatell",
  //         "AdditionallyItIsPossible",
  //         "ReadMoreAbout"
  //       ],
  //       links: [
  //         {
  //           href: "https://helpcenter.onlyoffice.com/guides/two-factor-authentication.aspx",
  //           isExternal: true
  //         }
  //       ],
  //     },
  //     // wrapperWidth: "282px",
  //     image: {
  //       url: "/images/templates/security/compliance/sec_gray_imgs.svg",
  //       // bgSize: "auto",
  //       // bgPosition: "0 0",
  //     }
  //   },
  //   {
  //     title: "SingleSign",
  //     text: {
  //       label: [
  //         "ByChoosingSingle",
  //         "CurrentlyWeHave",
  //         "ReadMoreAboutHowSingle"
  //       ],
  //       links: [
  //         {
  //           href: "https://helpcenter.onlyoffice.com/server/controlpanel/enterprise/sso-description.aspx",
  //           isExternal: true
  //         }
  //       ],
  //     },
  //     // wrapperWidth: "296px",
  //     image: {
  //       url: "/images/templates/security/compliance/sec_gray_imgs.svg",
  //       // bgSize: "auto",
  //       // bgPosition: "-512px 0",
  //     }
  //   },
  //   {
  //     title: "AccessRightsManagement",
  //     text: {
  //       label: [
  //         "TheThreatOfMalicious",
  //         "UsersOfYourPrivate",
  //         "ReadMoreAboutTheAccess"
  //       ],
  //       links: [
  //         {
  //           href: "https://helpcenter.onlyoffice.com/video/manage-access-rights.aspx",
  //           isExternal: true
  //         }
  //       ],
  //     },
  //     // wrapperWidth: "312px",
  //     image: {
  //       url: "/images/templates/security/compliance/sec_gray_imgs.svg",
  //       // bgSize: "auto",
  //       // bgPosition: "-28px -374px",
  //     }
  //   },
  //   {
  //     title: "AuthenticationFiltering",
  //     text: {
  //       label: [
  //         "ACustomizedSet",
  //         "TrustedMailDomains",
  //         "PasswordCreationCriteria",
  //         "CookieLifetime",
  //         "IPRestriction",
  //         "LoginSettings",
  //         "LoginHistory",
  //         "AuditTrail"
  //       ],
  //       links: [],
  //     },
  //     // wrapperWidth: "339px",
  //     image: {
  //       url: "/images/templates/security/compliance/sec_gray_imgs.svg",
  //       // bgSize: "auto",
  //       // bgPosition: "-512px -378px",
  //     }
  //   },
  // ];
