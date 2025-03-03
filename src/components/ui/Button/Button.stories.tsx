import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { IButton } from "./Button.types";

export default {
  title: "UI/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "Button is used for an action on a page.",
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
    children: {
      control: { type: "text" },
    },
    disabled: {
      control: { type: "boolean" },
      options: [true, false],
    },
    tabIndex: {
      control: { type: "number" },
    },
    type: {
      control: { type: "select" },
      options: ["button", "submit", "reset"],
    },
    title: {
      control: { type: "text" },
    },
    as: {
      control: { type: "select" },
      options: ["button", "a"],
    },
    href: {
      control: { type: "text" },
    },
    target: {
      control: { type: "select" },
      options: ["_self", "_blank", "_parent", "_top"],
    },
    rel: {
      control: { type: "text" },
    },
    fullWidth: {
      control: { type: "boolean" },
      options: [true, false],
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary", "quaternary", "quinary"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium"],
    },
  },
} as Meta<typeof Button>;

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ background: "#333333" }}>
      <div style={{ padding: "1rem" }}>{children}</div>
    </div>
  );
};

const Template: StoryFn<IButton> = (args: IButton) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Get it now",
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Get it now",
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Get it now",
  variant: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: "Get it now",
  variant: "tertiary",
};

export const Quaternary: StoryObj<typeof Button> = {
  render: (args) => (
    <Wrapper>
      <Button {...args} />
    </Wrapper>
  ),
  args: {
    label: "Get it now",
    variant: "quaternary",
  },
};

export const Quinary: StoryObj<typeof Button> = {
  render: (args) => (
    <Wrapper>
      <Button {...args} />
    </Wrapper>
  ),
  args: {
    label: "Get it now",
    variant: "quinary",
  },
};
