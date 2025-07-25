export interface ICheckEmail {
  email: string;
  setStatus: (
    status: "login" | "signup" | "checkEmail" | "chooseEmail",
  ) => void;
}
