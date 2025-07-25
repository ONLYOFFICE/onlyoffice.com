interface ISupportItems {
  heading: string;
  desc: string;
  btn: { text: string; href: string };
  imageUrl: string;
}

export const items: ISupportItems[] = [
  {
    heading: "FreeDemoTitle",
    desc: "FreeDemoDesc",
    btn: { text: "FreeDemoBtn", href: "/demo-order" },
    imageUrl:
      "/images/templates/docspace-enterprise/support/support_icon_1.svg",
  },
  {
    heading: "AcademyTitle",
    desc: "AcademyDesc",
    btn: { text: "AcademyBtn", href: "/training-courses" },
    imageUrl:
      "/images/templates/docspace-enterprise/support/support_icon_2.svg",
  },
  {
    heading: "EmailTitle",
    desc: "EmailDesc",
    btn: {
      text: "ContactUs",
      href: "mailto:support@onlyoffice.com",
    },
    imageUrl:
      "/images/templates/docspace-enterprise/support/support_icon_3.svg",
  },
  {
    heading: "PreSaleTitle",
    desc: "PreSaleDesc",
    btn: {
      text: "ContactUs",
      href: "mailto:sales@onlyoffice.com",
    },
    imageUrl:
      "/images/templates/docspace-enterprise/support/support_icon_4.svg",
  },
];