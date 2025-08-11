import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { SubscribeInput } from "./SubscribeInput";
import { ISubscribeInput } from "./SubscribeInput.types";

export default {
  title: "Widgets/SubscribeInput",
  component: SubscribeInput,
  parameters: {
    docs: {
      description: {
        component:
          "A composite input component that includes a text field and a submit button, commonly used for newsletter subscriptions or email collection forms.",
      },
    },
  },
  argTypes: {
    value: {
      control: { type: "text" },
    },
    label: {
      control: { type: "text" },
    },
    placeholder: {
      control: { type: "text" },
    },
    status: {
      control: { type: "select" },
      options: ["default", "loading", "success", "error"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    caption: {
      control: { type: "text" },
    },
    autoFocus: {
      control: { type: "boolean" },
    },
    buttonContent: {
      control: { type: "object" },
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary"],
    },
  },
} as Meta<typeof SubscribeInput>;

const Template: StoryFn<ISubscribeInput> = (args: ISubscribeInput) => {
  const [value, setValue] = useState(args.value || "");

  return (
    <SubscribeInput
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};

export const buttonContent = Template.bind({});
buttonContent.args = {
  buttonContent: "Subscribe",
};
