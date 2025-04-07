import { Meta, StoryFn } from "@storybook/react";
import { RoomsFaq } from "./RoomsFaq";

export default {
  title: "Modules/Rooms/RoomsFaq",
  component: RoomsFaq,
  parameters: {
    docs: {
      description: {
        component:
          "RoomsFaq is a module that provides frequently asked questions (FAQs) related to collaboration rooms. It helps users quickly find answers to common queries about features, security, and usage.",
      },
    },
  },
} as Meta<typeof RoomsFaq>;

const Template: StoryFn = (args) => <RoomsFaq {...args} />;

export const Default = Template.bind({});
