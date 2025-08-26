interface Item {
  image: string;
  text: string;
  link: {
    href: string;
    target?: string;
  };
}

export const items: Item[] = [
  {
    image:
      "/images/templates/installation-success-desktop/useful-links/blog.png",
    text: "ReadBlog",
    link: {
      href: "/blog",
    },
  },
  {
    image:
      "/images/templates/installation-success-desktop/useful-links/learn_more.png",
    text: "LearnMore",
    link: {
      href: "https://helpcenter.onlyoffice.com/docs/userguides",
      target: "_blank",
    },
  },
];
