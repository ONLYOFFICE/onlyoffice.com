import { Meta, StoryFn } from "@storybook/react";
import { ImageTabs } from "./ImageTabs";
import { IImageTabs } from "./ImageTabs.types";
import { Container } from "@src/components/ui/Container";

export default {
  title: "Widgets/ImageTabs",
  component: ImageTabs,
  parameters: {
    docs: {
      description: {
        component:
          "The ImageTabs component displays a list of tabs with images.",
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
    items: {
      control: {
        type: "object",
      },
    },
    position: {
      control: { type: "radio" },
      options: ["left", "right"],
    },
  },
} as Meta<typeof ImageTabs>;

const Template: StoryFn<IImageTabs> = (args: IImageTabs) => (
  <Container>
    <ImageTabs {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      label: "View, edit and collaborate on docs, sheets, slides",
      images: {
        url: "/images/storybook/widgets/image-tabs/actions.png",
        url2x: "/images/storybook/widgets/image-tabs/actions@2x.png",
      },
    },
    {
      label: "Build fillable PDF forms and fill in them online",
      images: {
        url: "/images/storybook/widgets/image-tabs/pdf-forms.png",
        url2x: "/images/storybook/widgets/image-tabs/pdf-forms@2x.png",
      },
    },
  ],
};
