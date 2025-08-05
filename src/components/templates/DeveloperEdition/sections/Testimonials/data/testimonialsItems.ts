interface ITestimonialsItem {
  quote: string;
  author: string;
  position: string;
  link?: string;
  bg: string;
}

export const testimonials: ITestimonialsItem[] = [
  {
    quote: "Quote1",
    author: "Author1",
    position: "Company1",
    bg: "/images/templates/developer-edition/testimonials/netexplorer.svg",
    link: "Link1",
  },
  {
    quote: "Quote2",
    author: "Author2",
    position: "Company2",
    bg: "/images/templates/developer-edition/testimonials/powerfolder.svg",
  }
];
