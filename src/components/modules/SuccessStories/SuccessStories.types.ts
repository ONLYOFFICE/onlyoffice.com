export interface ISuccessStoriesData {
  id: number;
  slug: string;
  title: string;
  intro: string;
  user: {
    name: string;
    role: string;
    portal: string;
    location: string;
    image: string;
  };
  profile: {
    company: string;
    industry: string[];
    link?: string;
  };
  challenges: string[];
  achievements: string[];
}

export interface ISlugProps {
  slug: string | string[] | undefined;
}

export interface ITransKeysLink {
  key: number;
  href: string;
  target: "_self" | "_blank" | "_parent" | "_top";
  fontWeight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  color: string;
}
