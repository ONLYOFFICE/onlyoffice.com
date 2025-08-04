import { IBlogCard } from "@src/components/widgets/BlogCard";

export const items: IBlogCard[] = [
  {
    imgUrl: "/images/templates/security/compliance/wp_sec.svg",
    heading: { label: "WhitePaper" },
    text: "ComponentsAndMechanics",
    links: [
      {
        href: "https://onlyo.co/31CXmGU",
        label: "LearnMore",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl:
      "/images/templates/security/compliance/blog_sec.png",
    heading: { label: "Blog" },
    text: "WhatIsJWT",
    links: [
      {
        href: "https://www.onlyoffice.com/blog/2022/09/what-is-jwt/",
        label: "LearnMore",
      },
    ],
  },
  {
    imgUrl:
      "/images/templates/security/compliance/guides_sec.svg",
    heading: { label: "Guides" },
    text: "ReinforcingSecurity",
    links: [
      {
        href: "https://helpcenter.onlyoffice.com/administration/reinforcing-security.aspx",
        label: "LearnMore",
        isExternal: true
      },
    ],
  },
];
