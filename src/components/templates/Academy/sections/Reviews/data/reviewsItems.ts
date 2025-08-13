interface IReviewsItem {
  quote: string;
  author: string;
  position: string;
  link: string;
  bg: string;
}

export const reviews: IReviewsItem[] = [
  {
    quote: "Quote1",
    author: "Name1",
    position: "Company1",
    bg: "/images/templates/academy/reviews/itservicenet.svg",
    link: "https://www.itservicenet.net/?lang=en",
  },
  {
    quote: "Quote2",
    author: "Name2",
    position: "Company2",
    bg: "/images/templates/academy/reviews/minera-alamos.svg",
    link: "https://mineraalamos.com/",
  }
];
