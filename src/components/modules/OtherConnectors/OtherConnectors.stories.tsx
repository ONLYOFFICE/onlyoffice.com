import { Meta, StoryFn } from "@storybook/react";
import { OtherConnectors } from "./OtherConnectors";
import { IOtherConnectors } from "./OtherConnectors.types";

export default {
  title: "Modules/OtherConnectors",
  component: OtherConnectors,
  parameters: {
    docs: {
      description: {
        component:
          "The OtherConnectors component displays a list of available connectors developed and provided by partners. The active connector is highlighted depending on the current route.",
      },
    },
    argTypes: {
      id: {
        control: { type: "text" },
      },
      className: {
        control: { type: "text" },
      },
    },
  },
} as Meta<typeof OtherConnectors>;

const Template: StoryFn<IOtherConnectors> = (args: IOtherConnectors) => (
  <OtherConnectors {...args} />
);

export const Default = Template.bind({});
