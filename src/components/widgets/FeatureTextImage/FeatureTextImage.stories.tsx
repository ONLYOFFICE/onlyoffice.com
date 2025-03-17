import React from "react";
import { IFeatureTextImage } from "./FeatureTextImage.types";
import { FeatureTextImage } from "./FeatureTextImage";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "widgets/FeatureTextImage",
  component: FeatureTextImage,
  parameters: {
    docs: {
      description: {
        component:
          "FeatureTextImage is a flexible component that displays a title, description text, and an image. It supports customizable positioning, responsive font sizes, and layout adjustments.",
      },
    },
  },
  argTypes: {
    text: {
      control: "object",
    },
    position: {
      control: { type: "radio" },
      options: ["left", "right"],
    },
    textGap: { control: "text" },
    gap: { control: "text" },
    contentWidth: { control: "text" },
    imageWidth: { control: "number" },
    imageHeight: { control: "number" },
  },
} as Meta;

const Template: StoryFn<IFeatureTextImage> = (args) => (
  <FeatureTextImage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: {
    label: "Secure for sensitive documents",
    fontSize: "24px",
    tabletFontSize: "20px",
    mobileFontSize: "18px",
  },
  text: {
    label:
      "Protect your files by setting access level to define which actions will be available to the invited people: Room managers with access management rights, Content creators with access to manage room files/folders, Editors with full access to the room files, or Viewers with read-only access.",
    tabletFontSize: "16px",
    mobileFontSize: "14px",
  },
  link: { href: "#", label: "Learn More" },
  image: {
    url: "/images/templates/collaboration-rooms/features/secure-for-sensitive-documents.png",
    url2x:
      "/images/templates/collaboration-rooms/features/secure-for-sensitive-documents@2x.png",
  },
  textGap: "16px",
  gap: "32px",
  contentWidth: "448px",
  imageWidth: 640,
  imageHeight: 518,
  position: "left",
};

export const RightPosition = Template.bind({});
RightPosition.args = {
  ...Default.args,
  position: "right",
};
