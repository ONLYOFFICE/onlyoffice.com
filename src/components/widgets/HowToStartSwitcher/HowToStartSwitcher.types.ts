import { IStepCarouselItem } from "../StepCarousel/StepCarousel.types";

export interface IHowToStartSwitcherItem {
  /** Unique identifier for the tab */
  id: string;
  /** Label displayed in the tab */
  label: string;
  /** Items for the carousel */
  items: IStepCarouselItem[];
}

export interface IHowToStartSwitcher {
  /** Optional ID for the component */
  id?: string;
  /** Optional className for styling */
  className?: string;
  /** Array of items containing tab and carousel data */
  items: IHowToStartSwitcherItem[];
  /** Initially selected tab ID */
  defaultSelected?: string;
  /** Translation namespace */
  namespace: string;
}