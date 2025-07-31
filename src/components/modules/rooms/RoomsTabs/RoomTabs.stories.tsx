import { Meta, StoryFn } from "@storybook/react";
import { RoomsTabs } from "./RoomsTabs";

export default {
  title: "Modules/Rooms/RoomsTabs",
  component: RoomsTabs,
  parameters: {
    docs: {
      description: {
        component:
          "RoomsTabs displays a list of room categories as navigation links.",
      },
    },
  },
} as Meta<typeof RoomsTabs>;

const Template: StoryFn = (args) => <RoomsTabs {...args} />;

export const Default = Template.bind({});
