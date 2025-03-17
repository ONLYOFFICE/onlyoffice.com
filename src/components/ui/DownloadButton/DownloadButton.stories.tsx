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
        "windows",
        "linux",
        "macos",
        "app-store",
        "google-play",
        "snap-store",
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
  },
} as Meta<typeof DownloadButton>;

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ background: "#333333" }}>
      <div style={{ padding: "1rem" }}>{children}</div>
    </div>
  );
};

const Template: StoryFn<IDownloadButton> = (args: IDownloadButton) => (
  <DownloadButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  platform: "windows",
};

export const Primary = Template.bind({});
Primary.args = {
  platform: "windows",
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  platform: "windows",
  variant: "secondary",
};

export const Tertiary: StoryObj<typeof DownloadButton> = {
  render: (args) => (
    <Wrapper>
      <DownloadButton {...args} />
    </Wrapper>
  ),
  args: {
    platform: "windows",
    variant: "tertiary",
  },
};

export const Quaternary: StoryObj<typeof DownloadButton> = {
  render: (args) => (
    <Wrapper>
      <DownloadButton {...args} />
    </Wrapper>
  ),
  args: {
    platform: "windows",
    variant: "quaternary",
  },
};
