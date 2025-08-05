export interface IWatchVideo {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The URL of the preview image for the video. */
  videoImgUrl: string;
  /** The URL of the video to be played inside the modal. */
  videoUrl: string;
  /** The heading text. */
  heading: string;
  customLabel?: string;
}
