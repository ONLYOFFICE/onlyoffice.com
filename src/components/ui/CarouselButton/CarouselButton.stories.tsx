import { Meta, StoryFn } from "@storybook/react";
import { CarouselButton } from "./CarouselButton";
import { ICarouselButton } from "./CarouselButton.types";

export default {
  title: "UI/CarouselButton",
  component: CarouselButton,
  parameters: {
    docs: {
      description: {
        component:
          "The CarouselButton component is used to navigate through a carousel.",
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
    direction: {
      control: { type: "radio" },
      options: ["left", "right"],
    },
  },
} as Meta<typeof CarouselButton>;

const Template: StoryFn<ICarouselButton> = (args: ICarouselButton) => (
  <CarouselButton {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const DirectionLeft = Template.bind({});
DirectionLeft.args = {
  direction: "left",
};

export const DirectionRight = Template.bind({});
DirectionRight.args = {
  direction: "right",
};
