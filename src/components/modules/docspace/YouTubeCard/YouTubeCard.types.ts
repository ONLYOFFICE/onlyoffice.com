export interface IYouTubeCard {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The URL of the preview image for the video. */
  videoImgUrl: string;
  /** The URL of the video to be played inside the modal. */
  videoUrl: string;
  /** The border radius of the card. */
  borderRadius?: string;
  /** The border of the card. */
  border?: boolean;
}
