import { Meta, StoryFn } from "@storybook/react";
import { ChooseSolution } from "./ChooseSolution";
import { IChooseSolution } from "./ChooseSolution.types";

export default {
  title: "Modules/ChooseSolution",
  component: ChooseSolution,
  parameters: {
    docs: {
      description: {
        component: "The ChooseSolution component displays a list of solutions.",
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
    heading: {
      control: { type: "text" },
    },
    items: {
      control: {
        type: "object",
      },
    },
    largeItems: {
      control: {
        type: "object",
      },
    },
  },
} as Meta<typeof ChooseSolution>;

const Template: StoryFn<IChooseSolution> = (args: IChooseSolution) => (
  <ChooseSolution {...args} />
);

export const Default = Template.bind({});
Default.args = {
  heading: "Get started and choose where to work",
  items: [
    {
      imgUrl: "/images/storybook/modules/choose-solution/docspace.svg",
      heading: "In ONLYOFFICE DocSpace",
      text: "Create rooms within your secure DocSpace, invite people, view, edit, and collaborate on all kinds of documents from any desktop or mobile device.",
      links: [
        {
          name: "Start with your free account",
          url: "https://www.onlyoffice.com/docspace-registration.aspx",
        },
      ],
    },
    {
      imgUrl: "/images/storybook/modules/choose-solution/connectors.svg",
      heading: "In the platform you use",
      text: "Connect Docs to edit documents directly from your app. 40+ ready integrations: Box, Moodle, Nextcloud, Odoo, Wordpress, etc.",
      links: [
        {
          name: "Get Docs now",
          url: "https://www.onlyoffice.com/all-connectors.aspx",
        },
      ],
    },
    {
      imgUrl: "/images/storybook/modules/choose-solution/developers.svg",
      heading: "In the platform you build",
      text: "Integrate Docs into your service to provide powerful document-editing and building capabilities to your customers under your brand.",
      links: [
        {
          name: "Learn more",
          url: "https://www.onlyoffice.com/developer-edition.aspx",
        },
      ],
    },
  ],
  largeItems: [
    {
      imgUrl: "/images/storybook/modules/choose-solution/from-pc.svg",
      heading: "From your PC",
      text: "Edit docs offline with free office apps for Windows, Linux, and macOS",
      links: [
        {
          name: "Download now",
          url: "https://www.onlyoffice.com/download-desktop.aspx",
        },
      ],
    },
    {
      imgUrl: "/images/storybook/modules/choose-solution/from-mobile.svg",
      heading: "From your mobile devices",
      text: "Work on documents on the go with free apps for iOS and Android devices",
      links: [
        {
          name: "Install now",
          url: "https://www.onlyoffice.com/download-desktop.aspx#mobile",
        },
      ],
    },
  ],
};
