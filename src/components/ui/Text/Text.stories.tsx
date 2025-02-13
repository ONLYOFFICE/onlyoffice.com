import { Meta, StoryFn } from "@storybook/react";
import { Text } from "./Text";
import { IText } from "./Text.types";

export default {
  title: "UI/Text",
  component: Text,
  parameters: {
    docs: {
      description: {
        component:
          "The Text component is a versatile component for rendering styled text in various formats.",
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
    as: {
      control: { type: "text" },
    },
    size: {
      control: { type: "select" },
      options: [1, 2, 3, 4],
    },
    display: {
      control: { type: "select" },
      options: ["block", "inline-block", "inline", "flex", "inline-flex"],
    },
    fontSize: {
      control: { type: "text" },
    },
    fontWeight: {
      control: { type: "select" },
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    lineHeight: {
      control: { type: "text" },
    },
    color: {
      control: { type: "color" },
    },
    textAlign: {
      control: { type: "select" },
      options: ["left", "center", "right"],
    },
    textTransform: {
      control: { type: "select" },
      options: ["uppercase", "lowercase", "capitalize"],
    },
  },
} as Meta<typeof Text>;

const Template: StoryFn<IText> = (args: IText) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Text",
};
