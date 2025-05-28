export interface ICollaborationFeatureModal {
  isOpen: boolean;
  onClose: () => void;
  images: { src: string; alt: string }[];
  currentImageIndex: number;
}
