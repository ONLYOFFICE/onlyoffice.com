import { useState } from "react";
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
    status: {
      control: { type: "select" },
      options: ["default", "success"],
    },
    required: {
      control: { type: "boolean" },
    },
    name: {
      control: { type: "text" },
    },
    value: {
      control: { type: "text" },
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
    fullWidth: {
      control: { type: "boolean" },
    },
  },
} as Meta<typeof TextArea>;

const Template: StoryFn<ITextArea> = (args: ITextArea) => {
  const [value, setValue] = useState("");

  return (
    <TextArea
      {...args}
      value={args.value ?? value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Description",
  status: "default",
};

export const Success = Template.bind({});
Success.args = {
  label: "Description",
  value: "Example text",
  status: "success",
};
