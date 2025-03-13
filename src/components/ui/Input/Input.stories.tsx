import { Meta, StoryFn } from "@storybook/react";
import { Input } from "./Input";
import { IInput } from "./Input.types";

export default {
  title: "UI/Input",
  component: Input,
  parameters: {
    docs: {
      description: {
        component: "Input field for single-line strings.",
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
    placeholder: {
      control: { type: "text" },
    },
    children: {
      control: { type: "text" },
    },
    tabIndex: {
      control: { type: "number" },
    },
    type: {
      control: { type: "select" },
      options: ["text"],
    },
    variant: {
      control: { type: "select" },
      options: ["default", "success"],
    },
    required: {
      control: { type: "boolean" },
    },
    onFocus: {
      action: "clicked",
    },
    onKeyDown: {
      action: "clicked",
    },
    onChange: {
      action: "clicked",
    },
  },
} as Meta<typeof Input>;

const Template: StoryFn<IInput> = (args: IInput) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Text input",
  variant: "default",
};

export const Error = Template.bind({});
Error.args = {
  placeholder: "Text input",
  variant: "error",
};

export const Success = Template.bind({});
Success.args = {
  placeholder: "Text input",
  variant: "success",
};
