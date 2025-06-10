interface ICardItemProps {
  date: string;
  language: string;
  title: string;
  description: string;
  playText: string;
  speaker: string;
  image: string;
  product: string;
  isUpcomingWebinar: boolean;
}

interface IFormData {
  fullName: string;
  companyName: string;
  email: string;
  textArea: string;
}

interface ICheckStatus {
  fullName: "default" | "success" | "error";
  companyName: "default" | "success" | "error";
  email: "default" | "success" | "error";
  textArea: "default" | "success" | undefined;
}

export type { ICardItemProps, IFormData, ICheckStatus };