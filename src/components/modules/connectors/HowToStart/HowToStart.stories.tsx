import { Meta, StoryFn } from "@storybook/react";
import { ConnectorHowToStart } from "./HowToStart";
import { IHowToStart } from "./HowToStart.types";
import { Container } from "@src/components/ui/Container";

export default {
  title: "Modules/HowToStart",
  component: ConnectorHowToStart,
  parameters: {
    docs: {
      description: {
        component: "The HowToStart component displays a list of steps.",
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
      text: {
        control: { type: "text" },
      },
      contentWidth: {
        control: { type: "number" },
      },
      image: {
        control: { type: "object" },
      },
    },
  },
} as Meta<typeof ConnectorHowToStart>;

const Template: StoryFn<IHowToStart> = (args: IHowToStart) => (
  <Container>
    <ConnectorHowToStart {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      text: "Log into your Box account",
    },
    {
      text: "Go to the Box App Center",
    },
    {
      text: "Add the ONLYOFFICE app*",
    },
  ],
};
