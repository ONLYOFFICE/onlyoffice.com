import { Meta, StoryFn } from "@storybook/react";
import { Pagination } from "./Pagination";
import { IPaginationProps } from "./Pagination.types";

export default {
  title: "UI/Pagination",
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component: "Pagination used to navigate between pages.",
      },
    },
  },
  argTypes: {
    totalPages: {
      control: { type: "number", min: 1, step: 1 },
    },
    currentPage: {
      control: { type: "number", min: 1, step: 1 },
    },
  },
  play: ({ args, updateArgs }) => {
    updateArgs({
      currentPage: Math.min(args.currentPage, args.totalPages), // Ограничиваем currentPage
    });
  },
} as Meta<typeof Pagination>;

const Template: StoryFn<IPaginationProps> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  totalPages: 18,
  currentPage: 10,
};
