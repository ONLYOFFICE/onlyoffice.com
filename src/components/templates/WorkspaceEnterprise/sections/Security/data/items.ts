interface IItems {
  heading: string;
  text: string;
  icon?: string;
  iconPosition?: number;
  link: string;
  label?: string;
}
export const items: IItems[] = [
  {
    heading: "SecurityFeature1",
    text: "SecurityFeature1Text",
    icon: "/images/templates/workspace-enterprise/security/end-to-end.svg",
    link: "/private-rooms"
  },
  {
    heading: "SecurityFeature2",
    text: "SecurityFeature2Text",
    iconPosition: -1,
    link: "/download-workspace",
    label: "GetItNow"
  },
  {
    heading: "SecurityFeature3",
    text: "SecurityFeature3Text",
    iconPosition: -96,
    link: "/security"
  },
  {
    heading: "SecurityFeature4",
    text: "SecurityFeature4Text",
    iconPosition: -192,
    link: "/security#data_encryption"
  },
  {
    heading: "SecurityFeature5",
    text: "SecurityFeature5Text",
    iconPosition: -288,
    link: "/security#data_protection"
  },
];
