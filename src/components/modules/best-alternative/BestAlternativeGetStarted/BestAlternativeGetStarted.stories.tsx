import { Meta, StoryFn } from "@storybook/react";
import { BestAlternativeGetStarted } from "./BestAlternativeGetStarted";

export default {
  title: "Modules/best-alternative/BestAlternativeGetStarted",
  component: BestAlternativeGetStarted,
  parameters: {
    docs: {
      description: {
        component:
          "The BestAlternativeGetStarted component guides users to select the best solution and workspace.",
      },
    },
  },
} as Meta;

const Template: StoryFn = () => <BestAlternativeGetStarted />;

export const Default = Template.bind({});
