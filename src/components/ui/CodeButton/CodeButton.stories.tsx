import { Meta, StoryFn } from "@storybook/react";
import { CodeButton } from "./CodeButton";
import { ICodeButton } from "./CodeButton.types";

export default {
  title: "UI/CodeButton",
  component: CodeButton,
  parameters: {
    docs: {
      description: {
        component: "Code Button is used for an action on a page.",
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
    disabled: {
      control: { type: "boolean" },
      options: [true, false],
    },
  },
} as Meta<typeof CodeButton>;

const Template: StoryFn<ICodeButton> = (args: ICodeButton) => (
  <CodeButton {...args} />
);

export const Default = Template.bind({});
Default.args = {};
