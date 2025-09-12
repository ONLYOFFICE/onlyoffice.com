import type { Meta, StoryObj } from "@storybook/react";
import { BestAlternativeCompatibility } from "./BestAlternativeCompatibility";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";

import { getAssetUrl } from "@utils/getAssetUrl";
export default {
  title: "Modules/Best-alternative/BestAlternativeCompatibility",
  component: BestAlternativeCompatibility,
  parameters: {
    docs: {
      description: {
        component:
          "Displays compatibility examples between ONLYOFFICE and an alternative editor (e.g. Google Docs) for DOCX/XLSX files.",
      },
    },
  },
  argTypes: {
    alternative: { control: { type: "object" } },
    items: { control: { type: "object" } },
  },
} as Meta<typeof BestAlternativeCompatibility>;

type Story = StoryObj<typeof BestAlternativeCompatibility>;

export const Default: Story = {
  args: {
    alternative: {
      label: "Google Docs",
      logo: {
        src: getAssetUrl("/images/storybook/modules/best-alternative/best-alternative-compatibility/logo_google_docs.svg"),
      },
    },
    items: [
      {
        type: "onlyOfficeDocx",
        src: getAssetUrl("/images/storybook/modules/best-alternative/best-alternative-compatibility/pdf/onlyoffice_docx.pdf"),
      },
      {
        type: "onlyOfficeXlsx",
        src: getAssetUrl("/images/storybook/modules/best-alternative/best-alternative-compatibility/pdf/onlyoffice_xlsx.pdf"),
      },
      {
        type: "alternativeDocx",
        src: getAssetUrl("/images/storybook/modules/best-alternative/best-alternative-compatibility/pdf/google_docs_docx.pdf"),
      },
      {
        type: "alternativeXlsx",
        src: getAssetUrl("/images/storybook/modules/best-alternative/best-alternative-compatibility/pdf/google_docs_xlsx.pdf"),
      },
    ],
    details: (
      <Text>
        What went wrong in Google Docs?{" "}
        <Link
          href="/images/storybook/modules/best-alternative/best-alternative-compatibility/pdf/google.pdf"
          target="_blank"
          label="Click here"
          color="main"
          textUnderline
          hover="underline-none"
        />{" "}
        to see details
      </Text>
    ),
  },
};
