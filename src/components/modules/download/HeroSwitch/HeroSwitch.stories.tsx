import { Meta, StoryFn } from "@storybook/react";
import { HeroSwitch } from "./HeroSwitch";
import { IHeroSwitch } from "./HeroSwitch.types";
import { Container } from "@src/components/ui/Container";

export default {
  title: "Modules/Download/HeroSwitch",
  component: HeroSwitch,
  parameters: {
    docs: {
      description: {
        component:
          "The `HeroSwitch` component is used to display a switchable hero section with selectable options and corresponding content panels.",
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
} as Meta<typeof HeroSwitch>;

const Template: StoryFn<IHeroSwitch> = (args: IHeroSwitch) => (
  <Container>
    <HeroSwitch {...args} />
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
        id: "docs-enterprise",
        icon: {
          url: "/images/storybook/modules/download/hero-switch/icons.svg",
          positionY: "-70px",
        },
        label: "Docs Enterprise",
        text: "Document editors to integrate into your business platform",
      },
      children: [<>Docs Enterprise content</>],
    },
    {
      button: {
        id: "docspace-enterprise",
        icon: {
          url: "/images/storybook/modules/download/hero-switch/icons.svg",
          positionY: "-70px",
        },
        label: "DocSpace Enterprise",
        text: "Document editors integrated into secure room-based DMS",
      },
      children: [<>DocSpace Enterprise content</>],
    },
  ],
};
