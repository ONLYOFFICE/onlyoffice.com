import { getAssetUrl } from "@utils/getAssetUrl";
interface IFeatures {
  icon: string;
  title: string;
  text: string;
  link?: {
    label: string;
    href: string;
    isExternal?: boolean;
  };
}

export const features: IFeatures[] = [
  {
    icon: getAssetUrl("/images/templates/workspace/why-oo-workspace/integration.svg"),
    title: "ThirdParty",
    text: "ExtendYourWorkspace",
    link: {
      label: "FindAppsYouNeed",
      href: "/app-directory",
      isExternal: true,
    },
  },
  {
    icon: getAssetUrl("/images/templates/workspace/why-oo-workspace/security.svg"),
    title: "DataSecurityHeader",
    text: "DataSecurity",
    link: {
      label: "LearnMore",
      href: "/security?from=workspace",
    },
  },
  {
    icon: getAssetUrl("/images/templates/workspace/why-oo-workspace/admin.svg"),
    title: "Administration",
    text: "ManageYourWorkspace",
  },
];
