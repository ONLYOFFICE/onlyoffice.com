export interface ITeamworkCard {
  /** Heading of the card */
  heading: string;
  /** Text content of the card */
  text: string;
  /** Image details including URL and position */
  image: {
    /** URL of the image */
    url: string;
    /** X-axis position for background image */
    positionX?: string;
  };
  /** Text color */
  color?: string;
  /** Background color */
  bgColor?: string;
  /** Border color. Default: "#cccccc" */
  borderColor?: string;
}
