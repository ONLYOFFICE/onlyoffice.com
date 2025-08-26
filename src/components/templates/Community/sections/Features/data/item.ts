interface ICollaborationsFeatures {
  image: { src: string; alt: string };
  heading: string;
  text: string;
}

export const features: ICollaborationsFeatures[] = [
  {
    image: { src: "SharingCompanyNewsImage", alt: "SharingCompanyNews" },
    heading: "SharingCompanyNews",
    text: "SharingCompanyNewsText",
  },
  {
    image: { src: "CreatingPollsImage", alt: "CreatingPolls" },
    heading: "CreatingPolls",
    text: "CreatingPollsText",
  },
  {
    image: { src: "MaintainingBlogsImage", alt: "MaintainingBlogs" },
    heading: "MaintainingBlogs",
    text: "MaintainingBlogsText",
  },
  {
    image: { src: "InstantMessagingImage", alt: "InstantMessaging" },
    heading: "InstantMessaging",
    text: "InstantMessagingText",
  },
];
