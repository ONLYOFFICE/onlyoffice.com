import React, { useEffect } from "react";
import type { Preview } from "@storybook/react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import languages from "../src/config/languages.json";
import "@src/styles/global.css";

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    toolbar: {
      icon: "globe",
      items: languages.map(({ shortKey, name }) => ({
        value: shortKey,
        title: name,
      })),
      showName: true,
    },
  },
};

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
    (Story, context) => {
      const { locale } = context.globals;

      useEffect(() => {
        if (locale && i18n.language !== locale) {
          i18n.changeLanguage(locale);
        }
      }, [locale]);

      return (
        <I18nextProvider i18n={i18n}>
          <Story />
        </I18nextProvider>
      );
    },
  ],
};

export default preview;
