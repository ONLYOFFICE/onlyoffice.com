import { Meta, StoryFn } from "@storybook/react";
import { RoomGetStarted } from "./RoomGetStarted";

export default {
  title: "Modules/Room/RoomGetStarted",
  component: RoomGetStarted,
  parameters: {
    docs: {
      description: {
        component:
          "RoomGetStarted is a module designed to guide users through the process of getting started with collaboration rooms. It provides an intuitive layout and actionable steps to help users quickly set up and explore the features available.",
      },
    },
  },
} as Meta<typeof RoomGetStarted>;

const Template: StoryFn = (args) => <RoomGetStarted {...args} />;

export const Default = Template.bind({});
