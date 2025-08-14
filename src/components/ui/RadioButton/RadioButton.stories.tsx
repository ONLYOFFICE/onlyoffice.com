import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { RadioButton } from "./RadioButton";
import { IRadioButton } from "./RadioButton.types";

export default {
  title: "UI/RadioButton",
  component: RadioButton,
  parameters: {
    docs: {
      description: {
        component: "A single selectable option in a group of mutually exclusive radio buttons.",
      },
    },
  },
  argTypes: {},
} as Meta<typeof RadioButton>;

const Template: StoryFn<IRadioButton> = (args) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const radioOptions = [
    { label: "Option 1", value: "option-1" },
    { label: "Option 2", value: "option-2" },
    { label: "Option 3", value: "option-3" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {radioOptions.map((radio) => (
        <RadioButton
          key={radio.value}
          {...args}
          id={radio.value}
          name="radio-group"
          value={radio.value}
          label={radio.label}
          checked={selectedValue === radio.value}
          onChange={(e) => setSelectedValue(e.target.value)}
        />
      ))}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
