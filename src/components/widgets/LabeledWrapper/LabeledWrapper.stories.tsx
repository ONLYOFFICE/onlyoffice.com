import { Meta, StoryFn } from "@storybook/react";
import { LabeledWrapper } from "./LabeledWrapper";
import { ILabeledWrapper } from "./LabeledWrapper.types";

export default {
  title: "Widgets/LabeledWrapper",
  component: LabeledWrapper,
  parameters: {
    docs: {
      description: {
        component:
          "The LabeledWrapper component is designed to wrap a label and content",
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
    label: {
      control: { type: "text" },
    },
    leftSide: {
      control: { type: "object" },
    },
    rightSide: {
      control: { type: "object" },
    },
    children: {
      control: { type: "object" },
    },
  },
} as Meta<typeof LabeledWrapper>;

const Template: StoryFn<ILabeledWrapper> = (args: ILabeledWrapper) => (
  <LabeledWrapper {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  children: "Children",
};
