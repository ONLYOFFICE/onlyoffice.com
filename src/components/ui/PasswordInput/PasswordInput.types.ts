import { IInput } from "../Input/Input.types";

export interface IPasswordInput extends Omit<IInput, 'type'> {
  /** Boolean value that indicates whether the show password toggle is visible. */
  showPasswordToggle?: boolean;
}