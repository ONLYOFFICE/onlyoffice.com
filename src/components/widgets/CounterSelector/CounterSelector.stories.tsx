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
    variant: {
      control: { type: "select" },
      options: ["default", "input"],
    },
    buttonSize: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    valueSize: {
      control: { type: "select" },
      options: ["small", "medium"],
    },
    label: {
      control: { type: "text" },
    },
    bgColor: {
      control: { type: "text" },
    },
    autoFocus: {
      control: { type: "boolean" },
      options: [true, false],
    },
    value: {
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

const Template: StoryFn<ICounterSelector> = (args) => {
  const hasItems = Array.isArray(args.items) && args.items.length > 0;
  const [selected, setSelected] = useState(args.selected);
  const [value, setValue] = useState(args.value);

  const handleChange = (val: string) => {
    if (hasItems) {
      setSelected(val);
    } else {
      setValue(val);
    }
  };

  return (
    <CounterSelector
      {...args}
      selected={hasItems ? selected : undefined}
      value={!hasItems ? value : undefined}
      onChange={handleChange}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: "100", label: "100" },
    { id: "250", label: "250" },
    { id: "500", label: "500" },
  ],
  selected: "100",
};

export const InputVariant = Template.bind({});
InputVariant.args = {
  variant: "input",
  value: "1",
};
