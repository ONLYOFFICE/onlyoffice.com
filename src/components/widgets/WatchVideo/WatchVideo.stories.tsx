import { Meta, StoryFn } from "@storybook/react";
import { WatchVideo } from "./WatchVideo";
import { IWatchVideo } from "./WatchVideo.types";

export default {
  title: "Widgets/WatchVideo",
  component: WatchVideo,
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
    heading: {
      control: { type: "text" },
    },
  },
} as Meta<typeof WatchVideo>;

const Template: StoryFn<IWatchVideo> = (args: IWatchVideo) => (
  <WatchVideo {...args} />
);

export const Default = Template.bind({});
Default.args = {
  videoImgUrl: "/images/storybook/widgets/watch-video/confluence.jpg",
  videoUrl: "https://youtube.com/embed/bPorM--L11o",
  heading: "How to connect ONLYOFFICE Docs to Confluence",
};
