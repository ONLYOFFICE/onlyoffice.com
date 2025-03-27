import { Meta, StoryFn } from "@storybook/react";
import { SolutionCard } from "./SolutionCard";
import { ISolutionCard } from "./SolutionCard.types";
import { Button } from "@src/components/ui/Button";

export default {
  title: "Widgets/SolutionCard",
  component: SolutionCard,
  parameters: {
    docs: {
      description: {
        component:
          "The SolutionCard displays a card with an image, heading, text, and links.",
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
    imgUrl: {
      control: { type: "text" },
    },
    heading: {
      control: { type: "text" },
    },
    text: {
      control: { type: "text" },
    },
    links: {
      control: {
        type: "object",
      },
    },
    customLinks: {
      control: {
        type: "object",
      },
    },
    large: {
      control: { type: "boolean" },
      options: [true, false],
    },
    fullWidth: {
      control: { type: "boolean" },
    },
  },
} as Meta<typeof SolutionCard>;

const Template: StoryFn<ISolutionCard> = (args: ISolutionCard) => (
  <SolutionCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  imgUrl: "/images/storybook/widgets/get-started/docspace.svg",
  heading: "In ONLYOFFICE DocSpace",
  text: "Create rooms within your secure DocSpace, invite people, view, edit, and collaborate on all kinds of documents from any desktop or mobile device.",
  links: [
    {
      name: "Start with your free account",
      url: "https://www.onlyoffice.com/docspace-registration.aspx",
    },
  ],
};

export const Large = Template.bind({});
Large.args = {
  imgUrl: "/images/storybook/widgets/get-started/from-pc.svg",
  heading: "From your PC",
  text: "Edit docs offline with free office apps for Windows, Linux, and macOS",
  large: true,
  links: [
    {
      name: "Download now",
      url: "https://www.onlyoffice.com/download-desktop.aspx",
    },
  ],
};

export const LargeWithCustomLinks = Template.bind({});
LargeWithCustomLinks.args = {
  imgUrl: "/images/storybook/widgets/get-started/from-pc.svg",
  text: "Edit and co-edit your Nextcloud files in the desktop environment with ONLYOFFICE Desktop Editors on Windows, Linux, or macOS",
  large: true,
  customLinks: [
    <Button
      key={1}
      as="a"
      href="https://www.onlyoffice.com/download-desktop.aspx?from=officeforowncloud"
      label="Get free desktop apps"
    />,
  ],
};
