export interface IHead {
  /** Page title displayed in the <title> tag */
  title: string;
  /** Meta description for the page */
  description?: string;
  /** Alternative title for Open Graph (og:title). Defaults to `title` if not provided */
  titleOG?: string;
  /** Alternative description for Open Graph (og:description). Defaults to `description` if not provided */
  descriptionOG?: string;
}
