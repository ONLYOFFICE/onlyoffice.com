import { Meta, StoryFn } from "@storybook/react";
import { PasswordInput } from "./PasswordInput";
import { IPasswordInput } from "./PasswordInput.types";

export default {
  title: "UI/PasswordInput",
  component: PasswordInput,
  parameters: {
    docs: {
      description: {
        component: "Input field for passwords.",
      },
    },
  },
  argTypes: {
    showPasswordToggle: {
      control: { type: "boolean" },
    },
  },
} as Meta<typeof PasswordInput>;

const Template: StoryFn<IPasswordInput> = (args: IPasswordInput) => <PasswordInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Password input",
  variant: "default",
};

export const Error = Template.bind({});
Error.args = {
  placeholder: "Password input",
  variant: "error",
};

export const Success = Template.bind({});
Success.args = {
  placeholder: "Password input",
  variant: "success",
};
