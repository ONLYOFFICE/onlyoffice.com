import { Meta, StoryFn } from "@storybook/react";
import { Footer } from "./Footer";
import languages from "@src/config/languages.json";

export default {
  title: "Modules/Footer",
  component: Footer,
  parameters: {
    docs: {
      description: {
        component:
          "Displays the current menu in the footer, providing navigation links to different sections of the site and ensuring users have access to important information at the bottom of the page.",
      },
    },
  },
  argTypes: {
    locale: {
      control: { type: "select" },
      options: languages.map((lang) => lang.shortKey),
    },
  },
} as Meta<typeof Footer>;

const Template: StoryFn<{ locale: string }> = (args: { locale: string }) => (
  <Footer {...args} />
);

export const Default = Template.bind({});
Default.args = {
  locale: "en",
};
