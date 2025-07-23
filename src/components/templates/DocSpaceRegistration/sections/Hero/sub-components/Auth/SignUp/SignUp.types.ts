export interface ISignUp {
  setEmail: (email: string) => void;
  setStatus: (
    status: "login" | "signup" | "checkEmail" | "chooseEmail",
  ) => void;
}
