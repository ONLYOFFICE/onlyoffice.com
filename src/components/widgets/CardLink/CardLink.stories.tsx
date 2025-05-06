import { Meta, StoryFn } from "@storybook/react";
import { CardLink } from "./CardLink";

export default {
  title: "Widgets/CardLink",
  component: CardLink,
  parameters: {
    docs: {
      description: {
        component:
          "The CardLink component displays a card link. On mobile block will be scrollable in flex position. All item is a link.",
      },
    },
  },
  argTypes: {
    id: { control: { type: "text" } },
    className: { control: { type: "text" } },
    href: { control: { type: "text" } },
    title: { control: { type: "text" } },
    text: { control: { type: "text" } },
    subtitle: { control: { type: "text" } },
    widthDesktop: { control: { type: "text" } },
    widthTablet: { control: { type: "text" } },
    widthTabletSmall: { control: { type: "text" } },
    widthMobile: { control: { type: "text" } },
    icon: { control: { type: "object" } },
  },
} as Meta<typeof CardLink>;

const Template: StoryFn<typeof CardLink> = (args) => <CardLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: "#",
  title: "Title",
  text: "Text",
  subtitle: "Subtitle",
  icon: {
    iconUrl: "/images/storybook/widgets/card-link/onlyoffice.svg",
  },
};
