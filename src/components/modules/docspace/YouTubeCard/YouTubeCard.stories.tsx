import { Meta, StoryFn } from "@storybook/react";
import { YouTubeCard } from "./YouTubeCard";
import { IYouTubeCard } from "./YouTubeCard.types";

export default {
  title: "Widgets/YouTubeCard",
  component: YouTubeCard,
  parameters: {
    docs: {
      description: {
        component:
          "A component that displays a preview image for a video and opens a modal with the video when clicked.",
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
    videoImgUrl: {
      control: { type: "text" },
    },
    videoUrl: {
      control: { type: "text" },
    },
    borderRadius: {
      control: { type: "text" },
    },
    border: {
      control: { type: "boolean" },
    },
  },
} as Meta<typeof YouTubeCard>;

const Template: StoryFn<IYouTubeCard> = (args: IYouTubeCard) => (
  <YouTubeCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  videoImgUrl: "/images/storybook/widgets/watch-video/confluence.jpg",
  videoUrl: "https://youtube.com/embed/bPorM--L11o",
};
