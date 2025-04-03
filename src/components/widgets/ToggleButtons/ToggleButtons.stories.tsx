import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ToggleButtons } from "./ToggleButtons";
import { IToggleButtons } from "./ToggleButtons.types";

export default {
  title: "Widgets/ToggleButtons",
  component: ToggleButtons,
  parameters: {
    docs: {
      description: {
        component:
          "ToggleButtons allows users to choose a single option from a set of buttons.",
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
      control: { type: "object" },
    },
    selected: {
      control: { type: "text" },
    },
  },
} as Meta<typeof ToggleButtons>;

const Template: StoryFn<IToggleButtons> = (args: IToggleButtons) => {
  const [selected, setSelected] = useState(args.selected);

  const handleChange = (value: string) => {
    setSelected(value);
  };

  return (
    <ToggleButtons {...args} selected={selected} onChange={handleChange} />
  );
};

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: "toggle-button-1", label: { name: "Option 1" } },
    { id: "toggle-button-2", label: { name: "Option 2" } },
  ],
  selected: "toggle-button-1",
};
