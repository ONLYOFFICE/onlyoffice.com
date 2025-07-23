export interface IIconTooltip {
  id: string;
  icon: {
    url: string;
    positionX?: string;
    positionY?: string;
  };
  href: string;
  tooltipLabel: string;
}
