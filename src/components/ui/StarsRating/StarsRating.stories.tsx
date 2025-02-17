import { Meta, StoryFn } from "@storybook/react";
import { StarsRating } from "./StarsRating";
import { IStarsRating } from "./StarsRating.types";

export default {
  title: "UI/StarsRating",
  component: StarsRating,
  parameters: {
    docs: {
      description: {
        component:
          "A component to display a star rating. The rating is represented as a percentage (0-100).",
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
    value: {
      control: {
        type: "number",
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
} as Meta<typeof StarsRating>;

const Template: StoryFn<IStarsRating> = (args: IStarsRating) => (
  <StarsRating {...args} />
);

export const Default = Template.bind({});
