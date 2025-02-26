import { Meta, StoryFn } from "@storybook/react";
import { FaqCollapse } from "./FaqCollapse";
import { IFaqCollapse } from "./FaqCollapse.types";

export default {
  title: "Modules/FaqCollapse",
  component: FaqCollapse,
  parameters: {
    docs: {
      description: {
        component:
          "The FaqCollapse component displays a list of Frequently Asked Questions.",
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
    text: {
      control: { type: "text" },
    },
    items: {
      control: {
        type: "object",
      },
    },
    isAccordion: {
      control: { type: "boolean" },
      options: [true, false],
    },
    desktopSpacing: {
      control: { type: "object" },
    },
    tabletSpacing: {
      control: { type: "object" },
    },
    tabletSmallSpacing: {
      control: { type: "object" },
    },
    mobileSpacing: {
      control: { type: "object" },
    },
  },
} as Meta<typeof FaqCollapse>;

const Template: StoryFn<IFaqCollapse> = (args: IFaqCollapse) => (
  <FaqCollapse {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      label: "Item 1",
      content: "Content 1",
    },
    {
      label: "Item 2",
      content: "Content 2",
    },
  ],
};
