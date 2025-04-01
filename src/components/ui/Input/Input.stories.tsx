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
    variant: {
      control: { type: "select" },
      options: ["search", "password"],
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
    defaultValue: {
      control: { type: "text" },
    },
    name: {
      control: { type: "text" },
    },
    autoFocus: {
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
    withClearButton: {
      control: { type: "boolean" },
      options: [true, false],
    },
  },
} as Meta<typeof Input>;

const Template: StoryFn<IInput> = (args: IInput) => {
  return <Input {...args} />;
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
  label: "Firt name",
  placeholder: "Marina",
};

export const Search = Template.bind({});
Search.args = {
  label: "Search on site",
  placeholder: "Download",
  variant: "search",
};

export const Password = Template.bind({});
Password.args = {
  label: "Password",
  variant: "password",
};

export const WithClearButton = Template.bind({});
WithClearButton.args = {
  ...SimpleInput.args,
  withClearButton: true,
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
