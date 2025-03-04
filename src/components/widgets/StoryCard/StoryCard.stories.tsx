import { Meta, StoryFn } from "@storybook/react";
import { StoryCard } from "./StoryCard";
import { IStoryCard } from "./StoryCard.types";

export default {
  title: "Widgets/StoryCard",
  component: StoryCard,
  parameters: {
    docs: {
      description: {
        component:
          "The StoryCard component displays a Story card with an image, heading, and link to an external URL.",
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
    linkUrl: {
      control: { type: "text" },
    },
    heading: {
      control: { type: "text" },
    },
    imgUrl: {
      control: { type: "text" },
    },
  },
} as Meta<typeof StoryCard>;

const Template: StoryFn<IStoryCard> = (args: IStoryCard) => (
  <StoryCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  linkUrl:
    "https://www.onlyoffice.com/blog/2023/11/how-kinderhaus-berlin-is-using-onlyoffice-docspace",
  heading:
    "How Kinderhaus Berlin shares and collaborates on sensitive files with ONLYOFFICE DocSpace",
  imgUrl: "/images/storybook/widgets/story-card/kinderhaus.jpg",
};
