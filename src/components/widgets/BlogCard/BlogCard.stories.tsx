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
          "The BlogCard component is used to display a blog card with an image, heading, and related links.",
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
    heading: {
      control: { type: "text" },
    },
    links: {
      control: { type: "object" },
    },
  },
} as Meta<typeof BlogCard>;

const Template: StoryFn<IBlogCard> = (args: IBlogCard) => (
  <BlogCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  url: "https://www.onlyoffice.com/blog/2023/02/college-lycee-sacre-coeur-uses-onlyoffice-and-moodle",
  imgUrl: "/images/storybook/widgets/blog-card/story.jpg",
  heading:
    "How Collège-Lycée Sacré Cœur de Taravao ensures digital equality for all students using ONLYOFFICE and Moodle",
  links: [
    {
      href: "https://www.onlyoffice.com/blog/2023/02/college-lycee-sacre-coeur-uses-onlyoffice-and-moodle",
      label: "Read the full story",
    },
    {
      href: "https://www.youtube.com/watch?v=vNbFcqhJ7wI",
      label: "Watch a video version",
    },
  ],
};
