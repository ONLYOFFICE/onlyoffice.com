import { FeatureItem } from "./FeatureItem";
import { IFeatureItem } from "./FeatureItem.types";
import { Meta, StoryFn } from "@storybook/react";

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
    variant: {
      control: { type: "select", options: ["horizontal", "vertical"] },
    },
    icon: {
      control: { type: "object" },
    },
    heading: { control: "text" },
    text: { control: "text" },
    links: {
      control: { type: "object" },
    },
  },
} as Meta<typeof FeatureItem>;

const Template: StoryFn<IFeatureItem> = (args: IFeatureItem) => (
  <FeatureItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  icon: { url: "/images/storybook/widgets/feature-item/working.svg" },
  text: "Working with office files directly within the Box frontend",
};

export const Vertical = Template.bind({});
Vertical.args = {
  variant: "vertical",
  icon: { url: "/images/storybook/widgets/feature-item/working.svg" },
  text: "Working with office files directly within the Box frontend",
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  variant: "horizontal",
  icon: { url: "/images/storybook/widgets/feature-item/working.svg" },
  heading: "It’s free",
  text: "No need to save on food or drinks just to be able to work on your assignment with a potent office suite. We’ve got your back – for students, ONLYOFFICE is completely free.",
};
