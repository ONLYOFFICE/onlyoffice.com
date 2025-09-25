import { Meta, StoryFn } from "@storybook/react";
import { ContentImage } from "./ContentImage";
import { IContentImage } from "./ContentImage.types";
import { Container } from "@src/components/ui/Container";

import { getAssetUrl } from "@utils/getAssetUrl";
export default {
  title: "Widgets/ContentImage",
  component: ContentImage,
  parameters: {
    docs: {
      description: {
        component:
          "The ContentImage component that displays an image with customizable content",
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
    children: {
      control: { type: "text" },
    },
    contentWidth: {
      control: { type: "number" },
    },
    image: {
      control: { type: "object" },
    },
    gap: {
      control: { type: "object" },
    },
    position: {
      control: { type: "object" },
    },
  },
} as Meta<typeof ContentImage>;

const Template: StoryFn<IContentImage> = (args: IContentImage) => (
  <Container>
    <ContentImage {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  children: "Text",
  image: {
    url: getAssetUrl("/images/storybook/widgets/content-image/secure-for-sensitive-documents.png"),
  },
};
