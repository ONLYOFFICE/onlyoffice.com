import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { CounterSelector } from "./CounterSelector";
import { ICounterSelector } from "./CounterSelector.types";

export default {
  title: "Widgets/CounterSelector",
  component: CounterSelector,
  parameters: {
    docs: {
      description: {
        component:
          "CounterSelector allows users to increment or decrement a selected value from a predefined list of options.",
      },
    },
  },
  argTypes: {
    id: {
      control: { type: "text" },
    },
    className: {
      control: { type: "text" },
    },
    items: {
      control: { type: "object" },
    },
    selected: {
      control: { type: "text" },
    },
  },
} as Meta<typeof CounterSelector>;

const Template: StoryFn<ICounterSelector> = (args: ICounterSelector) => {
  const [selected, setSelected] = useState(args.selected);

  return (
    <CounterSelector {...args} selected={selected} onChange={setSelected} />
  );
};

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: "counter-selector-100", label: "100" },
    { id: "counter-selector-250", label: "250" },
    { id: "counter-selector-500", label: "500" },
  ],
  selected: "counter-selector-100",
};
