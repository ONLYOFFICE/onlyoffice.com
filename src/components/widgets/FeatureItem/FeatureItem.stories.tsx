import { FeatureItem } from "./FeatureItem";
import { IFeatureItem } from "./FeatureItem.types";
import { Meta, StoryFn } from "@storybook/react";

import { getAssetUrl } from "@utils/getAssetUrl";
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
    mobileVariant: {
      control: {
        type: "select",
        options: [
          "horizontal-icon-top",
          "horizontal-icon-left",
          "horizontal-icon-center",
          "vertical",
        ],
      },
    },
    icon: {
      control: { type: "object" },
    },
    maxWidth: { control: "text" },
    heading: { control: "text" },
    text: { control: "text" },
  },
} as Meta<typeof FeatureItem>;

const Template: StoryFn<IFeatureItem> = (args: IFeatureItem) => (
  <FeatureItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  icon: { url: getAssetUrl("/images/storybook/widgets/feature-item/working.svg") },
  text: "Working with office files directly within the Box frontend",
};

export const Vertical = Template.bind({});
Vertical.args = {
  variant: "vertical",
  icon: { url: getAssetUrl("/images/storybook/widgets/feature-item/working.svg") },
  heading: "Heading",
  text: "Working with office files directly within the Box frontend",
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  variant: "horizontal",
  icon: { url: getAssetUrl("/images/storybook/widgets/feature-item/working.svg") },
  heading: "Heading",
  text: "Working with office files directly within the Box frontend",
};
