import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Select } from "./Select";
import { ISelect, ISelectOption } from "./Select.types";

export default {
  title: "UI/Select",
  component: Select,
  parameters: {
    docs: {
      description: {
        component: "Select. Drop-down list.",
      },
    },
  },
  argTypes: {},
} as Meta<typeof Select>;

const Template: StoryFn<ISelect> = (args: ISelect) => {
  const [selected, setSelected] = useState<ISelectOption[]>([
    { label: "Option 1", value: "1" },
  ]);

  return <Select {...args} selected={selected} setSelected={setSelected} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "Select",
  options: [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ],
};
