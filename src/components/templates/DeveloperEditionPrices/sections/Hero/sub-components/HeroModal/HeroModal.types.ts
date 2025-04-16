import { ILocale } from "@src/types/locale";

export interface IHeroModal extends ILocale {
  isOpen: boolean;
  onClose: () => void;
  isOrderNow: boolean;
}
