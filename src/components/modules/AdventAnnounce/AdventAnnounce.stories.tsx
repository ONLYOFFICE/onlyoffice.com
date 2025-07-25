import { Meta, StoryFn } from "@storybook/react";
import { AdventAnnounce } from "./AdventAnnounce";
import { ILocale } from "@src/types/locale";
import { languages } from "@src/config/data/languages";

export default {
  title: "Modules/AdventAnnounce",
  component: AdventAnnounce,
  parameters: {
    docs: {
      description: {
        component:
          "Displays the current banner, providing users with important announcements and updates.",
      },
    },
  },
  argTypes: {
    locale: {
      control: { type: "select" },
      options: languages.map((lang) => lang.shortKey),
    },
  },
} as Meta<typeof AdventAnnounce>;

const Template: StoryFn<ILocale> = (args: ILocale) => (
  <AdventAnnounce {...args} />
);

export const Default = Template.bind({});
Default.args = {
  locale: "en",
};
