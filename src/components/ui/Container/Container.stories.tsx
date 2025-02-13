import { Meta, StoryFn } from "@storybook/react";
import { Container } from "./Container";
import { IContainer } from "./Container.types";

export default {
  title: "UI/Container",
  component: Container,
  parameters: {
    docs: {
      description: {
        component:
          "Container is a layout component that provides consistent spacing and padding across different screen sizes.",
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
    desktopSpacing: {
      control: { type: "text" },
    },
    tabletSpacing: {
      control: { type: "text" },
    },
    mobileSpacing: {
      control: { type: "text" },
    },
  },
} as Meta<typeof Container>;

const Template: StoryFn<IContainer> = (args: IContainer) => (
  <Container {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Container",
};
