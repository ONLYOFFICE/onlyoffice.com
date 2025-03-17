export interface IFeatureConnectorCard {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The URL the card should link to. */
  url: string;
  /** The background color of the image wrapper. */
  imgBgColor: string;
  /** The URL of the image to be displayed. */
  imgUrl: string;
  /** The heading of the connector card. */
  heading: string;
  /** The description text of the connector card. */
  text: string;
  /** Indicates if the connector is newly released. */
  isNew?: boolean;
}
