import { Meta, StoryFn } from "@storybook/react";
import { IFeatureImageItem } from "./FeatureImageItem.types";
import { FeatureImageItem } from "./FeatureImageItem";

export default {
  title: "widgets/FeatureImageItem",
  component: FeatureImageItem,
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
    title: {
      control: "text",
    },
    text: {
      control: "object",
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

const Template: StoryFn<IFeatureImageItem> = (args) => (
  <FeatureImageItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Secure for sensitive documents",
  text: {
    label:
      "Protect your files by setting access level to define which actions will be available to the invited people: Room managers with access management rights, Content creators with access to manage room files/folders, Editors with full access to the room files, or Viewers with read-only access.",
  },
  links: [{ href: "#", label: "Learn More" }],
  image: {
    url: "/images/storybook/widgets/feature-image-item/secure-for-sensitive-documents.png",
    url2x:
      "/images/storybook/widgets/feature-image-item/secure-for-sensitive-documents@2x.png",
  },
};
