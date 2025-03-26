import { Meta, StoryFn } from "@storybook/react";
import { RoomHero } from "./RoomHero";
import { IRoomHero } from "./RoomHero.types";

export default {
  title: "Modules/Room/RoomHero",
  component: RoomHero,
  parameters: {
    docs: {
      description: {
        component:
          "RoomHero is a universal hero section component designed for collaboration rooms",
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
  },
} as Meta;

const Template: StoryFn<IRoomHero> = (args) => <RoomHero {...args} />;

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
  imgUrl: "/images/storybook/modules/room/room-hero/room-hero.png",
  imgUrl2x: "/images/storybook/modules/room/room-hero/room-hero@2x.png",
};
