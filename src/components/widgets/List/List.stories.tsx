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
    className: {
      control: { type: "text" },
    },
    color: {
      control: { type: "color" },
    },
    gap: {
      control: { type: "text" },
    },
    lineHeight: {
      control: { type: "text" },
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
    {
      label: "Ideal for teamwork",
    },
    {
      label: "Secure for sensitive documents",
    },
    {
      label: (
        <>
          From <em>18%</em> commission <em>per sale</em>
        </>
      ),
    },
    {
      label: "Cost-effective for any budget",
    },
  ],
  color: "#333333",
  gap: "16px",
  lineHeight: "24px",
};
