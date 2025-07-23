import { Meta, StoryFn } from "@storybook/react";
import { HeroTabs } from "./HeroTabs";
import { IHeroTabs } from "./HeroTabs.types";
import { Container } from "@src/components/ui/Container";

export default {
  title: "Modules/Download/HeroTabs",
  component: HeroTabs,
  parameters: {
    docs: {
      description: {
        component:
          "The `HeroTabs` component is a tab-based UI section that allows switching between different content blocks based on the selected tab.",
      },
    },
    argTypes: {
      heading: {
        control: { type: "text" },
      },
      items: {
        control: {
          type: "object",
        },
      },
    },
  },
} as Meta<typeof HeroTabs>;

const Template: StoryFn<IHeroTabs> = (args: IHeroTabs) => (
  <Container>
    <HeroTabs {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  heading: {
    text: "Download ONLYOFFICE Docs",
  },
  items: [
    {
      button: {
        id: "docspace-enterprise",
        icon: {
          url: "/images/storybook/modules/download/hero-switch/enterprise.svg",
        },
        label: "Enterprise",
      },
      children: [<>Enterprise content</>],
    },
    {
      button: {
        id: "docspace-community",
        icon: {
          url: "/images/storybook/modules/download/hero-switch/community.svg",
        },
        label: "Community",
      },
      children: [<>Community content</>],
    },
  ],
};
