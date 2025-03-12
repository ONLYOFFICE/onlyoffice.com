import type { Meta, StoryObj } from "@storybook/react";
import { List } from "./List";

export default {
  title: "Widgets/List",
  component: List,
  parameters: {
    docs: {
      description: {
        component: "The List component displays a list of features.",
      },
    },
  },
  argTypes: {
    items: {
      control: {
        type: "object",
      },
    },
    color: {
      control: { type: "color" },
    },
    paddingBottom: {
      control: { type: "text" },
    },
    lineHeight: {
      control: { type: "text" },
    },
    isBullet: {
      control: { type: "boolean" },
    },
    bulletType: {
      control: { type: "radio" },
      options: ["rhombus", "check"],
    },
  },
} as Meta<typeof List>;

type Story = StoryObj<typeof List>;

export const Default: Story = {};
Default.args = {
  items: [
    "Ideal for teamwork",
    "Secure for sensitive documents",
    <>
      From <em>18%</em> commission <em>per sale</em>
    </>,
    "Cost-effective for any budget",
  ],
  color: "#333333",
  paddingBottom: "16px",
  lineHeight: "24px",
};
