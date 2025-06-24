import { IBlogCard } from "@src/components/widgets/BlogCard";

export const items: IBlogCard[] = [
  {
    imgUrl: "BlogDevelopersImgUrl",
    author: "BlogDevelopersAuthor",
    quotesBefore: "quotesBefore",
    italicText: "BlogDevelopersItalicText",
    quotesAfter: "quotesAfter",
    heading: {
      label: "BlogDevelopersLabel",
    },
    links: [{
      href: "BlogDevelopersLinks",
      label: "BlogDevelopersLinksLabel",
      isExternal: true,
    }],
  },
  {
    imgUrl: "BlogDevelopersImgUrl2",
    author: "BlogDevelopersAuthor2",
    quotesBefore: "quotesBefore",
    italicText: "BlogDevelopersItalicText2",
    quotesAfter: "quotesAfter",
    heading: {
      label: "BlogDevelopersLabel2",
    },
    links: [{
      href: "BlogDevelopersLinks2",
      label: "BlogDevelopersLinksLabel2",
      isExternal: true,
    }],
  },
];
