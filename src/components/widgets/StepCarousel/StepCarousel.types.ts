export interface IStepCarouselItem {
  /** The image URL for the carousel item. */
  imgUrl: string;
  /** The heading for the carousel item. */
  heading: React.ReactNode;
  /** The links for the heading. */
  headingLinks?: {
    /** The URL of the link. */
    url: string;
    /** Whether the link is external. */
    isExternal?: boolean;
  }[];
}

export interface IStepCarouselTab {
  /** The label for the tab. */
  label: string;
  /** The items to display under this tab. */
  items: IStepCarouselItem[];
}

export interface IStepCarousel {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The tabs data if the carousel is tabbed. */
  tabs?: IStepCarouselTab[];
  /** The items to display if the carousel is not tabbed. */
  items?: IStepCarouselItem[];
  /** The index of the tab that should be active by default. */
  activeTab?: number;
  /** Callback fired when the active tab changes. */
  onChange?: (value: number) => void;
}
