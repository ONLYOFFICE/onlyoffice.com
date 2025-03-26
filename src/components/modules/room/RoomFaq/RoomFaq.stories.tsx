import { Meta, StoryFn } from "@storybook/react";
import { RoomFaq } from "./RoomFaq";

export default {
  title: "Modules/Room/RoomFaq",
  component: RoomFaq,
  parameters: {
    docs: {
      description: {
        component:
          "RoomFaq is a module that provides frequently asked questions (FAQs) related to collaboration rooms. It helps users quickly find answers to common queries about features, security, and usage.",
      },
    },
  },
} as Meta<typeof RoomFaq>;

const Template: StoryFn = (args) => <RoomFaq {...args} />;

export const Default = Template.bind({});
