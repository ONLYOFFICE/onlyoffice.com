import { Meta, StoryFn } from "@storybook/react";
import { HowToStartSwitcher } from "./HowToStartSwitcher";
import { IHowToStartSwitcher } from "./HowToStartSwitcher.types";
import { Container } from "@src/components/ui/Container";

export default {
  title: "Widgets/HowToStartSwitcher",
  component: HowToStartSwitcher,
  parameters: {
    docs: {
      description: {
        component:
          "The HowToStartSwitcher component displays a list of tabs with carousels.",
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
    defaultSelected: {
      control: { type: "text" },
    },
    namespace: {
      control: { type: "text" },
    },
  },
} as Meta<typeof HowToStartSwitcher>;

const Template: StoryFn<IHowToStartSwitcher> = (args: IHowToStartSwitcher) => (
  <Container>
    <HowToStartSwitcher {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      id: "first-tab",
      label: "First",
      items: [
        {
          imgUrl: "/images/storybook/widgets/how-to-start-switcher/step1-dc.svg",
          heading: "Log in to your ONLYOFFICE Docs account",
        },
        {
          imgUrl: "/images/storybook/widgets/how-to-start-switcher/step2-dc.svg",
          heading: "Install the integration app from the Marketplace",
        },
      ],
    },
    {
      id: "second-tab",
      label: "Second",
      items: [
        {
          imgUrl: "/images/storybook/widgets/how-to-start-switcher/step1-ds.svg",
          heading: "Log in to your ONLYOFFICE DocSpace account",
        },
        {
          imgUrl: "/images/storybook/widgets/how-to-start-switcher/step2-ds.svg",
          heading: "Install the integration app from the GitHub",
        },
      ],
    },
  ],
  defaultSelected: "",
  namespace: "",
};
