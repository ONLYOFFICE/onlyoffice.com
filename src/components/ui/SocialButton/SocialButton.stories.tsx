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
    id: {
      control: { type: "text" },
    },
    className: {
      control: { type: "text" },
    },
    platform: {
      control: "select",
      options: ["google", "zoom", "x", "linkedin", "facebook"],
    },
    href: {
      control: { type: "text" },
    },
  },
} as Meta<typeof SocialButton>;

const Template: StoryFn<ISocialButton> = (args: ISocialButton) => (
  <SocialButton {...args} />
);

export const Google = Template.bind({});
Google.args = { platform: "google", href: "/" };

export const Zoom = Template.bind({});
Zoom.args = { platform: "zoom", href: "/" };

export const X = Template.bind({});
X.args = { platform: "x", href: "/" };

export const LinkedIn = Template.bind({});
LinkedIn.args = { platform: "linkedin", href: "/" };

export const Facebook = Template.bind({});
Facebook.args = { platform: "facebook", href: "/" };
