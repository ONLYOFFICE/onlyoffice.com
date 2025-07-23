import type { Meta, StoryFn } from "@storybook/react";
import { BestAlternativeCompare } from "./BestAlternativeCompare";
import { IBestAlternativeCompareProps } from "./BestAlternativeCompare.types";

export default {
  title: "Modules/Best-alternative/BestAlternativeCompare",
  component: BestAlternativeCompare,
  parameters: {
    docs: {
      description: {
        component:
          "The BestAlternativeCompare component encourages users to compare file editing experiences between ONLYOFFICE and an alternative solution.",
      },
    },
  },
  argTypes: {
    alternative: {
      control: { type: "text" },
    },
  },
} as Meta<typeof BestAlternativeCompare>;

const Template: StoryFn<IBestAlternativeCompareProps> = (args) => (
  <BestAlternativeCompare {...args} />
);

export const Default = Template.bind({});
Default.args = {
  alternative: "Google Docs",
};

export const ZohoDocs = Template.bind({});
ZohoDocs.args = {
  alternative: "Zoho Docs",
};
