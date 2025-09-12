import { Meta, StoryFn } from "@storybook/react";
import { StarsRatingLogo } from "./StarsRatingLogo";
import { IStarsRatingLogo } from "./StarsRatingLogo.types";

import { getAssetUrl } from "@utils/getAssetUrl";
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
    image: {
      control: { type: "object" },
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
  image: {
    url: getAssetUrl("/images/storybook/widgets/stars-rating-logo/sourceforge.svg"),
    alt: "SourceForge",
    width: 150,
    height: 22,
  },
  value: 4.5,
};
