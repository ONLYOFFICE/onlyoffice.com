import { Meta, StoryFn } from "@storybook/react";
import { AdventAnnounceBanner } from "./AdventAnnounceBanner";
import { ILocale } from "@src/types/locale";
import { languages } from "@src/config/languages";

export default {
  title: "Modules/AdventAnnounceBanner",
  component: AdventAnnounceBanner,
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
} as Meta<typeof AdventAnnounceBanner>;

const Template: StoryFn<ILocale> = (args: ILocale) => (
  <AdventAnnounceBanner {...args} />
);

export const Default = Template.bind({});
Default.args = {
  locale: "en",
};
