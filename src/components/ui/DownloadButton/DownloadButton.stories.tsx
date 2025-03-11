import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { DownloadButton } from "./DownloadButton";
import { IDownloadButton } from "./DownloadButton.types";

export default {
  title: "UI/DownloadButton",
  component: DownloadButton,
  parameters: {
    docs: {
      description: {
        component:
          "A button component for downloading applications on different platforms.",
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
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary", "quaternary"],
    },
    platform: {
      control: { type: "select" },
      options: [
        "ForWindows",
        "ForLinux",
        "ForMacOS",
        "AppStore",
        "GooglePlay",
        "SnapStore",
      ],
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
    title: {
      control: { type: "text" },
    },
    locale: {
      control: { type: "text" },
    },
    onClick: { action: "clicked" },
  },
} as Meta<typeof DownloadButton>;

const DarkWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ background: "#333333" }}>
      <div style={{ padding: "1rem" }}>{children}</div>
    </div>
  );
};

const YellowWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ background: "#FF6F3D" }}>
      <div style={{ padding: "1rem" }}>{children}</div>
    </div>
  );
};

const Template: StoryFn<IDownloadButton> = (args: IDownloadButton) => (
  <DownloadButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  platform: "ForWindows",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  platform: "ForWindows",
};

export const Tertiary: StoryObj<typeof DownloadButton> = {
  render: (args) => (
    <DarkWrapper>
      <DownloadButton {...args} />
    </DarkWrapper>
  ),
  args: {
    variant: "tertiary",
    platform: "ForWindows",
  },
};

export const Quaternary: StoryObj<typeof DownloadButton> = {
  render: (args) => (
    <YellowWrapper>
      <DownloadButton {...args} />
    </YellowWrapper>
  ),
  args: {
    variant: "quaternary",
    platform: "ForWindows",
  },
};
