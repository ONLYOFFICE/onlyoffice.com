import { IActionsContentProps } from "./sub-components/ActionsContent/ActionsContent.types";
import { ActionsDemoModalProps } from "./sub-components/ActionsDemoModal/ActionsDemoModal.types";

interface IButtonInfo extends IActionsContentProps, ActionsDemoModalProps {
  id: number;
  text: string;
}

export type { IButtonInfo };