import { Meta, StoryFn } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { ICheckbox } from "./Checkbox.types";

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
    type: {
      control: { type: "select" },
      options: ["checkbox"],
    },
    checked: {
      control: { type: "boolean" },
    },
    onChange: {
      action: "clicked",
    },
  },
} as Meta<typeof Checkbox>;

const Template: StoryFn<ICheckbox> = (args: ICheckbox) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Checkbox input",
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  label: "Checkbox input",
  checked: true,
};

