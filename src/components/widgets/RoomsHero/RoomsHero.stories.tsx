import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { RoomsHero } from "./RoomsHero";
import { IRoomsHero } from "./RoomsHero.types";

export default {
  title: "widgets/RoomsHero",
  component: RoomsHero,
  parameters: {
    docs: {
      description: {
        component:
          "RoomsHero is a universal hero section component designed for collaboration rooms",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
    },
    text: {
      control: "text",
    },
    button: {
      control: "object",
    },
    items: { control: "object" },
    imgUrl: { control: "text" },
    imgUrl2x: { control: "text" },
    imgWidth: { control: "number" },
    imgHeight: { control: "number" },
  },
} as Meta;

const Template: StoryFn<IRoomsHero> = (args) => <RoomsHero {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Simplify file sharing with external users in public rooms",
  text: "Easily interact with third-parties in ONLYOFFICE DocSpace",
  items: [
    { label: "Ideal for public sharing" },
    { label: "Absolutely safe for your office files" },
    { label: "Easy to store where you want" },
    { label: "Seamlessly embeddable" },
    { label: "Cost-effective for any budget" },
  ],
  button: {
    id: "create-free-account",
    label: "Create free account",
    href: "/docspace-registration",
  },
  imgUrl: "/images/templates/public-rooms/hero/public-rooms-header.png",
  imgUrl2x: "/images/templates/public-rooms/hero/public-rooms-header@2x.png",
  imgWidth: 672,
  imgHeight: 730,
};

export const RightPosition = Template.bind({});
RightPosition.args = {
  ...Default.args,
};
