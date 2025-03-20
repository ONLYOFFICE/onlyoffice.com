import { Meta, StoryFn } from "@storybook/react";
import { TextArea } from "./TextArea";
import { ITextArea } from "./TextArea.types";

export default {
  title: "UI/TextArea",
  component: TextArea,
  parameters: {
    docs: {
      description: {
        component: "Textarea field for multi-line strings.",
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
    variant: {
      control: { type: "select" },
      options: ["default", "success"],
    },
    fullWidth: {
      control: { type: "boolean" },
    },
    cols: {
      control: { type: "number" },
    },
    rows: {
      control: { type: "number" },
    },
    maxLength: {
      control: { type: "number" },
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
} as Meta<typeof TextArea>;

const Template: StoryFn<ITextArea> = (args: ITextArea) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Textarea",
  variant: "default",
};

export const Success = Template.bind({});
Success.args = {
  label: "Textarea",
  value: "Correct text",
  variant: "success",
};
