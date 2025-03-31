import { Meta, StoryFn } from "@storybook/react";
import { SimpleHowToStart } from "./SimpleHowToStart";
import { ISimpleHowToStart } from "./SimpleHowToStart.types";
import { Container } from "@src/components/ui/Container";

export default {
  title: "Widgets/SimpleHowToStart",
  component: SimpleHowToStart,
  parameters: {
    docs: {
      description: {
        component:
          "The SimpleHowToStart component displays a list of steps.",
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
    },
  },
} as Meta<typeof SimpleHowToStart>;

const Template: StoryFn<ISimpleHowToStart> = (args: ISimpleHowToStart) => (
  <Container>
    <SimpleHowToStart {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      heading: "Log into your Box account",
    },
    {
      heading: "Go to the Box App Center",
    },
    {
      heading: "Add the ONLYOFFICE app*",
    },
  ],
};
