import { Meta, StoryFn } from "@storybook/react";
import { SocialButton } from "./SocialButton";
import { ISocialButton } from "./SocialButton.type";

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
    icon: {
      control: "select",
      options: ["google", "zoom", "twitter", "linkedin", "facebook"],
    },
  },
} as Meta<typeof SocialButton>;

const Template: StoryFn<ISocialButton> = (args: ISocialButton) => (
  <SocialButton {...args} />
);

export const Google = Template.bind({});
Google.args = { icon: "google", href: "/" };

export const Zoom = Template.bind({});
Zoom.args = { icon: "zoom", href: "/" };

export const Twitter = Template.bind({});
Twitter.args = { icon: "twitter", href: "/" };

export const LinkedIn = Template.bind({});
LinkedIn.args = { icon: "linkedin", href: "/" };

export const Facebook = Template.bind({});
LinkedIn.args = { icon: "facebook", href: "/" };
