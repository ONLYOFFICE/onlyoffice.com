import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { PasswordInput } from "./PasswordInput";
import { IPasswordInput } from "./PasswordInput.types";

export default {
  title: "Widgets/PasswordInput",
  component: PasswordInput,
  parameters: {
    docs: {
      description: {
        component:
          "`PasswordInput` includes a password field with a toggle to show or hide the value. It also features a built-in password complexity checker with visual feedback: `bad`, `good`, or `perfect`.",
      },
    },
  },
} as Meta<typeof PasswordInput>;

const Template: StoryFn<IPasswordInput> = (args: IPasswordInput) => {
  const [value, setValue] = useState(args.value || "");

  return (
    <PasswordInput
      {...args}
      value={args.value ?? value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
export const Default = Template.bind({});
Default.args = {
  label: "Password",
};
