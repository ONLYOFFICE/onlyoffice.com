import type { Meta, StoryFn } from "@storybook/react";
import { BestAlternativeReasons } from "./BestAlternativeReasons";
import { IBestAlternativeReasons } from "./BestAlternativeReasons.types";

import { getAssetUrl } from "@utils/getAssetUrl";
export default {
  title: "Modules/Best-alternative/BestAlternativeReasons",
  component: BestAlternativeReasons,
  parameters: {
    docs: {
      description: {
        component:
          "The BestAlternativeReasons component displays a list of features.",
      },
    },
  },
  argTypes: {
    items: { control: { type: "object" } },
  },
} as Meta<typeof BestAlternativeReasons>;

const Template: StoryFn<IBestAlternativeReasons> = (args) => (
  <BestAlternativeReasons {...args} />
);
export const Default = Template.bind({});
Default.args = {
  heading: {
    label: "4 reasons why ONLYOFFICE Docs is the best Zoho Docs alternative",
    maxWidth: "752px",
  },
  items: [
    {
      icon: {
        url: getAssetUrl("/images/storybook/modules/best-alternative/best-alternative-reasons/open_source.svg"),
      },
      heading: "Open-source",
      text: "ONLYOFFICE provides users with open-source solutions. Our source code is listed on GitHub what ensures transparency and reliability: you can check it out at any time.",
    },
    {
      icon: {
        url: getAssetUrl("/images/storybook/modules/best-alternative/best-alternative-reasons/desktop_app.svg"),
      },
      heading: "Web, desktop, mobile",
      text: "With ONLYOFFICE, you can work online from any browser and OS, edit docs offline with the free desktop apps for Windows, Linux, and macOS, as well as use free mobile apps for Android and iOS.",
    },
    {
      icon: {
        url: getAssetUrl("/images/storybook/modules/best-alternative/best-alternative-reasons/seamless.svg"),
      },
      heading: "Seamless collaboration",
      text: "ONLYOFFICE Docs provides users with character- and paragraph-level co-editing modes, review and track changes, version history, comments and mentions, built-in chat, plugins for audio and video calls.",
    },
    {
      icon: {
        url: getAssetUrl("/images/storybook/modules/best-alternative/best-alternative-reasons/ai_helper.svg"),
      },
      heading: "AI helper",
      text: "Make use of the AI assistant plugin to boost work with your texts: run word analysis and explore the meaning of unknown words, generate passages, images and keywords, summarize and translate stories, find synonyms.",
    },
  ],
};
export const LastVertical = Template.bind({});
LastVertical.args = {
  heading: {
    label: "3 reasons why ONLYOFFICE Docs is the best Zoho Docs alternative",
    maxWidth: "752px",
  },
  items: [
    {
      icon: {
        url: getAssetUrl("/images/storybook/modules/best-alternative/best-alternative-reasons/open_source.svg"),
      },
      heading: "Open-source",
      text: "ONLYOFFICE provides users with open-source solutions. Our source code is listed on GitHub what ensures transparency and reliability: you can check it out at any time.",
    },
    {
      icon: {
        url: getAssetUrl("/images/storybook/modules/best-alternative/best-alternative-reasons/desktop_app.svg"),
      },
      heading: "Web, desktop, mobile",
      text: "With ONLYOFFICE, you can work online from any browser and OS, edit docs offline with the free desktop apps for Windows, Linux, and macOS, as well as use free mobile apps for Android and iOS.",
    },
    {
      variant: "vertical",
      icon: {
        url: getAssetUrl("/images/storybook/modules/best-alternative/best-alternative-reasons/seamless.svg"),
      },
      heading: "Seamless collaboration",
      text: "ONLYOFFICE Docs provides users with character- and paragraph-level co-editing modes, review and track changes, version history, comments and mentions, built-in chat, plugins for audio and video calls.",
    },
  ],
};
