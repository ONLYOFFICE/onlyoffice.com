import { Meta, StoryFn } from "@storybook/react";
import { HCaptcha } from "./HCaptcha";
import { IHCaptcha } from "./HCaptcha.types";

export default {
  title: "Widgets/HCaptcha",
  component: HCaptcha,
  parameters: {
    docs: {
      description: {
        component: "The HCaptcha component displays a hCaptcha.",
      },
    },
  },
} as Meta<typeof HCaptcha>;

const Template: StoryFn<IHCaptcha> = (args: IHCaptcha) => {
  return <HCaptcha {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
