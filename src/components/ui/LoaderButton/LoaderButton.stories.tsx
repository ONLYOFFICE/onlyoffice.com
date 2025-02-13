import { Meta, StoryFn } from "@storybook/react";
import { LoaderButton } from "./LoaderButton";
import { ILoaderButton } from "./LoaderButton.types";

export default {
  title: "UI/LoaderButton",
  component: LoaderButton,
  parameters: {
    docs: {
      description: {
        component:
          "A button component that displays different states like `default`, `loading`, `success`, and `error`. Suitable for handling user interactions in dynamic forms.",
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
    children: {
      control: { type: "text" },
    },
    disabled: {
      control: { type: "boolean" },
      options: [true, false],
    },
    tabIndex: {
      control: { type: "number" },
    },
    type: {
      control: { type: "select" },
      options: ["button", "submit"],
    },
    fullWidth: {
      control: { type: "boolean" },
      options: [true, false],
    },
    variant: {
      control: { type: "select" },
      options: ["default", "loading", "success", "error"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium"],
    },
  },
} as Meta<typeof LoaderButton>;

const Template: StoryFn<ILoaderButton> = (args: ILoaderButton) => (
  <LoaderButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Submit",
  size: "medium",
  variant: "default",
};

export const Loading = Template.bind({});
Loading.args = {
  label: "Submit",
  size: "medium",
  variant: "loading",
};

export const Success = Template.bind({});
Success.args = {
  label: "Submit",
  size: "medium",
  variant: "success",
};

export const Error = Template.bind({});
Error.args = {
  label: "Submit",
  size: "medium",
  variant: "error",
};
