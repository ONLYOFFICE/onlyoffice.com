import { Meta, StoryFn } from "@storybook/react";
import { Link } from "./Link";
import { ILink } from "./Link.types";

export default {
  title: "UI/Link",
  component: Link,
  parameters: {
    docs: {
      description: {
        component: "A customizable Link component for navigation.",
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
    href: {
      control: { type: "text" },
    },
    rel: {
      control: { type: "text" },
    },
    download: {
      control: { type: "boolean" },
      options: [true, false],
    },
    type: {
      control: { type: "text" },
    },
    target: {
      control: { type: "select" },
      options: ["_self", "_blank", "_parent", "_top"],
    },
    tabIndex: {
      control: { type: "number" },
    },
    display: {
      control: { type: "select" },
      options: ["block", "inline-block", "inline", "flex", "inline-flex"],
    },
    fontSize: {
      control: { type: "text" },
    },
    fontWeight: {
      control: { type: "select" },
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    lineHeight: {
      control: { type: "text" },
    },
    color: {
      control: { type: "color" },
      options: ["main"],
    },
    textTransform: {
      control: { type: "select" },
      options: ["uppercase", "lowercase", "capitalize"],
    },
    textUnderline: {
      control: { type: "boolean" },
      options: [true, false],
    },
    hover: {
      control: { type: "select" },
      options: ["color", "underline", "underline-none"],
    },
    style: {
      control: { type: "object" },
    },
  },
} as Meta<typeof Link>;

const Template: StoryFn<ILink> = (args: ILink) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Link",
  href: "#",
};
