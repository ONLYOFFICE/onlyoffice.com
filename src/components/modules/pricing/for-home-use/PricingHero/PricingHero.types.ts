import { ILabeledWrapper } from "@src/components/widgets/LabeledWrapper";
import { ICounterSelector } from "@src/components/widgets/CounterSelector";
import { IToggleButtons } from "@src/components/widgets/ToggleButtons";

type ILabelAndRightSide = Pick<ILabeledWrapper, "label" | "rightSide">;

export interface ICounterSelectorItems
  extends ILabelAndRightSide,
    ICounterSelector {}
export interface IToggleButtonsItems
  extends ILabelAndRightSide,
    IToggleButtons {}

export interface IPricingHero {
  heading: React.ReactNode;
  label: string;
  price: string;
  list: string[];
  tryItFreelinkUrl: string;
  buyNowLinkUrl: string;
  counterSelectors?: ICounterSelectorItems[];
  toggleButtons?: IToggleButtonsItems[];
}
