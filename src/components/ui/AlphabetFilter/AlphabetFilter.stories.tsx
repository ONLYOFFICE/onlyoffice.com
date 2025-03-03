import { Meta, StoryFn } from "@storybook/react";
import { IAlphabetFilterProps } from "./AlphabetFilter.types";
import { AlphabetFilter } from "./AlphabetFilter";

const partners = [
  "Apple",
  "Amazon",
  "Google",
  "Facebook",
  "Microsoft",
  "Netflix",
  "Tesla",
  "Samsung",
];

export default {
  title: "UI/AlphabetFilter",
  component: AlphabetFilter,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
  argTypes: {
    
  },
} as Meta<typeof AlphabetFilter>;

const Template: StoryFn<IAlphabetFilterProps> = (args: IAlphabetFilterProps) => (
    <AlphabetFilter {...args} />
  );
  
export const Default = Template.bind({});
Default.args = {
  arr: partners,
  selectedLetter: "a",
};