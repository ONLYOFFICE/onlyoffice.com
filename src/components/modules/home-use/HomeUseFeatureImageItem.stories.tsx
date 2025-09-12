import { Meta, StoryFn } from "@storybook/react";
import { IHomeUseFeatureImageItem } from "./HomeUseFeatureImageItem.types";
import { HomeUseFeatureImageItem } from "./HomeUseFeatureImageItem";

import { getAssetUrl } from "@utils/getAssetUrl";
export default {
  title: "Modules/HomeUse/FeatureImageItem",
  component: HomeUseFeatureImageItem,
  parameters: {
    docs: {
      description: {
        component:
          "FeatureImageItem is a flexible component that displays a title, description text, and an image. It supports customizable positioning, responsive font sizes, and layout adjustments.",
      },
    },
  },
  argTypes: {
    id: {
      control: "text",
    },
    className: {
      control: "text",
    },
    heading: {
      control: "text",
    },
    text: {
      control: "text",
    },
    links: {
      control: "object",
    },
    image: {
      control: "object",
    },
    position: {
      control: "radio",
      options: ["left", "right"],
    },
  },
} as Meta;

const Template: StoryFn<IHomeUseFeatureImageItem> = (args) => (
  <HomeUseFeatureImageItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  heading: "Secure for sensitive documents",
  text: "Protect your files by setting access level to define which actions will be available to the invited people: Room managers with access management rights, Content creators with access to manage room files/folders, Editors with full access to the room files, or Viewers with read-only access.",
  links: [{ href: "#", label: "Learn More" }],
  image: {
    url: getAssetUrl("/images/storybook/widgets/feature-image-item/secure-for-sensitive-documents.png"),
    url2x:
      "/images/storybook/widgets/feature-image-item/secure-for-sensitive-documents@2x.png",
  },
};
