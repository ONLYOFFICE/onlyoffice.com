interface IItem {
  /** Item label */
  label: string;
  /** Item icon */
  icon: {
    /** Item icon position X */
    positionX: string;
    /** Item icon mobile position X */
    mobilePositionX: string;
  };
}

export const items: IItem[] = [
  {
    label: "Feature1",
    icon: {
      positionX: "8px",
      mobilePositionX: "4px",
    },
  },
  {
    label: "Feature2",
    icon: {
      positionX: "-142px",
      mobilePositionX: "-100px",
    },
  },
  {
    label: "Feature3",
    icon: {
      positionX: "-294px",
      mobilePositionX: "-206px",
    },
  },
];
