interface IFeaturesItem {
  title: string;
  text: string;
  link: {
    label: string;
    href: string;
  };
  image: string;
}

interface IAbout {
  id: number;
  date: string;
  description: string;
}

interface IAbouts {
  abouts: {
    data: IAbout[]
  }
}

interface IAboutAccumulate {
  year: string;
  items: IAbout[];
}

interface IAboutDragState {
  isDown: boolean;
  isDragging: boolean;
  startX: number;
  scrollLeft: number;
  isThumbDown: boolean;
  thumbStartX: number;
  initialScrollLeft: number;
  initialX: number;
  initialY: number;
  lockDirection: 'horizontal' | 'vertical' | null;
}

export type {
  IFeaturesItem,
  IAbouts,
  IAbout,
  IAboutAccumulate,
  IAboutDragState
};