import type { Meta, StoryFn } from "@storybook/react";
import { BestAlternativePresentation } from "./BestAlternativePresentation";
import { IBestAlternativePresentation } from "./BestAlternativePresentation.types";

import { getAssetUrl } from "@utils/getAssetUrl";
export default {
  title: "Modules/Best-alternative/BestAlternativePresentation",
  component: BestAlternativePresentation,
  parameters: {
    docs: {
      description: {
        component:
          "BestAlternativePresentation displays a heading and a linked image (typically a presentation preview).",
      },
    },
  },
  argTypes: {
    heading: {
      control: "text",
      description: "Heading displayed above the image",
    },
    link: {
      control: "object",
      description: "Link object with href and aria-label",
    },
    image: {
      control: "object",
      description: "Image object with src and alt",
    },
  },
} as Meta<typeof BestAlternativePresentation>;

const Template: StoryFn<IBestAlternativePresentation> = (args) => (
  <BestAlternativePresentation {...args} />
);

export const Default = Template.bind({});
Default.args = {
  heading: "Watch this presentation to see the difference between office suites:",
  link: {
    href: "https://help.onlyoffice.co/Products/Files/DocEditor.aspx?fileid=7720629&doc=WU8vNFJFVU5WWmlEZExXU0RVank0SWJRbTNKbVVqQUZod0x2ZjMwOTlQaz0_Ijc3MjA2Mjki0",
    ariaLabel: "Presentation ONLYOFFICE vs Google Docs",
  },
  image: {
    src: getAssetUrl("/images/storybook/modules/best-alternative/best-alternative-presentation/presentation.jpg"),
    alt: "ONLYOFFICE Docs vs Google Docs",
  },
};
