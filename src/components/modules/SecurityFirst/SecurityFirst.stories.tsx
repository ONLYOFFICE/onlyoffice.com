import { Meta, StoryFn } from "@storybook/react";
import { SecurityFirst } from "./SecurityFirst";
import { ISecurityFirst } from "./SecurityFirst.types";

export default {
  title: "Modules/SecurityFirst",
  component: SecurityFirst,
  parameters: {
    docs: {
      description: {
        component: "The SecurityFirst component displays a list of features.",
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
} as Meta<typeof SecurityFirst>;

const Template: StoryFn<ISecurityFirst> = (args: ISecurityFirst) => (
  <SecurityFirst {...args} />
);

export const Default = Template.bind({});
