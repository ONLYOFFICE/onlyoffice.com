export interface ISubscribeItem {
  icon: {
    url: string;
    positionX?: string;
  };
  heading: string;
  text: string;
  variant?: "primary" | "secondary";
}
