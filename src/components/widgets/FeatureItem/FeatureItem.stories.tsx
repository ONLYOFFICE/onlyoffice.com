import { Meta, StoryFn } from "@storybook/react";
import { FeatureItem } from "./FeatureItem";
import { IFeatureItem } from "./FeatureItem.types";

export default {
  title: "Widgets/FeatureItem",
  component: FeatureItem,
  parameters: {
    docs: {
      description: {
        component: "The FeatureItem component displays a feature item.",
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
    icon: {
      control: { type: "text" },
    },
    iconPositionX: {
      control: { type: "text" },
    },
    iconPositionY: {
      control: { type: "text" },
    },
    heading: {
      control: { type: "text" },
    },
  },
} as Meta<typeof FeatureItem>;

const Template: StoryFn<IFeatureItem> = (args: IFeatureItem) => (
  <FeatureItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  icon: "/images/storybook/widgets/feature-item/working.svg",
  heading: "Working with office files directly within the Box frontend",
};
