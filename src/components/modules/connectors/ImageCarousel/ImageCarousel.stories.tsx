import { Meta, StoryFn } from "@storybook/react";
import { ImageCarousel } from "./ImageCarousel";
import { IImageCarousel } from "./ImageCarousel.types";
import { Container } from "@src/components/ui/Container";

export default {
  title: "Widgets/ImageCarousel",
  component: ImageCarousel,
  parameters: {
    docs: {
      description: {
        component:
          "The ImageCarousel component displays a carousel list of images.",
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
      imageWidth: {
        control: { type: "number" },
      },
      imageHeight: {
        control: { type: "number" },
      },
    },
  },
} as Meta<typeof ImageCarousel>;

const Template: StoryFn<IImageCarousel> = (args: IImageCarousel) => (
  <Container>
    <ImageCarousel {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      image: {
        url: "/images/storybook/widgets/image-carousel/screen1.svg",
        url2x: "/images/storybook/widgets/image-carousel/screen1@2x.svg",
      },
    },
    {
      image: {
        url: "/images/storybook/widgets/image-carousel/screen2.svg",
        url2x: "/images/storybook/widgets/image-carousel/screen2@2x.svg",
      },
    },
  ],
};
