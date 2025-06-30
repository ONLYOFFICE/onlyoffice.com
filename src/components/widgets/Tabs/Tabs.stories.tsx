import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Tabs } from "./Tabs";
import { ITabs } from "./Tabs.types";

export default {
  title: "Widgets/Tabs",
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component: "Tabs. Navigate through tabs.",
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
    collapsible: {
      control: { type: "boolean" },
    },
    bgColor: {
      control: { type: "text" },
    },
  },
} as Meta<typeof Tabs>;

type ITabsItems = "tab-1" | "tab-2";

const Template: StoryFn<ITabs<ITabsItems>> = (args: ITabs<ITabsItems>) => {
  const [selected, setSelected] = useState(args.selected);

  const handleChange = (value: ITabsItems) => {
    setSelected(value);
  };

  return <Tabs {...args} selected={selected} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: "tab-1", label: "Tab 1", content: "Tab 1 content" },
    { id: "tab-2", label: "Tab 2", content: "Tab 2 content" },
  ],
  selected: "tab-1",
};
