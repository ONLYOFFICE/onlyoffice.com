import { ICertificate } from "../Hero.types";

export const Certificates: ICertificate[] = [
  {
    date: "KylinOSDate",
    heading: {
      label: "KylinOS",
      link: "KylinOSLink",
    },
    product: { label: "OODocsEnterprise", link: "/docs-enterprise" },
    image: {
      url: "/images/templates/certificates/certificate/compatibility_certificate_with_kylin_os.png",
      height: 866,
    },
  },
  {
    date: "OpenKylinDate",
    heading: { label: "OpenKylin", link: "OpenKylinLink" },
    product: { label: "OODesktopEditors", link: "/desktop" },
    image: {
      url: "/images/templates/certificates/certificate/compatibility_certificate_with_openkylin.png",
      height: 742,
    },
  },
  {
    date: "OpenEulerOSDate",
    heading: { label: "OpenEulerOS", link: "OpenEulerOSLink" },
    product: { label: "OODocsEnterprise", link: "/docs-enterprise" },
    image: {
      url: "/images/templates/certificates/certificate/compatibility_certificate_with_openeuler_os.png",
      height: 804,
    },
  },
  {
    date: "FangdeOSDate",
    heading: { label: "FangdeOS", link: "FangdeOSLink" },
    product: { label: "OODocsEnterprise", link: "/docs-enterprise" },
    image: {
      url: "/images/templates/certificates/certificate/compatibility_certificate_with_fangde_os.png",
      height: 823,
    },
  },
];
