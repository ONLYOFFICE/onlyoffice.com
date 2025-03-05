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
    variant: {
      control: { type: "select" },
      options: ["outline-light-text", "outline-dark-text", "dark", "light"],
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

export const OutlineLightText = Template.bind({});
OutlineLightText.args = {
  variant: "outline-light-text",
  platform: "ForWindows",
};

export const Dark = Template.bind({});
Dark.args = {
  variant: "dark",
  platform: "ForLinux",
};

export const OutlineDarkText: StoryObj<typeof DownloadButton> = {
  render: (args) => (
    <DarkWrapper>
      <DownloadButton {...args} />
    </DarkWrapper>
  ),
  args: {
    variant: "outline-dark-text",
    platform: "ForMacOS",
  },
};

export const Light: StoryObj<typeof DownloadButton> = {
  render: (args) => (
    <YellowWrapper>
      <DownloadButton {...args} />
    </YellowWrapper>
  ),
  args: {
    variant: "light",
    platform: "AppStore",
  },
};
