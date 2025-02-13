import { Meta, StoryFn } from "@storybook/react";
import { CollapseGroup } from "./CollapseGroup";
import { ICollapseGroup } from "./CollapseGroup.types";

export default {
  title: "UI/CollapseGroup",
  component: CollapseGroup,
  parameters: {
    docs: {
      description: {
        component: "Group of hidden blocks. Expands by clicking on the title.",
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
    isAccordion: {
      control: { type: "boolean" },
      options: [true, false],
    },
    divider: {
      control: { type: "boolean" },
      options: [true, false],
    },
  },
} as Meta<typeof CollapseGroup>;

const Template: StoryFn<ICollapseGroup> = (args: ICollapseGroup) => (
  <CollapseGroup {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      label: "Item 1",
      content: "Content 1",
    },
    {
      label: "Item 2",
      content: "Content 2",
    },
  ],
  isAccordion: false,
  divider: false,
};
