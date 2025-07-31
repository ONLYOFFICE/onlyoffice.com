interface ICheckStatus {
  firstName: "default" | "success" | "error";
  lastName: "default" | "success" | "error";
  email: "default" | "success" | "error";
  portalName: "default" | "success" | "error";
  yourWebsiteURL: "default" | "success" | "error";
};

interface IFaqItems {
  label: string;
  content: string;
}

export type {
  ICheckStatus,
  IFaqItems
}