import { Meta, StoryFn } from "@storybook/react";
import { FeatureSwitcher } from "./FeatureSwitcher";
import { IFeatureSwitcher } from "./FeatureSwitcher.types";
import { Container } from "@src/components/ui/Container";

import { getAssetUrl } from "@utils/getAssetUrl";
export default {
  title: "Widgets/FeatureSwitcher",
  component: FeatureSwitcher,
  parameters: {
    docs: {
      description: {
        component:
          "The FeatureSwitcher component displays a list of tabs with images.",
      },
    },
  },
  argTypes: {
    id: {
      control: { type: "text" },
    },
    className: {
      control: { type: "text" },
    },
    heading: {
      control: { type: "text" },
    },
    items: {
      control: {
        type: "object",
      },
    },
    imageWidth: {
      control: { type: "number" },
    },
    imageHeight: {
      control: { type: "number" },
    },
    position: {
      control: { type: "radio" },
      options: ["left", "right"],
    },
    customButton: {
      control: { type: "object" },
    },
  },
} as Meta<typeof FeatureSwitcher>;

const Template: StoryFn<IFeatureSwitcher> = (args: IFeatureSwitcher) => (
  <Container>
    <FeatureSwitcher {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      label: "View, edit and collaborate on docs, sheets, slides",
      image: {
        url: getAssetUrl("/images/storybook/widgets/feature-switcher/actions.png"),
        url2x: getAssetUrl("/images/storybook/widgets/feature-switcher/actions@2x.png"),
      },
    },
    {
      label: "Build fillable PDF forms and fill in them online",
      image: {
        url: getAssetUrl("/images/storybook/widgets/feature-switcher/pdf-forms.png"),
        url2x: getAssetUrl("/images/storybook/widgets/feature-switcher/pdf-forms@2x.png"),
      },
    },
  ],
};
