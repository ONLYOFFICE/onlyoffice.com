import { Meta, StoryFn } from "@storybook/react";
import { LazyBackgroundImage } from "./LazyBackgroundImage";
import { ILazyBackgroundImage } from "./LazyBackgroundImage.types";

export default {
  title: "UI/LazyBackgroundImage",
  component: LazyBackgroundImage,
  parameters: {
    docs: {
      description: {
        component: "LazyBackgroundImage используется для ленивой загрузки фоновых изображений.",
      },
    },
  },
  argTypes: {
    imageUrl: {
      control: { type: "text" },
      description: "URL изображения для загрузки",
    },
    placeholder: {
      control: { type: "text" },
      description: "URL изображения-заглушки",
    },
    position: {
      control: { type: "select" },
      options: ["center", "top", "bottom", "left", "right"],
      description: "Позиция фонового изображения",
    },
    size: {
      control: { type: "select" },
      options: ["cover", "contain", "auto"],
      description: "Размер фонового изображения",
    },
  },
} as Meta<typeof LazyBackgroundImage>;

const Template: StoryFn<typeof LazyBackgroundImage> = (args) => (
  <div style={{ width: "400px", height: "300px" }}>
    <LazyBackgroundImage {...args} style={{ width: "100%", height: "100%" }} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  imageUrl: "https://static-blog.onlyoffice.com/wp-content/uploads/2023/12/hackathon-winners-2023.jpg",
  position: "center",
  size: "cover",
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  ...Default.args,
  placeholder: "/images/templates/events/play-icon.svg",
};

export const ContainSize = Template.bind({});
ContainSize.args = {
  ...Default.args,
  size: "contain",
};
