import { Meta, StoryFn } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { ICheckbox } from "./Checkbox.types";
import { useState } from "react";

export default {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: "Checkbox field.",
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
    label: {
      control: { type: "text" },
    },
    tabIndex: {
      control: { type: "number" },
    },
    checked: {
      control: { type: "boolean" },
      options: [true, false],
    },
    required: {
      control: { type: "boolean" },
      options: [true, false],
    },
    name: {
      control: { type: "text" },
    },
    value: {
      control: { type: "text" },
    },
    align: {
      control: { type: "select" },
      options: ["top", "center"],
    },
  },
} as Meta<typeof Checkbox>;

const Template: StoryFn<ICheckbox> = (args) => {
  const [isChecked, setIsChecked] = useState(args.checked || false);

  const handleChange = () => setIsChecked(!isChecked);

  return <Checkbox {...args} checked={isChecked} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "Checkbox input",
};

export const Checked = Template.bind({});
Checked.args = {
  ...Default.args,
  checked: true,
};
