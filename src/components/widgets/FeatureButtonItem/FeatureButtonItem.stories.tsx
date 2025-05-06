import { Button } from "@src/components/ui/Button";
import { FeatureButtonItem } from "./FeatureButtonItem";
import type { IFeatureButtonItem } from "./FeatureButtonItem.types";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Widgets/FeatureButtonItem",
  component: FeatureButtonItem,
  parameters: {
    docs: {
      description: {
        component: "The FeatureButtonItem component displays a feature item.",
      },
    },
  },
  argTypes: {
    id: { control: { type: "text" } },
    className: { control: { type: "text" } },
    desktopMaxWidth: { control: { type: "text" } },
    tabletMaxWidth: { control: { type: "text" } },
    mobileMaxWidth: { control: { type: "text" } },
    icon: { control: { type: "object" } },
    heading: { control: { type: "text" } },
    text: { control: { type: "text" } },
    button: { control: { type: "object" } },
  },
} as Meta<typeof FeatureButtonItem>;

const Template: StoryFn<IFeatureButtonItem> = (args: IFeatureButtonItem) => (
  <FeatureButtonItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  icon: {
    url: "/images/storybook/widgets/feature-item/working.svg",
  },
  heading: "Heading",
  text: "Working with office files directly within the Box frontend",
  button: [<Button key={0} label="Get it now" as="a" />],
};
