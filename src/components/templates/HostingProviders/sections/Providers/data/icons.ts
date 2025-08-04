export interface IIcons {
  id:
    | "oo-docs-community-edition"
    | "oo-workspace-enterprise"
    | "oo-workspace-community-edition"
    | "oo-docs-enterprise-edition"
    | "oo-docs-developer-edition"
    | "oo-docs-enterprise-edition-for-arm"
    | "oo-docs-developer-edition-for-arm"
    | "oo-docs-community-edition-for-arm"
    | "oo-docs-cloud"
    | "oo-docspace-cloud"
    | "oo-docspace-enterprise";
  title: string;
  iconPositionX: string;
}

export const icons: IIcons[] = [
  {
    id: "oo-docs-community-edition",
    title: "OODocsCommunityEdition",
    iconPositionX: "-20px",
  },
  {
    id: "oo-workspace-enterprise",
    title: "OOWorkspaceEnterprise",
    iconPositionX: "-164px",
  },
  {
    id: "oo-workspace-community-edition",
    title: "OOWorkspaceCommunityEdition",
    iconPositionX: "-238px",
  },
  {
    id: "oo-docs-enterprise-edition",
    title: "OODocsEnterpriseEdition",
    iconPositionX: "-310px",
  },
  {
    id: "oo-docs-developer-edition",
    title: "OODocsDeveloperEdition",
    iconPositionX: "-380px",
  },
  {
    id: "oo-docs-enterprise-edition-for-arm",
    title: "OODocsEnterpriseEditionForARM",
    iconPositionX: "-454px",
  },
  {
    id: "oo-docs-developer-edition-for-arm",
    title: "OODocsDeveloperEditionForARM",
    iconPositionX: "-524px",
  },
  {
    id: "oo-docs-community-edition-for-arm",
    title: "OODocsCommunityEditionForARM",
    iconPositionX: "-596px",
  },
  {
    id: "oo-docs-cloud",
    title: "OODocsCloud",
    iconPositionX: "-670px",
  },
  {
    id: "oo-docspace-cloud",
    title: "OOWorkspaceCloud",
    iconPositionX: "-740px",
  },
  {
    id: "oo-docspace-enterprise",
    title: "OODocSpaceEnterprise",
    iconPositionX: "-812px",
  },
];
