import React from "react";
import type { Preview } from "@storybook/react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import "@src/styles/global.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <I18nextProvider i18n={i18n}>
          <Story />
        </I18nextProvider>
      );
    },
  ],
};

export default preview;
