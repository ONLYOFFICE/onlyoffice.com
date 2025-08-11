import { Meta, StoryFn } from "@storybook/react";
import { RoomsHeroVideo } from "./RoomsHeroVideo";
import { IRoomsHeroVideo } from "./RoomsHeroVideo.types";

export default {
  title: "Modules/Rooms/RoomsHeroVideo",
  component: RoomsHeroVideo,
  parameters: {
    docs: {
      description: {
        component:
          "RoomsHeroVideo is a universal hero section component designed for collaboration rooms with video support",
      },
    },
  },
  argTypes: {
    heading: {
      control: "text",
    },
    text: {
      control: "text",
    },
    button: {
      control: "object",
    },
    items: { control: "object" },
    image: { control: "object" },
  },
} as Meta;

const Template: StoryFn<IRoomsHeroVideo> = (args) => <RoomsHeroVideo {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: "Simplify file sharing with external users in public rooms",
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
  image: {
    url: "/images/storybook/modules/rooms/rooms-hero/rooms-hero.png",
    url2x: "/images/storybook/modules/rooms/rooms-hero/rooms-hero@2x.png",
  },
};
