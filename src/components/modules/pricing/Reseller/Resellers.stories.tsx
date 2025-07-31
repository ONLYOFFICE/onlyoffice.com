import { Meta, StoryFn } from "@storybook/react";
import { Reseller } from "./Reseller";

export default {
  title: "Modules/Pricing/Reseller",
  component: Reseller,
  parameters: {
    docs: {
      description: {
        component: "Reseller block",
      },
    },
  },
} as Meta<typeof Reseller>;

const Template: StoryFn = () => <Reseller />;

export const Default = Template.bind({});
