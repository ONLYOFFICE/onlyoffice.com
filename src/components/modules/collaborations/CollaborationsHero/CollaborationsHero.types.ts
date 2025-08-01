export interface IMedals {
  image: string;
  href?: string;
  width: string;
  height: string;
  mobileWidth: string;
  mobileHeight: string;
}

export interface ICollaborationsHero {
  heading: string;
  text: React.ReactNode;
  button: { id: string; label: string; href: string };
  image: {
    url: string;
    url2x: string;
    type: "img" | "video";
    videoUrl?: string;
  };
  medals?: IMedals[];
}
