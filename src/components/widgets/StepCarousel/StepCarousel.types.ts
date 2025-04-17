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
  /** Unique identifier for the tab */
  id: string;
  /** Label displayed in the tab */
  label: string;
  /** Items for the carousel */
  items: IStepCarouselItem[];
}

export interface IStepCarousel {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** Items for the carousel. Can be either a simple array of items or an array of tab items */
  items: IStepCarouselItem[] | IStepCarouselTab[];
  /** Initially selected tab ID (only used when items is IStepCarouselTab[]) */
  defaultSelected?: string;
  /** Translation namespace */
  namespace?: string;
  /** Callback when tab changes (only used when items is IStepCarouselTab[]) */
  onTabChange?: (tabId: string) => void;
  /** Whether to use tabs or not */
  useTabs?: boolean;
}
