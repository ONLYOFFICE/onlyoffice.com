import { Meta, StoryFn } from "@storybook/react";
import { SocialButton } from "./SocialButton";
import { ISocialButton } from "./SocialButton.types";

export default {
  title: "UI/SocialButton",
  component: SocialButton,
  parameters: {
    docs: {
      description: {
        component:
          "The SocialButton component is used to display social media links.",
      },
    },
  },
  argTypes: {
    type: {
      control: "select",
      options: ["google", "zoom", "twitter", "linkedin", "facebook"],
    },
  },
} as Meta<typeof SocialButton>;

const Template: StoryFn<ISocialButton> = (args: ISocialButton) => (
  <SocialButton {...args} />
);

export const Google = Template.bind({});
Google.args = { type: "google", href: "/" };

export const Zoom = Template.bind({});
Zoom.args = { type: "zoom", href: "/" };

export const Twitter = Template.bind({});
Twitter.args = { type: "twitter", href: "/" };

export const LinkedIn = Template.bind({});
LinkedIn.args = { type: "linkedin", href: "/" };

export const Facebook = Template.bind({});
Facebook.args = { type: "facebook", href: "/" };
