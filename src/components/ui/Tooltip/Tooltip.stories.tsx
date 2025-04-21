import { Meta, StoryFn } from "@storybook/react";
import { Tooltip } from "./Tooltip";
import { ITooltip } from "./Tooltip.types";

export default {
  title: "UI/Tooltip",
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: "Tooltip. Pop-up window.",
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
    content: {
      control: { type: "text" },
    },
    children: {
      control: { type: "text" },
    },
    tabIndex: {
      control: { type: "number" },
    },
    float: {
      control: { type: "boolean" },
      options: [true, false],
    },
    offset: {
      control: { type: "number" },
    },
    place: {
      control: { type: "select" },
      options: [
        "top",
        "top-start",
        "top-end",
        "right",
        "right-start",
        "right-end",
        "bottom",
        "bottom-start",
        "bottom-end",
        "left",
        "left-start",
        "left-end",
      ],
    },
    width: {
      control: { type: "text" },
    },
  },
} as Meta<typeof Tooltip>;

const Template: StoryFn<ITooltip> = (args: ITooltip) => <Tooltip {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "tooltip",
  content: "Tooltip content",
  children: "Tooltip btn",
};
