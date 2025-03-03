import { Meta, StoryFn } from "@storybook/react";
import { Badge } from "./Badge";
import { IBadge } from "./Badge.types";

export default {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: "The Badge component is used to display labels.",
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
  },
} as Meta<typeof Badge>;

const Template: StoryFn<IBadge> = (args: IBadge) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Free",
};
