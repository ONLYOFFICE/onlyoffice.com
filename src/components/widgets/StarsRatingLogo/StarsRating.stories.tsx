import { Meta, StoryFn } from "@storybook/react";
import { StarsRatingLogo } from "./StarsRatingLogo";
import { IStarsRatingLogo } from "./StarsRatingLogo.types";

export default {
  title: "Widgets/StarsRatingLogo",
  component: StarsRatingLogo,
  parameters: {
    docs: {
      description: {
        component:
          "The StarsRatingLogo component displays a logo with a rating.",
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
    url: {
      control: { type: "text" },
    },
    imgUrl: {
      control: { type: "text" },
    },
    imgAlt: {
      control: { type: "text" },
    },
    imgWidth: {
      control: { type: "number" },
    },
    imgHeight: {
      control: { type: "number" },
    },
    value: {
      control: { type: "number" },
    },
    maxValue: {
      control: { type: "number" },
    },
  },
} as Meta<typeof StarsRatingLogo>;

const Template: StoryFn<IStarsRatingLogo> = (args: IStarsRatingLogo) => (
  <div style={{ maxWidth: "352px" }}>
    <StarsRatingLogo {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  url: "https://sourceforge.net/projects/teamlab/",
  imgUrl: "/images/storybook/widgets/stars-rating-logo/sourceforge.svg",
  imgAlt: "SourceForge",
  imgWidth: 150,
  imgHeight: 22,
  value: 4.5,
};
