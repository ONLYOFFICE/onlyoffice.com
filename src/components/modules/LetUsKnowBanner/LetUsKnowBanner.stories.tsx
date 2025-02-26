import { Meta, StoryFn } from "@storybook/react";
import { LetUsKnowBanner } from "./LetUsKnowBanner";
import { ILetUsKnowBanner } from "./LetUsKnowBanner.types";

export default {
  title: "Modules/LetUsKnowBanner",
  component: LetUsKnowBanner,
  parameters: {
    docs: {
      description: {
        component:
          "The LetUsKnowBanner component displays a heading and a mailto link for contacting sales.",
      },
    },
    argTypes: {
      id: {
        control: { type: "text" },
      },
      className: {
        control: { type: "text" },
      },
      heading: {
        control: { type: "text" },
      },
    },
  },
} as Meta<typeof LetUsKnowBanner>;

const Template: StoryFn<ILetUsKnowBanner> = (args: ILetUsKnowBanner) => (
  <LetUsKnowBanner {...args} />
);

export const Default = Template.bind({});
Default.args = {
  heading:
    "Need an app to connect ONLYOFFICE Docs to your favorite web service? Or have you developed one?",
};
