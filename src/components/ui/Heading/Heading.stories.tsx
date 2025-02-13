import { Meta, StoryFn } from "@storybook/react";
import { Heading } from "./Heading";
import { IHeading } from "./Heading.types";

export default {
  title: "UI/Heading",
  component: Heading,
  parameters: {
    docs: {
      description: {
        component: "Heading text structured in levels.",
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
    color: {
      control: { type: "color" },
    },
    level: {
      control: { type: "select" },
      options: [1, 2, 3, 4, 5, 6],
    },
    size: {
      control: { type: "select" },
      options: [1, 2, 3, 4, 5, 6, 7],
    },
    textAlign: {
      control: { type: "select" },
      options: ["left", "center", "right"],
    },
  },
} as Meta<typeof Heading>;

const Template: StoryFn<IHeading> = (args: IHeading) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Heading",
};
