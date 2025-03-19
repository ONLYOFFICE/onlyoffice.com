import { Meta, StoryFn } from "@storybook/react";
import { RoomsGetStarted } from "./RoomsGetStarted";

export default {
  title: "Modules/RoomsGetStarted",
  component: RoomsGetStarted,
  parameters: {
    docs: {
      description: {
        component:
          "RoomsGetStarted is a module designed to guide users through the process of getting started with collaboration rooms. It provides an intuitive layout and actionable steps to help users quickly set up and explore the features available.",
      },
    },
  },
} as Meta<typeof RoomsGetStarted>;

const Template: StoryFn = (args) => <RoomsGetStarted {...args} />;

export const Default = Template.bind({});
