import type { Meta, StoryObj } from "@storybook/react";
import { FeatureList } from "./FeatureList";

const meta: Meta<typeof FeatureList> = {
  title: "UI/FeatureList",
  component: FeatureList,
  parameters: {
    docs: {
      description: {
        component: "The FeatureList component displays a list of features.",
      },
    },
  },
  args: {
    items: [
      "Ideal for teamwork",
      "Secure for sensitive documents",
      "Convenient for multiple co-authors",
      "Cost-effective for any budget",
    ],
  },
};

export default meta;
type Story = StoryObj<typeof FeatureList>;

export const Default: Story = {};
