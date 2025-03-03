import { Meta, StoryObj } from "@storybook/react";
import StarRating from "./StarRating";

export default {
  title: "UI/StarRating",
  component: StarRating,
  argTypes: {
    rating: {
      control: { type: "number", min: 0, max: 5, step: 0.1 },
      description: "Значение рейтинга (0–5, с шагом 0.1)",
    }
  },
} as Meta<typeof StarRating>;

type Story = StoryObj<typeof StarRating>;

export const Default: Story = {
  args: {
    rating: 4.5,
  },
};
