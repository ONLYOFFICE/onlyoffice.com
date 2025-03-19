import { Meta, StoryFn } from "@storybook/react";
import { RoomTabs } from "./RoomTabs";

export default {
  title: "Modules/RoomTabs",
  component: RoomTabs,
  parameters: {
    docs: {
      description: {
        component:
          "RoomTabs displays a list of room categories as navigation links.",
      },
    },
  },
} as Meta<typeof RoomTabs>;

const Template: StoryFn = (args) => <RoomTabs {...args} />;

export const Default = Template.bind({});
