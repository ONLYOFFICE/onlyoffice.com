import { Meta, StoryFn } from "@storybook/react";
import { BlogCard } from "./BlogCard";
import { IBlogCard } from "./BlogCard.types";

export default {
  title: "Widgets/BlogCard",
  component: BlogCard,
  parameters: {
    docs: {
      description: {
        component:
          "The BlogCard component displays a blog card with an image, heading, and link to an external URL.",
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
} as Meta<typeof BlogCard>;

const Template: StoryFn<IBlogCard> = (args: IBlogCard) => (
  <BlogCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  linkUrl:
    "https://www.onlyoffice.com/blog/2023/11/how-kinderhaus-berlin-is-using-onlyoffice-docspace",
  heading:
    "How Kinderhaus Berlin shares and collaborates on sensitive files with ONLYOFFICE DocSpace",
  imgUrl: "/images/storybook/widgets/blog-card/kinderhaus.jpg",
};
