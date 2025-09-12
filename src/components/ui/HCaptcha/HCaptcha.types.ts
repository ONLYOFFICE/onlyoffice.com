export interface IHCaptcha {
  sitekey?: string;
  size?: "normal" | "compact" | "invisible";
  onVerify?: (token: string | null) => void;
  onExpire?: () => void;
  position?: "center";
  error?: string;
}
