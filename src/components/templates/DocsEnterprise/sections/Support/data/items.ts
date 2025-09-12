import { getAssetUrl } from "@utils/getAssetUrl";
interface ISupportItems {
  heading: string;
  desc: string;
  btn: { text: string; href: string };
  imageUrl: string;
}

export const items: ISupportItems[] = [
  {
    heading: "SupportTitle1",
    desc: "SupportText1",
    btn: { text: "FreeDemoBtn", href: "/demo-order" },
    imageUrl: getAssetUrl("/images/templates/docs-enterprise/support/support-1.svg"),
  },
  {
    heading: "SupportTitle2",
    desc: "SupportText2",
    btn: {
      text: "ContactUs",
      href: "mailto:sales@onlyoffice.com?subject=ONLYOFFICE%20Docs%20Enterprise%20request",
    },
    imageUrl: getAssetUrl("/images/templates/docs-enterprise/support/support-4.svg"),
  },
  {
    heading: "SupportTitle3",
    desc: "SupportText3",
    btn: { text: "AcademyBtn", href: "/training-courses" },
    imageUrl: getAssetUrl("/images/templates/docs-enterprise/support/support-2.svg"),
  },
  {
    heading: "SupportTitle4",
    desc: "SupportText4",
    btn: {
      text: "ContactUs",
      href: "mailto:support@onlyoffice.com?subject=ONLYOFFICE%20Docs%20Enterprise%20request",
    },
    imageUrl: getAssetUrl("/images/templates/docs-enterprise/support/support-3.svg"),
  },
];
