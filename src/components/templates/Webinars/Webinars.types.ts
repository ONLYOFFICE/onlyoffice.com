interface ICardItemProps {
  date: string;
  dateWithHours: string;
  language: string;
  title: string;
  description: string;
  link?: string;
  speaker: string;
  image: {
    url: string;
  }[];
  product: string;
  isUpcomingWebinar: boolean;
}

interface IFormData {
  fullName: string;
  companyName: string;
  email: string;
  textArea: string;
  hCaptcha: string | null,
}

interface ICheckStatus {
  fullName: "default" | "success" | "error";
  companyName: "default" | "success" | "error";
  email: "default" | "success" | "error";
  textArea: "default" | "success" | undefined;
  hCaptcha: "default" | "success" | undefined;
}

interface IWebinar {
  id: number;
  title: string;
  date: string;
  description: string;
  language: string;
  product: string;
  watch_link: string;
  speaker: string;
  speaker_image: {
    url: string;
  }[];
}

interface IWebinars {
  webinars: {
    upcoming: {
      data: IWebinar[];
    };
    past: {
      data: IWebinar[];
    };
  }
}

export type { ICardItemProps, IFormData, ICheckStatus, IWebinars };