export interface IHCaptcha {
  onVerify?: (token: string | null) => void;
  onExpire?: () => void;
}
