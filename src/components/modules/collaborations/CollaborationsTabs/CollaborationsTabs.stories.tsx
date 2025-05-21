import { Meta, StoryFn } from "@storybook/react";
import { CollaborationsTabs } from "./CollaborationsTabs";

export default {
  title: "Modules/Collaborations/CollaborationsTabs",
  component: CollaborationsTabs,
  parameters: {
    docs: {
      description: {
        component:
          "CollaborationsTabs displays a list of room categories as navigation links.",
      },
    },
  },
} as Meta<typeof CollaborationsTabs>;

const Template: StoryFn = (args) => <CollaborationsTabs {...args} />;

export const Default = Template.bind({});
