import { Meta, StoryFn } from "@storybook/react";
import { Header } from "./Header";
import { ILocale } from "@src/types/locale";
import { languages } from "@src/config/data/languages";

export default {
  title: "Modules/Header",
  component: Header,
  parameters: {
    docs: {
      description: {
        component:
          "Renders the header, allowing users to navigate easily throughout the application.",
      },
    },
  },
  argTypes: {
    locale: {
      control: { type: "select" },
      options: languages.map((lang) => lang.shortKey),
    },
  },
} as Meta<typeof Header>;

const Template: StoryFn<ILocale> = (args: ILocale) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  locale: "en",
};
