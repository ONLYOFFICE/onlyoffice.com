export interface IConnectorCard {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** Identifier name used for constructing element IDs. */
  idName?: string;
  /** The image. */
  image: {
    /** The URL of the image to be displayed. */
    url: string;
    /** The background color of the image wrapper. */
    bgColor?: string;
  };
  /** The name of the connector. */
  name: string;
  /** The description text of the connector. */
  text: string;
  /** The URL for more information about the connector. */
  moreInfoUrl?: string;
  /** The vendor or provider of the connector. */
  vendor: string;
  /** The display name of the developer's website. */
  developerWebsiteName: string;
  /** The URL of the developer's website. */
  developerWebsiteUrl: string;
  /** Indicates if the connector is paid or free. */
  isPaid?: boolean | string;
  /** The URL to get the connector now. */
  getItNowUrl?: string;
  /** Indicates if the connector is newly released. */
  isNew?: boolean;
  /** Indicates if the connector is a WOPI integration. */
  isWopi?: boolean;
  /** Indicates if the connector is a BOT integration. */
  isBot?: boolean;
}
