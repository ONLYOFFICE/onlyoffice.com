import { Meta, StoryFn } from "@storybook/react";
import { IAlphabetFilter } from "./AlphabetFilter.types";
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
        component:
          "The AlphabetFilter component is used to filter items by letter.",
      },
    },
  },
} as Meta<typeof AlphabetFilter>;

const Template: StoryFn<IAlphabetFilter> = (args: IAlphabetFilter) => (
  <AlphabetFilter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  arr: partners,
  selectedLetter: "a",
};
