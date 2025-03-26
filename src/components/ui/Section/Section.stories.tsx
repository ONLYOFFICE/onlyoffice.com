import { Meta, StoryFn } from "@storybook/react";
import { Section } from "./Section";
import { ISection } from "./Section.types";

export default {
  title: "UI/Section",
  component: Section,
  parameters: {
    docs: {
      description: {
        component:
          "The Section component serves as a layout structure for grouping content.",
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
    children: {
      control: { type: "text" },
    },
    as: {
      control: { type: "text" },
    },
    background: {
      control: { type: "color" },
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
} as Meta<typeof Section>;

const Template: StoryFn<ISection> = (args: ISection) => <Section {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Section",
};
