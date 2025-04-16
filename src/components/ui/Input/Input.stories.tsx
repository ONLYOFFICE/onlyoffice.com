import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Input } from "./Input";
import { IInput } from "./Input.types";
import { SearchIcon } from "@src/components/icons";

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
    label: {
      control: { type: "text" },
    },
    placeholder: {
      control: { type: "text" },
    },
    tabIndex: {
      control: { type: "number" },
    },
    status: {
      control: { type: "select" },
      options: ["default", "success", "error"],
    },
    type: {
      control: { type: "select" },
      options: ["text", "number", "password", "tel", "email", "search"],
    },
    disabled: {
      control: { type: "boolean" },
      options: [true, false],
    },
    required: {
      control: { type: "boolean" },
      options: [true, false],
    },
    value: {
      control: { type: "text" },
    },
    name: {
      control: { type: "text" },
    },
    maxLength: {
      control: { type: "number" },
    },
    pattern: {
      control: { type: "text" },
    },
    autoFocus: {
      control: { type: "boolean" },
      options: [true, false],
    },
    active: {
      control: { type: "boolean" },
      options: [true, false],
    },
    caption: {
      control: { type: "text" },
    },
    leftSide: {
      control: { type: "text" },
    },
    rightSide: {
      control: { type: "text" },
    },
  },
} as Meta<typeof Input>;

const Template: StoryFn<IInput> = (args: IInput) => {
  const [value, setValue] = useState(args.value || "");

  return (
    <Input
      {...args}
      value={args.value ?? value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Success = Template.bind({});
Success.args = {
  status: "success",
};

export const Error = Template.bind({});
Error.args = {
  status: "error",
  caption: "This field can’t be empty",
};

export const SimpleInput = Template.bind({});
SimpleInput.args = {
  label: "First name",
  placeholder: "Marina",
};

export const WithLeftSide = Template.bind({});
WithLeftSide.args = {
  ...SimpleInput.args,
  leftSide: <SearchIcon />,
};

export const WithRightSide = Template.bind({});
WithRightSide.args = {
  ...SimpleInput.args,
  rightSide: <SearchIcon />,
};
