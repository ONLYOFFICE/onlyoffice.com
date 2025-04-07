export interface ILabeledWrapper {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The label text. */
  label: string;
  /** The content displayed on the left side of the label. */
  leftSide?: React.ReactNode;
  /** The content displayed on the right side of the label. */
  rightSide?: React.ReactNode;
  /** The child elements to be wrapped inside the component. */
  children: React.ReactNode;
}
