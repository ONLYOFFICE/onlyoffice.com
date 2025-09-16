interface IDataForm {
  firstName: string;
  lastName: string;
  email: string;
  portalName: string;
  youAre: string;
  yourWebsiteURL: string;
  hCaptchaToken: string | null;
}

interface ICheckStatus {
  firstName: "default" | "success" | "error";
  lastName: "default" | "success" | "error";
  email: "default" | "success" | "error";
  portalName: "default" | "success" | "error";
  yourWebsiteURL: "default" | "success" | "error";
  youAre?: "default" | "success" | "error";
  hCaptchaToken?: "default" | "success" | "error";
}

interface IFaqItems {
  label: string;
  content: string;
}

export type { IDataForm, ICheckStatus, IFaqItems };
