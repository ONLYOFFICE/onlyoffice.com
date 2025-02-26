import { Meta, StoryFn } from "@storybook/react";
import { StepCarousel } from "./StepCarousel";
import { IStepCarousel } from "./StepCarousel.types";

export default {
  title: "Modules/StepCarousel",
  component: StepCarousel,
  parameters: {
    docs: {
      description: {
        component:
          "The StepCarousel component displays a carousel list of steps.",
      },
    },
    argTypes: {
      id: {
        control: { type: "text" },
      },
      className: {
        control: { type: "text" },
      },
      items: {
        control: {
          type: "object",
        },
      },
    },
  },
} as Meta<typeof StepCarousel>;

const Template: StoryFn<IStepCarousel> = (args: IStepCarousel) => (
  <StepCarousel {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      imgUrl: "/images/storybook/modules/step-carousel/step-1.svg",
      heading: "Log into your Box account",
    },
    {
      imgUrl: "/images/storybook/modules/step-carousel/step-2.svg",
      heading: "Go to the Box App Center",
    },
    {
      imgUrl: "/images/storybook/modules/step-carousel/step-3.svg",
      heading: "Add the ONLYOFFICE app*",
    },
  ],
};
