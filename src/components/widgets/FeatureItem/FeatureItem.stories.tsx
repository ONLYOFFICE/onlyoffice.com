import React from "react";
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
      control: {
        type: "radio",
        options: ["vertical", "horizontal"],
      },
    },
    title: { control: "text" },
    text: { control: "text" },
    sprite: { control: "text" },
    icon: { control: "text" },
    iconPositionX: { control: "text" },
    iconPositionY: { control: "text" },
  },
} as Meta<typeof FeatureItem>;

const Template: StoryFn<typeof FeatureItem> = (args: IFeatureItem) => (
  <FeatureItem {...args} />
);

export const vertical = Template.bind({});
vertical.args = {
  variant: "vertical",
  icon: "/images/storybook/widgets/feature-item/working.svg",
  text: "Working with office files directly within the Box frontend",
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  variant: "horizontal",
  icon: "/images/storybook/widgets/feature-item/working.svg",
  title: "It’s free",
  text: "No need to save on food or drinks just to be able to work on your assignment with a potent office suite. We’ve got your back – for students, ONLYOFFICE is completely free.",
};

export const WithSprite = Template.bind({});
WithSprite.args = {
  variant: "vertical",
  sprite: "/images/storybook/widgets/feature-item/features.svg",
  text: "Working with office files directly within the Box frontend",
  iconPositionX: "-20px",
  iconPositionY: "center",
};
