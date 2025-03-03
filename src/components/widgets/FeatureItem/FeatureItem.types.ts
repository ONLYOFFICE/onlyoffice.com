export interface IFeatureItem {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The icon url. */
  icon: string;
  /** The heading. */
  heading: React.ReactNode;
}
