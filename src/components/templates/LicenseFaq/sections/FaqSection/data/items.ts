export interface IFaqItems {
  question: string;
  answer: string;
  links: { href: string; isExternal?: boolean }[];
}

export const items: IFaqItems[] = [
  {
    question: "Q1",
    answer: "A1",
    links: [
      { href: "https://www.gnu.org/licenses/agpl.html", isExternal: true },
    ],
  },
  {
    question: "Q2",
    answer: "A2",
    links: [{ href: "/support-contact-form" }],
  },
  {
    question: "Q3",
    answer: "A3",
    links: [
      { href: "https://www.gnu.org/licenses/agpl.html", isExternal: true },
      {
        href: "https://www.gnu.org/licenses/agpl.html#section13",
        isExternal: true,
      },
    ],
  },
  {
    question: "Q4",
    answer: "A4",
    links: [{ href: "mailto:sales@onlyoffice.com", isExternal: true }],
  },
  {
    question: "Q5",
    answer: "A5",
    links: [
      {
        href: "https://www.gnu.org/licenses/agpl.html#section7",
        isExternal: true,
      },
      {
        href: "https://www.gnu.org/licenses/agpl.html#section5",
        isExternal: true,
      },
      { href: "mailto:sales@onlyoffice.com", isExternal: true },
    ],
  },
];
