import { Meta, StoryFn } from "@storybook/react";
import { PhoneInput } from "./PhoneInput";
import { IInput } from "@src/components/ui/Input";

export default {
  title: "Widgets/PhoneInput",
  component: PhoneInput,
  parameters: {
    docs: {
      description: {
        component: "A phone number input component with country code selection",
      },
    },
  },
} as Meta<typeof PhoneInput>;

const Template: StoryFn<IInput> = (args: IInput) => {
  return <PhoneInput {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
